function renderSmallCard(pokemonName, pokemon) {
    let pokecard = document.getElementById('poke_collection');
    pokecard.innerHTML += getSmallCard(pokemonName, pokemon); 
    let typeDisplay = document.getElementById('poke_type'+ pokemon.id);
    for (let i = 0; i < pokemon.types.length; i++) {
        let type = pokemon.types[i].type.name;
        typeDisplay.innerHTML += getTypeHTML(type);
    }
};

function renderSinglePokemon() {
    let singleCard = document.getElementById('single_card');
    singleCard.innerHTML = getSingleCard();
};

