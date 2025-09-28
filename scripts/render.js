function renderSmallCard(pokemonName, pokemon) {
    let pokecard = document.getElementById('poke_collection');
    pokecard.innerHTML += getSmallCard(pokemonName, pokemon); 
    
};