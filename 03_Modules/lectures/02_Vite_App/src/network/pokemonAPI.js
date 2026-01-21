const fetchPokemon = async(url) => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        return data.results;
    }catch(err){
        console.error("Network request failed: ", err)
    }
}

const fetchOnePokemon = async(url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error('Network request failed: ', err);
    }
}
export { fetchPokemon, fetchOnePokemon };
// export default fetchPokemon;