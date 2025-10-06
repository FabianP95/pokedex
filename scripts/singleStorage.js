async function showSinglePokemon(n) {
    let currentPokemon = n -1;
    let response = await fetch(Base_Url);
    let responseJson = await response.json();
    let pokemonName = responseJson.results[currentPokemon].name; 
    let pokeUrl = responseJson.results[currentPokemon].url;
    fetchSinglePokemonData(pokemonName, pokeUrl, n);
    openSingleCard();
};

async function fetchSinglePokemonData(pokemonName, pokeUrl, n) {
    let response = await fetch(pokeUrl);
    let pokemon = await response.json();
    let type = pokemon.types[0].type.name;
    let id = pokemon.id;
    renderSinglePokemon(pokemon, pokemonName, n);
    fetchSingleColorByType(type, id);
    checkBtns(n);
};
