import * as React from "react"
import PokemonSearch from "../components/searchPokemon"
import PokemonGeneration from "../components/generationPokemon"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PokemonSearch />
    <PokemonGeneration />
  </Layout>
)

export default IndexPage
