import React, { useState } from "react";
import fetch from 'node-fetch';

export default function PokemonSearch() {
  // Pokemon Endpoints
  const baseEndpoint = "https://pokeapi.co/api/v2/pokemon";

  // Function to fetch Pokemon by name
  async function displayPokemon(name) {
    const response = await fetch(`${baseEndpoint}/${name}`);
    const data = await response.json();
    console.log(data);
  }

  // Error handler
  function handleError(err) {
    console.log(`Bugger! Something went wrong: ${err}`);
    console.log(err);
  }

  // Tracks the value of the form input
  const [name, setPokemon] = useState("pikachu");

  function handleChange(e) {
    setPokemon(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    displayPokemon(name).catch(handleError);
  }

  return (
      <form onSubmit={handleSubmit}>
          <input 
              type="text"
              placeholder="Search for Pokémon..."
              onChange={handleChange}
          />
      </form>
)}
