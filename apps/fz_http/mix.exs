defmodule FzHttp.MixProject do
  use Mix.Project

  def project do
    [
      app: :fz_http,
      version: "0.2.0",
      build_path: "../../_build",
      config_path: "../../config/config.exs",
      deps_path: "../../deps",
      lockfile: "../../mix.lock",
      elixir: "~> 1.11",
      elixirc_paths: elixirc_paths(Mix.env()),
      compilers: [:phoenix, :gettext] ++ Mix.compilers(),
      start_permanent: Mix.env() == :prod,
      test_coverage: [tool: ExCoveralls],
      preferred_cli_env: [
        coveralls: :test,
        "coveralls.detail": :test,
        "coveralls.post": :test,
        "coveralls.html": :test
      ],
      aliases: aliases(),
      deps: deps()
    ]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
    [
      mod: {FzHttp.Application, []},
      extra_applications: [:logger, :runtime_tools]
    ]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [
      {:fz_common, in_umbrella: true},
      {:decimal, "~> 2.0"},
      {:phoenix, "~> 1.6.0-rc.0", override: true},
      {:cloak, "~> 1.1"},
      {:cloak_ecto, "~> 1.2"},
      {:excoveralls, "~> 0.14", only: :test},
      {:floki, ">= 0.0.0", only: :test},
      {:argon2_elixir, "~> 2.0"},
      {:phoenix_pubsub, "~> 2.0"},
      {:phoenix_ecto, "~> 4.4"},
      {:ecto_sql, "~> 3.7"},
      {:ecto_network, "~> 1.3"},
      {:inflex, "~> 2.1"},
      {:plug, "~> 1.12.1"},
      {:postgrex, "~> 0.15.10"},
      {:phoenix_html, "~> 3.0.3"},
      {:phoenix_live_reload, "~> 1.3", only: :dev},
      {:phoenix_live_view, "~> 0.16.3"},
      {:gettext, "~> 0.18"},
      {:jason, "~> 1.2"},
      {:telemetry, "~> 0.4.3"},
      {:plug_cowboy, "~> 2.5"},
      {:credo, "~> 1.5", only: [:dev, :test], runtime: false}
    ]
  end

  # Aliases are shortcuts or tasks specific to the current project.
  # For example, to create, migrate and run the seeds file at once:
  #
  #     $ mix ecto.setup
  #
  # See the documentation for `Mix` for more info on aliases.
  defp aliases do
    [
      "ecto.seed": "run priv/repo/seeds.exs",
      "ecto.setup": ["ecto.create", "ecto.migrate", "run priv/repo/seeds.exs"],
      "ecto.reset": ["ecto.drop", "ecto.setup"],
      test: [
        "ecto.create --quiet",
        "ecto.migrate",
        "test"
      ],
      "assets.compile": &compile_assets/1
    ]
  end

  defp compile_assets(_) do
    Mix.shell().cmd("cd assets && ./node_modules/.bin/webpack --mode development", quiet: false)
  end
end