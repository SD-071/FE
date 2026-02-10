import { PokemonCard, Loading, ErrorMessage } from "../components";
import { useState, useEffect } from "react";
import { fetchPokemons } from "../server/pokeApi";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchPokemons(setPokemons, setLoading, setError)

  }, []);
  console.log(pokemons)

  if(loading) return <Loading message="Loading Pokemon..." />
  if(error) return <ErrorMessage error={error} />
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
      {pokemons.map((p) => <PokemonCard key={p.name} name={p.name} url={p.url} />)}
    </div>

  );
};

export default Home;
