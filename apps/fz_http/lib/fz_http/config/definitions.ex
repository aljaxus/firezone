defmodule FzHttp.Config.Definitions do
  alias FzHttp.Configurations
  alias FzHttp.Validator
  import Ecto.Changeset

  # @doc_sections [
  #   {"WebServer", [:external_url]},
  #   {"Admin Setup",
  #    "Options responsible for initial admin provisioning and resetting the admin password.",
  #    [:default_admin_email, :default_admin_password]},
  #   {"Secrets", []}
  # ]

  # TODO:
  # WIREGUARD_IPV4_NETWORK
  # WIREGUARD_IPV4_ADDRESS
  # WIREGUARD_IPV6_NETWORK
  # WIREGUARD_IPV6_ADDRESS
  # SECURE_COOKIES
  # OUTBOUND_EMAIL_FROM
  # OUTBOUND_EMAIL_PROVIDER
  # OUTBOUND_EMAIL_ADAPTER # new
  # OUTBOUND_EMAIL_ADAPTER_OPTS # new
  # MAX_DEVICES_PER_USER
  # CONNECTIVITY_CHECKS_ENABLED
  # CONNECTIVITY_CHECKS_INTERVAL
  # TELEMETRY_ENABLED
  # WIREGUARD_PRIVATE_KEY_PATH
  # SAML_ENTITY_ID
  # SAML_KEYFILE_PATH
  # SAML_CERTFILE_PATH
  # HTTP_CLIENT_SSL_OPTS
  # PHOENIX_LISTEN_ADDRESS
  # PHOENIX_PORT
  # EXTERNAL_TRUSTED_PROXIES
  # PRIVATE_CLIENTS
  # WIREGUARD_PORT
  # EGRESS_INTERFACE
  # WIREGUARD_IPV4_ENABLED
  # WIREGUARD_IPV6_ENABLED
  # WIREGUARD_IPV4_MASQUERADE
  # WIREGUARD_IPV6_MASQUERADE
  # {"logo"},
  # {"openid_connect_providers"},
  # {"saml_identity_providers"}

  @configuration [
    {:external_url, {:uri, []},
     required: true,
     doc: """
     The external URL the web UI will be accessible at.

     Must be a valid and public FQDN for ACME SSL issuance to function.

     You can add a path suffix if you want to serve firezone from a non-root path,
     eg: `https://firezone.mycorp.com/vpn`.
     """},
    {:default_admin_email, {:email, []},
     required: false,
     legacy_keys: [{:env, "ADMIN_EMAIL", "0.9"}],
     doc: """
     Primary administrator email.
     """},
    {:default_admin_password, {:password, []},
     required: false,
     doc: """
     Default password that will be used for creating or resetting the primary administrator account.
     """},
    {:guardian_secret_key, {:base64_string, []},
     required: true,
     doc: """
     Secret key used for signing JWTs.
     """},
    {:database_encryption_key, {:base64_string, []},
     required: true,
     doc: """
     Secret key used for encrypting sensitive data in the database.
     """},
    {:secret_key_base, {:base64_string, []},
     required: true,
     doc: """
     Primary secret key base for the Phoenix application.
     """},
    {:live_view_signing_salt, {:base64_string, []},
     required: true,
     doc: """
     Signing salt for Phoenix LiveView connection tokens.
     """},
    {:cookie_signing_salt, {:base64_string, []},
     required: true,
     doc: """
     Encryption salt for cookies issued by the Phoenix web application.
     """},
    {:cookie_encryption_salt, {:base64_string, []},
     required: true,
     doc: """
     Signing salt for cookies issued by the Phoenix web application.
     """},
    {:telemetry_id, {:string, []},
     default: "unknown", legacy_keys: [{:env, "TID", "0.9"}], doc: false},
    {:allow_unprivileged_device_management, {:boolean, []},
     default: true,
     doc: """
     Enable or disable management of devices on unprivileged accounts.
     """},
    {:allow_unprivileged_device_configuration, {:boolean, []},
     default: true,
     doc: """
     Enable or disable configuration of device network settings for unprivileged users.
     """},
    {:local_auth_enabled, {:boolean, []},
     default: true,
     doc: """
     Enable or disable the local authentication method for all users.
     """},
    {:disable_vpn_on_oidc_error, {:boolean, []},
     default: false,
     doc: """
     Enable or disable auto disabling VPN connection on OIDC refresh error.
     """},
    {:default_client_persistent_keepalive,
     {:integer, greater_than_or_equal_to: 0, less_than_or_equal_to: 120},
     default: 25,
     doc: """
     Interval for WireGuard [persistent keepalive](https://www.wireguard.com/quickstart/#nat-and-firewall-traversal-persistence).

     If you experience NAT or firewall traversal problems, you can enable this to send a keepalive packet every 25 seconds.
     Otherwise, keep it disabled with a 0 default value.
     """},
    {:default_client_mtu, {:integer, greater_than_or_equal_to: 576, less_than_or_equal_to: 1500},
     default: 1280,
     doc: """
     WireGuard interface MTU for devices. 1280 is a safe bet for most networks.
     Leave this blank to omit this field from generated configs.
     """},
    {:default_client_endpoint,
     {:one_of, [{:host, [allow_port: true]}, {:ip, [allow_port: true]}]},
     default: "${external_url.host}:${wireguard_port}",
     doc: """
     IPv4, IPv6 address, or FQDN that devices will be configured to connect to. Defaults to this server's FQDN.
     """},
    {:default_client_dns, {:list, ",", {:ip, [types: [:ipv4]]}},
     docs: """
     Comma-separated list of DNS servers to use for devices.
     Leave this blank to omit the <code>DNS</code> section from
     generated configs.
     """},
    {:default_client_allowed_ips, {:list, ",", {:one_of, [{:cidr, []}, {:ip, []}]}},
     default: "0.0.0.0/0,::/0",
     doc: """
     Configures the default AllowedIPs setting for devices.
     AllowedIPs determines which destination IPs get routed through
     Firezone. Specify a comma-separated list of IPs or CIDRs here to achieve split tunneling, or use
     <code>0.0.0.0/0, ::/0</code>
     to route all device traffic through this Firezone server.
     """},
    {:vpn_session_duration,
     {:integer, greater_than_or_equal_to: 0, less_than_or_equal_to: 2_147_483_647},
     doc: """
     Optionally require users to periodically authenticate to the Firezone web UI in order to keep their VPN sessions active.
     """}
  ]

  def build_config(spec \\ @configuration) do
    db_configurations = Configurations.get_configuration!()
    env_configurations = System.get_env()

    spec
    |> Enum.map(&build_config_item(&1, env_configurations, db_configurations))
  end

  defp build_config_item({key, type, opts}, env_configurations, db_configurations) do
    {resolve_opts, opts} = Keyword.split(opts, [:legacy_keys, :default])
    {validate_opts, opts} = Keyword.split(opts, [:legacy_keys, :default])
    {source, value} = resolve_value(key, env_configurations, db_configurations, resolve_opts)
    value = cast_value(value, type)
    validation_errors = validate_value(source, key, value, type, validate_opts)
    {key, value, validation_errors, opts}
  end

  defp resolve_value(key, env_configurations, db_configurations, opts) do
    with :error <- resolve_env_value(env_configurations, key, opts),
         :error <- resolve_db_value(db_configurations, key),
         :error <- resolve_default_value(opts) do
      {:none, nil}
    else
      {:ok, {source, value}} -> {source, value}
    end
  end

  defp resolve_env_value(env_configurations, key, opts) do
    legacy_keys =
      opts
      |> Keyword.get(:legacy_keys, [])
      |> Enum.flat_map(fn
        {:env, key, _removed_at} -> [key]
        _other -> []
      end)

    Enum.find_value([key] ++ legacy_keys, :error, fn key ->
      key =
        key
        |> to_string()
        |> String.upcase()

      case Map.fetch(env_configurations, key) do
        {:ok, value} -> {:ok, {{:env, key}, value}}
        :error -> nil
      end
    end)
  end

  defp resolve_db_value(db_configurations, key) do
    case Map.fetch(db_configurations, key) do
      {:ok, value} -> {:ok, {:db, value}}
      :error -> :error
    end
  end

  defp resolve_default_value(opts) do
    with {:ok, value} <- Keyword.fetch(opts, :default) do
      # TODO: replace patterns
      value = String.replace(value, "${external_url.host}", "localhost")
      {:ok, {:default, value}}
    end
  end

  defp cast_value("true", {:boolean, []}), do: true
  defp cast_value("false", {:boolean, []}), do: false
  defp cast_value("", {:boolean, []}), do: nil

  defp cast_value(value, {:integer, []}) when is_binary(value), do: String.to_integer(value)
  defp cast_value(value, {:integer, []}) when is_number(value), do: value
  defp cast_value(nil, {:integer, []}), do: nil

  defp cast_value(value, {:list, separator, type}) when is_binary(value),
    do: value |> String.split(separator) |> cast_value(type)

  defp cast_value(value, _type), do: value

  defp validate_value(_source, key, value, type, validate_opts) do
    validate_value_changeset(key, value, type)
    |> maybe_validate_required(key, validate_opts)
  end

  defp validate_value_changeset(key, value, {:boolean, []}) do
    {%{}, %{key => :boolean}}
    |> cast(%{key => value}, [key])
  end

  defp validate_value_changeset(key, value, {:string, opts}) do
    {%{}, %{key => :string}}
    |> cast(%{key => value}, [key])
    |> validate_length(key, opts)
  end

  defp validate_value_changeset(key, value, {:integer, opts}) do
    {%{}, %{key => :integer}}
    |> cast(%{key => value}, [key])
    |> validate_number(key, opts)
  end

  defp validate_value_changeset(key, value, {:uri, []}) do
    {%{}, %{key => :string}}
    |> cast(%{key => value}, [key])
    |> Validator.validate_uri(key)
  end

  defp validate_value_changeset(key, value, {:email, []}) do
    {%{}, %{key => :string}}
    |> cast(%{key => value}, [key])
    |> Validator.validate_email(key)
  end

  defp validate_value_changeset(key, value, {:base64_string, []}) do
    {%{}, %{key => :string}}
    |> cast(%{key => value}, [key])
    |> Validator.validate_base64(key)
  end

  defp validate_value_changeset(key, value, {:host, opts}) do
    {%{}, %{key => :string}}
    |> cast(%{key => value}, [key])
    |> Validator.validate_fqdn(key, opts)
  end

  defp validate_value_changeset(key, value, {:ip, opts}) do
    {%{}, %{key => :string}}
    |> cast(%{key => value}, [key])
    |> Validator.validate_ip(key, opts)
  end

  defp validate_value_changeset(key, value, {:cidr, opts}) do
    {%{}, %{key => :string}}
    |> cast(%{key => value}, [key])
    |> Validator.validate_ip(key, opts)
  end

  defp validate_value_changeset(key, value, {:password, []}) do
    {%{}, %{key => :string}}
    |> cast(%{key => value}, [key])
    |> validate_length(key, min: 5)
  end

  defp validate_value_changeset(key, value, {:list, _separator, type}) do
    Enum.map(value, fn value ->
      validate_value_changeset(key, value, type)
    end)
  end

  defp validate_value_changeset(key, value, {:one_of, validations}) do
    changesets =
      Enum.map(validations, fn validation ->
        validate_value_changeset(key, value, validation)
      end)

    Enum.find(changesets, & &1.valid?)
    |> case do
      nil ->
        errors = Enum.flat_map(changesets, & &1.errors)
        %{List.first(changesets) | errors: errors}

      valid_changeset ->
        valid_changeset
    end

    if Enum.any?(changesets, & &1.valid?) do
      %{key => value}
    else
      %{key => {:error, "invalid value"}}
    end

    {%{}, %{key => :string}}
    |> cast(%{key => value}, [key])
    |> validate_length(key, min: 5)
  end

  # TODO: add %Ecto.Changeset{} = changeset match
  defp maybe_validate_required(changeset, key, validate_opts) do
    if Keyword.get(validate_opts, :required, false) do
      validate_required(changeset, key)
    else
      changeset
    end
  end
end
