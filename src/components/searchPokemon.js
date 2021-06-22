import React, { useState } from "react";
import fetch from 'node-fetch';
import SearchPokemonStyles from "../styles/SearchPokemonStyles";
import { SiPokemon } from 'react-icons/si';

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
    setPokemon(e.target.value.toLowerCase());
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetchPokemon(name).catch(handleError);
  }

  // Transforms the first character of a string to uppercase and replaces - with a space
  function humanize(str) {
    var i, frags = str.split('-');
    for (i=0; i<frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }

  return(
    <SearchPokemonStyles>
      <div class="container">
        <div class="top">
          <SiPokemon className="pokemon-title" size={300} />
          <form onSubmit={handleSubmit}>
              <input 
                  type="text"
                  placeholder="Search for Pokémon..."
                  onChange={handleChange}
                  />
          </form>
        </div>
        {/* Maps over the data to display Pokemon information */}
        {pokemonData.map((data) => {
          return(
            <>
              <div key={data.id} class="left">
                  <h2>{humanize(data.name)}</h2>
                  <img 
                    src={data.sprites.front_default}
                    alt={data.name}
                    // Be a shiny Pokemon on mouse hover :)
                    onMouseOver={e => (e.currentTarget.src = data.sprites.front_shiny)}
                    onMouseOut={e => (e.currentTarget.src = data.sprites.front_default)}
                  />
                    <p><strong>Type</strong>: {humanize(data.types[0].type.name)}</p>
                    {/* Converts height from decimeters to centimeters */}
                    <p><strong>Height</strong> {Math.round(data.height) * 10} cm</p>
                    {/* Converts weight from hectograms to kilograms */}
                    <p><strong>Weight</strong> {Math.round(data.weight) * 0.1} kg</p>
                </div>
                <div class="right">
                  <h3>Stats</h3>
                  {/* Maps through the stats */}
                  <ul>     
                  {data.stats.map((data, index) => {
                    return(
                      <li key={index}>{humanize(data.stat.name)}: {data.base_stat}</li>
                      )
                    })}
                  </ul>
                  <h3>Abilities</h3>
                  <ul>
                    {/* Maps through the abilities */}
                    {data.abilities.map((data, index) => {
                      return(
                          <li key={index}>{humanize(data.ability.name)}</li>
                          )
                        })}
                  </ul>
                </div>
              </>
          )
          })}
      </div>
    </SearchPokemonStyles>
)}