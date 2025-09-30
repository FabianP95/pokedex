function getSmallCard(pokemonName, pokemon) {
    return ` <div onclick = "showSinglePokemon(${pokemon.id})" id="poke_card${pokemon.id}" class="poke_card">
                <span class="poke_id_pos" id="poke_id">${"#" + pokemon.id}</span>
                <img class="background_image" src="./assets/img/pokemon-1536849_1280.png" alt="pokeball">
                <div class="position_img">
                    <img id="poke_img" src="${pokemon.sprites.front_default}"
                        class="img-fluid rounded-start poke_img" alt="img of the pokemon">
                </div>
                <div class="information_body">
                    <h5 id="poke_name" class="font">${pokemonName}</h5>
                    <div id="poke_type${pokemon.id}">   
                    </div>
                </div>
            </div>`
};

function getTypeHTML(type) {
   return `  <p class="card-text card_line">${type}</p>`
};

function getDialog() {
    return ` <p class="card-text card_line" id="name"></p>`
};