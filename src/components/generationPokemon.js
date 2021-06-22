import React, { useEffect, useState } from "react";
import fetch from 'node-fetch';

export default function PokemonSearch() {
    // Pokemon Endpoints
    const generationEndpoint = "https://pokeapi.co/api/v2/generation";
    const nameEndpoint = "https://pokeapi.co/api/v2/pokemon";

    // Fetch Pokemon by generation id
    async function fetchPokemon(id) {
        const response = await fetch(`${generationEndpoint}/${id}`);
        const data = await response.json();
        // Store Pokemon data
        setPokemonData(data);
        // Lets us know state changed/data is loaded
        setPokemonDataLoaded(true);
        console.log(data);
    }

    // Fetch Pokemon
    async function fetchPokemonName(name) {
    // Fetch Pokemon by name
        const response = await fetch(`${nameEndpoint}/${name}`);
        const data = await response.json();
        // Store Pokemon data
        setPokemonData([data]);
    }

    // Error handler
        function handleError(err) {
        console.log(`Bugger! Something went wrong: ${err}`);
        console.log(err);
    }

    // Fetches Pokemon when dropdown option selected
    function handleChange(e) {
        fetchPokemon(e.target.value).catch(handleError);
    }

    // Transforms the first character of a string to uppercase and replaces - with a space
    function humanize(str) {
        var i, frags = str.split('-');
        for (i=0; i<frags.length; i++) {
            frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
        return frags.join(' ');
    }

    // Stores the Pokemon data
    const [pokemonData, setPokemonData] = useState([]);
    // Set initial state before data is available
    const [pokemonDataLoaded, setPokemonDataLoaded] = useState(false);


    // Array to store pokemon names from dropdown action
    let pokemonNames = [];

    // Need to wait for pokemonNames to update after map method completed below, probably using a proimise or aysnc/await.
    // Then need to fetch again from API using these names to get the images and pokemon data.


  return(
    <>
        <h2>Filter By Generation</h2>
        <select onChange={handleChange}>
            <option value="" defaultValue hidden>Choose the generation...</option>
            <option value="1">Generation 1</option>
            <option value="2">Generation 2</option>
            <option value="3">Generation 3</option>
            <option value="4">Generation 4</option>
            <option value="5">Generation 5</option>
            <option value="6">Generation 6</option>
            <option value="7">Generation 7</option>
            <option value="8">Generation 8</option>
        </select>
        {pokemonDataLoaded ? pokemonData.pokemon_species.map((data, index) => {
            // pokemonNames.forEach(data.name);
            return (
                <h3 key={index}>{humanize(data.name)}</h3>
            )
        }) : null}
    </>
)}