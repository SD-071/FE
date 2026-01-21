import { fetchOnePokemon } from './network/pokemonAPI.js';
import { fetchUsers } from './network/jsonPlaceholderUsers.js';
// import fetchPokemon from "./network/pokemonAPI.js";
import { displayPokemonList } from './ui/displayPokemonList.js';

window.addEventListener('load', async () => {
  // const pokemon = await fetchOnePokemon('https://pokeapi.co/api/v2/pokemon/1/');
  // console.log(pokemon)
  // const users = await fetchUsers('https://jsonplaceholder.typicode.com/users');
  // console.log(users)
  displayPokemonList();
  // setTimeout()
  // localStorage.setItem("user", JSON.stringify({name:"lulu", newsletter: true}))

  const user = JSON.parse(localStorage.getItem('user'));

  const newsletterTimeout = setTimeout(() => {
    alert('Subscribe to our newsletter!');
    console.log('subscribe to our newsletter');
  }, 3000);

  if (user.newsletter) {
    clearTimeout(newsletterTimeout);
  }

  // setInterval()
  let counter = 1;
  const counterInterval = setInterval(async () => {
    const user = await fetchUsers(`https://jsonplaceholder.typicode.com/users/${counter}`);
    // console.log(user);
    counter++;
    if (counter === 5) clearInterval(counterInterval);
  }, 2000);
});
