export const fetchPokemons = async(setPokemons) => {
    try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await res.json();
        // console.log(data.results);
        setPokemons(data.results);
    }catch(err){
        console.error(err)
    }
};

export const fetchPokemonById = async(id, setPokemon) => {
     try {
       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
       const data = await res.json();
       // console.log(data.results);
       setPokemon(data);
     } catch (err) {
       console.error(err);
     }
}