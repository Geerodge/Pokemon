import * as React from "react"
import PokemonSearch from "../components/searchPokemon"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Pokemon</h1>
    <PokemonSearch />
  </Layout>
)

export default IndexPage
