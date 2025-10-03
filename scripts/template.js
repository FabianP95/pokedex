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

function getSingleCard() {
    return `<div class="single_card_display">
            <div>
                <section class="single_header">
                    <h2 class="font big">Pokemonname</h2>
                    <span class="font big">ID</span>
                    <button onclick="" id="close_btn" class="single_pokemon_btn"><img class="btn_svg"
                            src="./assets/icons/navigation/close.svg" alt="close"></button>
                </section>
                <button class="single_pokemon_btn" id="btn_backward" onclick=""><img class="btn_svg"
                        src="./assets/icons/navigation/back.svg" alt="backward"></button>
                <button class="single_pokemon_btn" id="btn_forward" onclick=""><img class="btn_svg"
                        src="./assets/icons/navigation/forward.svg" alt="forward"></button>
            </div>
            <section class="single_types" id="single_type">
                <p>Type1</p>
                <p>Type2</p>
            </section>
            <div class="center">
                <div class="single_pic_display">
                    <img id="single_pokemon_pic" src="./assets/img/loading_spinner.png" alt="Pokemon">
                </div>
            </div>
            <nav class="nav_line">
                <section><a href="#">About</a></section>
                <section><a href="#">Stats</a></section>
                <section><a href="#">Evolution Chain</a></section>
            </nav>
            <div class="divider"></div>
            <section>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
            </section>
        </div>`
};