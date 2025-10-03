const Base_Url = "https://pokeapi.co/api/v2/pokemon?limit=1302&offset=0";

async function fetchPokemon(n) {
    let response = await fetch(Base_Url);
    let responseJson = await response.json();
    for (let i = 0; i < n; i++) {
        let pokemonName = responseJson.results[i].name; 
        let pokeUrl = responseJson.results[i].url; 
        fetchPokemonData(pokemonName, pokeUrl);
    };
};

async function fetchPokemonData(pokemonName, pokeUrl) {
    let response = await fetch(pokeUrl);
    let pokemon = await response.json();
    let color_Url = pokemon.species.url;
    let id = pokemon.id;
    renderSmallCard(pokemonName, pokemon);
    getColor(color_Url, id); 
};

async function getColor(color_Url, id) {
    let response = await fetch(color_Url);
    let pokemon = await response.json();
    let color = pokemon.color.name;
    let card =  document.getElementById('poke_card' + id)
    card.style.backgroundColor = color;
};


