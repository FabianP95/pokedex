const Base_Url = "https://pokeapi.co/api/v2/pokemon/";

function renderPokemon() {
    fetchPokemon();
    render();
};

async function fetchPokemon() {
    let response = await fetch(Base_Url);
    let responseJson = await response.json();
    let pokemonName = responseJson.results[0].name // name of the pokemon
    fetchPokemonData(pokemonName);
};

async function fetchPokemonData(pokemonName) {
    let response = await fetch(Base_Url + pokemonName);
    let pokemon = await response.json();

    //infos for small card
    let id = pokemon.id; // id of the pokemon
    let types = pokemon.types[0].type.name; // type of pokemon , for loop for all types
    let imgSrc = pokemon.sprites.front_default;

    // additional infos for single card page 1 is small card infos
    //page 2
    //cries button
    let cry = pokemon.cries.legacy;
    let height = pokemon.height;
    let weight = pokemon.weight;
    // and pictures of the evolution chain
    //page 3 all stats (its 6 + their names)
    let statName = pokemon.stats[0].base_stat; //for loop for all stats
    let statValue = pokemon.stats[0].stat.name;
    let color_Url = pokemon.species.url;
    let pic = document.getElementById('pokePic');
    pic.src = imgSrc;

    let cryAudio = new Audio(cry);
    //cryAudio.play();
    
    

    useColor(color_Url);
    
};

async function useColor(color_Url) {
    let color = await getColor(color_Url);
    console.log(color);
    document.getElementById('content').innerHTML = color;
};

async function getColor(color_Url) {
    let response = await fetch(color_Url);
    let pokemon = await response.json();
    return pokemon.color.name;
};


function testContent() {
    return `<div id="test">This is Test!</div>`
}

function render() {
   let content = document.getElementById('test1');
   content.innerHTML = testContent();
}