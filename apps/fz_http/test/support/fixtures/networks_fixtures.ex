defmodule FzHttp.NetworksFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `FzHttp.Networks` context.
  """

  alias FzHttp.Networks

  def network(attrs \\ %{}) do
    default_attrs = %{
      private_key: "test",
      public_key: "test",
      interface_name: "wg-test",
      listen_port: 1
    }

    {:ok, network} = Networks.create_network(Map.merge(default_attrs, attrs))
    network
  end
end