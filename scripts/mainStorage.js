const Base_Url = "https://pokeapi.co/api/v2/pokemon?limit=1302&offset=0";

const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
    stellar: '#054e11ff',
    unkown: '#476866ff'
};

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
    let type = pokemon.types[0].type.name;
    let id = pokemon.id;
    renderSmallCard(pokemonName, pokemon);
    fetchColorByType(type, id);  
};



