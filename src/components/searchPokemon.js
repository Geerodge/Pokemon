import React from "react";
import fetch from 'node-fetch';

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

displayPokemon('pikachu').catch(handleError);

export default function PokemonSearch() {
  return (
      <form>
          <input 
              type="text"
              placeholder="Search for Pokémon..."
          />
      </form>
)}
