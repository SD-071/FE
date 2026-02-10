export const fetchPokemons = async (setPokemons, setLoading, setError) => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0');
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    setPokemons(data.results);
    setLoading(false);
  } catch (err) {
    setError(err.message);
    setLoading(false);
  }
};

export const fetchPokemonByName = async (setPokemon, setLoading, setError, name) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    setPokemon(data);
    setLoading(false);
  } catch (err) {
    setError(err.message);
    setLoading(false);
  }
};