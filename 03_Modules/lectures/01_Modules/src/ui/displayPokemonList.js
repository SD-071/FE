import { fetchPokemon } from '../network/pokemonAPI.js';
import { storeData, getData, updateArray } from '../storage/localStorage.js';

const pokemonList = document.getElementById('pokemonList');

const createPokemonItem = (pokemon) => {
  const pokemonContainer = document.createElement('div');
  pokemonContainer.className = 'flex flex-col gap-1 bg-white rounded shadow-md w-30';

  const imageContainer = document.createElement('div');
  imageContainer.className = 'bg-yellow-100 flex justify-center items-center rounded-t w-full h-20 ';

  const pokemonId = pokemon.url.split('/')[pokemon.url.split('/').length - 2];
  
  const image = document.createElement('img');
  image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  image.alt = pokemon.name;
  image.className = 'w-full self-center h-full object-contain';

  const textContainer = document.createElement('div');
  textContainer.className = 'flex gap-2 justify-between items-center p-2';

  const span = document.createElement('span');
  span.textContent = pokemon.name;
  span.className = 'text-gray-700 font-bold capitalize text-[10px]';

  const favoritesBtn = document.createElement('button');
  favoritesBtn.className =
    'text-white text-[8px] bg-gray-600 box-border border border-transparent rounded-md shadow-md hover:bg-gray-700 focus:ring-4 px-2 py-1 font-bold';

  const favorites = getData('favorites') || [];
  favoritesBtn.textContent = 'like';

  if (favorites.includes(pokemon.name)) {
    favoritesBtn.classList.remove('bg-gray-800', 'hover:bg-gray-700');
    favoritesBtn.classList.add('bg-pink-800', 'hover:bg-pink-700');
  }

  favoritesBtn.addEventListener('click', () => {
    const favorites = getData('favorites') || [];

    if (favorites.includes(pokemon.name)) {
      updateArray('favorites', pokemon.name, favorites);
      favoritesBtn.classList.remove('bg-pink-800', 'hover:bg-pink-700');
      favoritesBtn.classList.add('bg-gray-600', 'hover:bg-gray-700');
      return;
    }

    favorites.push(pokemon.name);
    storeData('favorites', favorites);
    favoritesBtn.classList.remove('bg-gray-600', 'hover:bg-gray-700');
    favoritesBtn.classList.add('bg-pink-800', 'hover:bg-pink-700');
  });
  imageContainer.appendChild(image);
  textContainer.appendChild(span);
  textContainer.appendChild(favoritesBtn);
  pokemonContainer.appendChild(imageContainer);
  pokemonContainer.appendChild(textContainer);
  pokemonList.appendChild(pokemonContainer);
};

export const displayPokemonList = async () => {
  const pokemons = await fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0');
  // console.log(pokemons);
  pokemons.forEach((pokemon) => createPokemonItem(pokemon));
};
