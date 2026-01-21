const pokemonContainer = document.getElementById('pokemon-container');

// Function to fetch one pokemon by id

async function fetchPokemon(id) {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const pokemon = await res.json();
        return pokemon;
    } catch(err) {
        console.error("Error fetching the pokemon: ", err);
    }
}

// Function to create the pokemon card

function createPokemonCard (pokemon) {
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add(
      'bg-white',
      'rounded-lg',
      'shadow-md',
      'p-4',
      'flex',
      'flex-col',
      'items-center',
      'text-center'
    );

    const pokemonImage = document.createElement("img");
    pokemonImage.src = pokemon.sprites.front_default;
    pokemonImage.alt = pokemon.name;
    pokemonImage.classList.add("mb-2");

    const pokemonName = document.createElement("h2");
    pokemonName.textContent = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`;
    pokemonName.classList.add('text-xl', 'font-bold', 'mb-2');

    const pokemonInfo = document.createElement("p");
    pokemonInfo.textContent = `ID: ${pokemon.id} | ${pokemon.types.map((typeInfo) => typeInfo.type.name).join(", ")}`;
    pokemonInfo.classList.add('text-gray-600');

    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonInfo);
    
    pokemonContainer.appendChild(pokemonCard);
}

// Display the Pokemons
async function displayPokemons() {
    for(let i = 1; i <= 150; i++) {
        const pokemon = await fetchPokemon(i);
        if(pokemon) {
            createPokemonCard(pokemon);
        }
    }
}

displayPokemons()