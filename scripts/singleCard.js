
async function showSinglePokemon(n) {
    let currentPokemon = n -1;
    let response = await fetch(Base_Url);
    let responseJson = await response.json();
    let pokemonName = responseJson.results[currentPokemon].name; 
    let pokeUrl = responseJson.results[currentPokemon].url;
fetchSinglePokemonData(pokemonName, pokeUrl);
    openSingleCard();
};

async function fetchSinglePokemonData(pokemonName, pokeUrl) {
    let response = await fetch(pokeUrl);
    let pokemon = await response.json();
    
    
    renderSinglePokemon();
};

// Infos 1st page: name, id, cry button , types
// second page: height, weight, evolution chain pics
// third page: base stats (6x)


    //let response = await fetch(Base_Url + pokemonName);
    //let pokemon = await response.json();
    //let id = pokemon.id; 
    //let types = pokemon.types[0].type.name; 
    //let imgSrc = pokemon.sprites.front_default;
    //let cry = pokemon.cries.legacy;
    //let height = pokemon.height;
    //let weight = pokemon.weight;
    //let statName = pokemon.stats[0].base_stat; //for loop for all stats
    //let statValue = pokemon.stats[0].stat.name;
    //let color_Url = pokemon.species.url;
    //let pic = document.getElementById('pokePic');
    //pic.src = imgSrc;
    //let cryAudio = new Audio(cry);
    //cryAudio.play();