import OnePokemon from "./OnePokemon";

function Pokemons({pokemons}) {
  return (
    <div>
      <h2>Students</h2>
      <ul>
        {pokemons.slice(0,3).map((pokemon) => (
          <OnePokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
}

export default Pokemons;
