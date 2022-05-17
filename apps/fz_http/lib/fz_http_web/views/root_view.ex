defmodule FzHttpWeb.RootView do
  use FzHttpWeb, :view

  alias FzCommon.FzCrypto

  def authorization_uri(oidc, provider) do
    params = %{
      state: FzCrypto.rand_string()
    }

    oidc.authorization_uri(provider, params)
  end
end