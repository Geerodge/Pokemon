import React, { useState } from "react";
import fetch from 'node-fetch';

export default function PokemonSearch() {
  // Pokemon Endpoints
  const baseEndpoint = "https://pokeapi.co/api/v2/pokemon";
  
  // Fetch Pokemon
  async function fetchPokemon(name) {
    // Fetch Pokemon by name
    const response = await fetch(`${baseEndpoint}/${name}`);
    const data = await response.json();
    // Store Pokemon data
    setPokemonData([data]);
    console.log(data);
  }

  // Error handler
  function handleError(err) {
    console.log(`Bugger! Something went wrong: ${err}`);
    console.log(err);
  }

  // Stores the Pokemon data from the form input
  const [name, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);

  // Deals with form actions
  function handleChange(e) {
    setPokemon(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetchPokemon(name).catch(handleError);
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
          <input 
              type="text"
              placeholder="Search for Pokémon..."
              onChange={handleChange}
          />
      </form>
      {/* Maps over the data array to display Pokemon information */}
      {pokemonData.map((data) => {
        return(
          <div key={data.id}>
            <h2>{data.name}</h2>
            <p>{data.sprites.front_default}</p>
            <p>{data.types[0].type.name}</p>
            {/* Converts height from decimeters to centimeters */}
            <p>{Math.round(data.height) * 10} cm</p>
            {/* Converts weight from hectograms to kilograms */}
            <p>{Math.round(data.weight) * 0.1} kg</p>
            <h3>Stats</h3>
            {/* Loops through the stats array */}
            {data.stats.map((data) => {
              return(
                <p key={data.stat.name.toString()}>{data.stat.name}: {data.base_stat}</p>
              )
            })}
          </div>
        )
        })}
    </>
)}
