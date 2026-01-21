import { fetchPokemon } from '../network/pokemonAPI.js';
import { storeData, getData } from '../storage/localStorage.js';

const pokemonList = document.getElementById('pokemonList');

const createPokemonItem = (pokemon) => {
  const li = document.createElement('li');
  
  const span = document.createElement('span');
  span.textContent = pokemon.name;
  
  const addToFavorites = document.createElement('button');
  addToFavorites.textContent = 'Add to favorites';
  addToFavorites.addEventListener('click', () => {
    const favorites = getData("favorites");
    
    if(favorites.includes(pokemon.name)) {
        return alert("Pokemon is already in favorites")
    }
    
    favorites.push(pokemon.name);
    storeData("favorites", favorites)
  });
  li.appendChild(span);
  li.appendChild(addToFavorites)
  pokemonList.appendChild(li);
};

export const displayPokemonList = async () => {
  const pokemons = await fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0');
  // console.log(pokemons);
  pokemons.forEach((pokemon) => createPokemonItem(pokemon));
};
