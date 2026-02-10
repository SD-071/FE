import {
  Loading,
  ErrorMessage,
  PokemonGeneral,
  Accordion,
  PokemonAbilities,
  PokemonStats,
  PokemonCries,
  PokemonSprites,
} from '../components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemonByName } from '../server/pokeApi';

const Details = () => {
  const { name } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchPokemonByName(setPokemon, setLoading, setError, name);
  }, [name]);
  if (loading) return <Loading message='Loading Pokemon' />;
  if (error) return <ErrorMessage error={error} />;
  return (
    <>
      <PokemonGeneral name={pokemon.name} id={pokemon.id} />
      <Accordion title='Abilities' defaultChecked={true}>
        <PokemonAbilities abilities={pokemon.abilities} />
      </Accordion>
      <Accordion title='Stats'>
        <PokemonStats stats={pokemon.stats} />
      </Accordion>
      <Accordion title='Cries'>
        <PokemonCries cries={pokemon.cries} />
      </Accordion>
      <Accordion title='Sprites'>
        <PokemonSprites sprites={pokemon.sprites} />
      </Accordion>
    </>
  );
};

export default Details;
