function getSmallCard(pokemonName, pokemon) {
    return ` <div id="poke_card${pokemon.id}" class="poke_card">
                <div class="position_img">
                    <img id="poke_img" src="${pokemon.sprites.front_default}"
                        class="img-fluid rounded-start poke_img" alt="img of the pokemon">
                </div>
                <div class="information_body">
                    <h5 id="poke_name" class="font">${pokemonName}</h5>
                    <div id="poke_type">
                            <p class="card-text card_line">${pokemon.types[0].type.name}<span id="poke_id">${"#" + pokemon.id}</span></p>
                            <p class="card-text">${pokemon.types[0].type.name}</p>
                    </div>
                </div>
            </div>`
};


    
    
    