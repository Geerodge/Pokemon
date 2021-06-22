import * as React from "react"
import PokemonSearch from "../components/searchPokemon"
import PokemonGeneration from "../components/generationPokemon"
import GlobalStyles from "../styles/GlobalStyles";

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
   <GlobalStyles>
    <Layout>
      <Seo title="Home" />
      <PokemonSearch />
      <PokemonGeneration />
    </Layout>
  </GlobalStyles>
)

export default IndexPage