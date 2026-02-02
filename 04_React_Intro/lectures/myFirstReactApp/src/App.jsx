import Button from './components/Button';
import Counter from './components/Counter';
import Pokemons from './components/Pokemons';
import ImageComponent from './components/ImageComponent';
import { useState, useEffect } from 'react';
import { fetchPokemons, fetchPokemonById } from './server/pokeApi';
import { storeData, getData } from './storage/localStorage';

function App() {
  const [lightMode, setLightMode] = useState(true);
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(0);
  const [style, setStyle] = useState('light');
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => console.log(`The theme has been set to ${lightMode ? 'light' : 'dark'}`), [lightMode]);

  useEffect(() => {
    fetchPokemons(setPokemons);
  }, []);

  useEffect(() => {
    storeData('pokemons', pokemons);
  }, [pokemons])

  useEffect(() => {
    fetchPokemonById(counter1, setPokemon);
  }, [counter1]);

  console.log(pokemons);
  return (
    <div
      className={`flex flex-col gap-4 items-center justify-around h-screen p-4 ${
        lightMode ? 'bg-neutral-100' : 'bg-gray-900'
      } ${lightMode ? 'text-black' : 'text-white'}`}
    >
      <Button
        text={lightMode ? 'dark mode' : 'light mode'}
        event={() => setLightMode((prev) => !prev)}
        lightMode={lightMode}
      />
      <h1 className='text-xl font-bold'>Vite + React</h1>
      {pokemons && <Pokemons pokemons={pokemons} />}
      <ImageComponent />
      <Counter count={counter1} setCount={setCounter1} lightMode={lightMode} />
      <Counter count={counter2} setCount={setCounter2} lightMode={lightMode} />
      <div className={style}>
        <button onClick={() => (style === 'light' ? setStyle('dark') : setStyle('light'))}>{style}</button>
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default App;
