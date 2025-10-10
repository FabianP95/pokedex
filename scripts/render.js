function renderSmallCard(pokemonName, pokemon) {
    let pokecard = document.getElementById('poke_collection');
    pokecard.innerHTML += getSmallCard(pokemonName, pokemon);
    let typeDisplay = document.getElementById('poke_type' + pokemon.id);
    for (let i = 0; i < pokemon.types.length; i++) {
        let type = pokemon.types[i].type.name;
        typeDisplay.innerHTML += getTypeHTML(type);
    }
};

function renderSinglePokemon(pokemon, pokemonName, n) {
    let singleCard = document.getElementById('single_card');
    singleCard.innerHTML = getSingleCard(pokemon, pokemonName, n);
    let typeDisplay = document.getElementById('single_type');
    for (let i = 0; i < pokemon.types.length; i++) {
        let type = pokemon.types[i].type.name;
        typeDisplay.innerHTML += getSingleTypeHTML(type);
        fetchBackgroundColor(type);
    }
    renderAllAdditionalInfo(pokemon);
};

function fetchBackgroundColor(type) {
    let card = document.getElementById(type);
    let color = colours[type];
    card.style.backgroundColor = color;
};

function fetchSingleColorByType(type, id) {
    let imgBackground = document.getElementById('single_img'+id);
    let color = colours[type];
    imgBackground.style.backgroundColor = color;
};


function fetchColorByType(type, id) {
    let card = document.getElementById('poke_card' + id);
    let color = colours[type];
    card.style.backgroundColor = color;
};

function renderAllAdditionalInfo(pokemon) {
    renderAbout(pokemon);
    renderStats(pokemon);
};

function renderAbout(pokemon) {
    let weight = pokemon.weight;
    let height = pokemon.height;
    let cry = pokemon.cries.legacy;
    let content = document.getElementById('about');
    content.innerHTML += getAbout(weight, height, cry);
};

function renderStats(pokemon) {
    let content = document.getElementById('stats');
    let type = pokemon.types[0].type.name;
    for (let i = 0; i < pokemon.stats.length; i++) {
        let statName = pokemon.stats[i].stat.name;
        let statValue = pokemon.stats[i].base_stat;
        content.innerHTML += getStats(statValue, statName);
        displayStatBar(statValue, statName, type);
    }
};

function displayStatBar(statValue, statName, type) {
    let bar =  document.getElementById(statName);
    let color = colours[type];
    bar.style.width = `${statValue}%`;
    bar.style.backgroundColor = color;
};



