// create the counter variable
let counter = 1;

// creating the interval
const intervalId = setInterval(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${counter}/`)
    .then((res) => res.json())
    .then((data) => {
        const pokemon = {
            id: data.id,
            name: data.name
        }

        console.log(pokemon)
    })
    .catch(error => console.log(error))

    counter++
    if(counter > 150) {
        clearInterval(intervalId);
    }
}, 1000)