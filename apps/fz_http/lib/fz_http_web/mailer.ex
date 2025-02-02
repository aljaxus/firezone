defmodule FzHttpWeb.Mailer do
  @moduledoc """
  Outbound Email Sender.
  """

  use Swoosh.Mailer, otp_app: :fz_http

  alias Swoosh.{Adapters, Email}

  @provider_mapping %{
    "smtp" => Adapters.SMTP,
    "mailgun" => Adapters.Mailgun,
    "mandrill" => Adapters.Mandrill,
    "sendgrid" => Adapters.Sendgrid,
    "post_mark" => Adapters.Postmark,
    "sendmail" => Adapters.Sendmail
  }

  def active? do
    mailer_config = FzHttp.Config.fetch_env!(:fz_http, FzHttpWeb.Mailer)
    mailer_config[:from_email] && mailer_config[:adapter]
  end

  def default_email do
    # Fail hard if email not configured
    from_email =
      FzHttp.Config.fetch_env!(:fz_http, FzHttpWeb.Mailer)
      |> Keyword.fetch!(:from_email)

    Email.new()
    |> Email.from(from_email)
  end

  def from_configuration(%FzHttp.Configurations.Mailer{} = mailer) do
    from_email = mailer.from
    config = Map.fetch!(mailer.configs, mailer.provider)
    adapter = Map.fetch!(@provider_mapping, mailer.provider)

    [
      from_email: from_email,
      adapter: adapter
    ] ++ Enum.map(config, fn {k, v} -> {String.to_atom(k), v} end)
  end
end
