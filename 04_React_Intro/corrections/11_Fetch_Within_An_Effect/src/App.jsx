import { useState, useEffect } from 'react';
import { fetchStarWars } from './server/starWarsApi';
import { Loading, Error, CharacterList, Button } from './components';

function App() {
  const [people, setPeople] = useState([]);
  const [url, setUrl] = useState('https://swapi.tech/api/people');
  const [prevUrl, setPrevUrl] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetchStarWars(ignore, setLoading, setError, url, setPeople, setPrevUrl, setNextUrl);
    return () => (ignore = true);
  }, [url]);

  return (
    <main className='min-h-screen bg-gray-100 p-8 font-sans'>
      <div className='max-w-3xl mx-auto space-y-6'>
        <div className='flex justify-center gap-4 pt-6'>
          <Button url={prevUrl} setUrl={setUrl} text="Prev" />
          <Button url={nextUrl} setUrl={setUrl} text="Next" />
        </div>
        <h1 className='text-3xl font-bold text-center text-gray-800'>Star Wars Characters</h1>
        {loading && <Loading />}
        {error && <Error error={error} />}
        {!loading && !error && <CharacterList people={people} />}
      </div>
    </main>
  );
}

export default App;
