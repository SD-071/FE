export const fetchStarWars = async (ignore, setLoading, setError, url, setPeople, setPrevUrl, setNextUrl) => {
  setLoading(true);
  setError(null);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch data');
    const data = await res.json();
    if (!ignore) {
      setPeople(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
    }
  } catch (err) {
    if (!ignore) {
      console.error(err);
      setError('Could not load Star Wars Characters.');
    }
  } finally {
    if (!ignore) setLoading(false);
  }
};
