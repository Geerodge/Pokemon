<p align="center">
    <img alt="Gatsby" src="https://www.svgrepo.com/show/276264/pokeball-pokemon.svg" width="60" />
</p>
<h1 align="center">
  3SC Web Developer Test
</h1>

## Getting Started

Clone the repository

```
git clone https://github.com/Geerodge/Pokemon.git
```

Install all the required packages

```
npm install
```

## Built With

* [Gatsby](https://www.gatsbyjs.com/) - The web framework used
* [Reactjs](https://reactjs.org/) - JavaScript library

## Libraries

Didn't use any and in hindsight I probably should of used the [Pokedex Promise v2](https://github.com/PokeAPI/pokedex-promise-v2) libary because of the timeframe.

## Challenges

It was challenging fetching data a second time based off data I had received off an initial fetch (see generationPokemon.js).

I was using the push method to populate data into the array pokemonNames, and had to wait for that to complete before I could proceed. This would cause useEffect Hook to create an infinate loop.

I haven't had much experience with async/await/promise and I'm afraid my knowledge falls a little short here.

At this point I decided to add a bit of styling, added some icons and font, and make do with what I had.

It's a shame I wasn't able to complete more of the user stories, it would have been fun to create a compare feature.

If I had more time it would have been great to build out a user interface, tidy up the styling and create a ranking/compare feature - perhaps some Pokemon 16-bit music as well.

I also noticed that there was a GraphQL beta API, that would have worked great with Gatsby.

## Authors

* **George McEntegart** - [Website](https://georgemc.net/)

## License

This project is licensed under the BSD Zero Clause License (0BSD) - see the [LICENSE](LICENSE) file for details



