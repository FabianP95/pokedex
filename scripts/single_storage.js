function showSinglePokemon(n) {
    let currentPokemon = n -1;
    let pokemonName = allPokeData[currentPokemon].name; 
    let pokemon = allPokeData[currentPokemon];
    fetchSinglePokemonData(pokemonName, pokemon, n);
    openSingleCard();
    noScroll();
};

function fetchSinglePokemonData(pokemonName, pokemon, n) {
    let type = pokemon.types[0].type.name;
    let id = pokemon.id;
    renderSinglePokemon(pokemon, pokemonName, n);
    fetchSingleColorByType(type, id);
    checkBtns(n);
};
