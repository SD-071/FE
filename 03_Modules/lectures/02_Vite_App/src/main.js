import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { displayPokemonList } from './ui/displayPokemonList';

console.log(document.querySelector('#pokemonList'));
// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button">Click</button>
//     </div>
//     <div id="pokemonList"></div>
//   </div>
// `

const pokemonList = document.querySelector('#pokemonList');
displayPokemonList(pokemonList)


