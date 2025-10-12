function getSmallCard(pokemon) {
  return ` <article onclick = "showSinglePokemon(${pokemon.id})" id="poke_card${pokemon.id}" class="poke_card">
                <p class="poke_id_pos" id="poke_id">${"#" + pokemon.id}</p>
                <div class="position_img">
                    <img id="poke_img" src="${pokemon.sprites.front_default}"
                        class="img-fluid rounded-start poke_img" alt="img of the pokemon">
                </div>
                <section class="information_body">
                    <h5 id="poke_name" class="font pokemon_name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
                    <section id="poke_type${pokemon.id}">   
                    </section>
                </section>
                <span></span>
            </article>`
};

function getTypeHTML(type) {
  return `  <p class="card-text card_line">${type}</p>`
};

function getSingleCard(pokemon, pokemonName, n) {
  return `<article class="single_card_display">
              <section class="single_header">
                  <h2 class="font big gap">${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h2>
                  <span class="font big">${"#" + pokemon.id}</span>
                  <button onclick=" closeSingleCard()" id="close_btn" class="single_pokemon_btn"><img class="btn_svg"
                          src="./assets/icons/navigation/close.svg" alt="close"></button>
              </section>
              <button class="single_pokemon_btn" id="btn_backward" onclick="previousPokemon(${n})"><img class="btn_svg"
                      src="./assets/icons/navigation/back.svg" alt="backward"></button>
              <button class="single_pokemon_btn" id="btn_forward" onclick="nextPokemon(${n})"><img class="btn_svg"
                      src="./assets/icons/navigation/forward.svg" alt="forward"></button>
              <section class="single_types" id="single_type">
              </section>
              <div class="single_pic_display" id="single_img${pokemon.id}">
                  <img id="single_pokemon_pic" src="${pokemon.sprites.front_default}">
              </div>
              <nav class="nav_line">
                <section onclick="showAbout()"><a href="#">About</a></section>
                <section onclick="showStats()"><a href="#">Stats</a></section>
              </nav>
              <div class="divider"></div>
              <section id="about" class="about_display">          
              </section>
              <section id="stats" class="d_none stat_display">
              </section>
           </article>`
};

function getSingleTypeHTML(type) {
  return `  <p id="${type}" class="display_type">${type}</p>`
};


function getAbout(weight, height, cry) {
  return `
            <p>weight: ${weight / 10}kg</p>
            <p>height: ${height / 10}m</p>
            <button onclick="playCry('${cry}')">Make Noise</button>
          `
};

function getStats(statValue, statName) {
  return `<div class="single_stat">
            <p class="stat">${statName}: ${statValue}</p>
            <div id="${statName}" class="num_display" role="progressbar" aria-label="Basic example" aria-valuenow="${statValue}" aria-valuemin="0"
               aria-valuemax="100">
            </div>
         </div>`
};

function getSpinner() {
    return ` <div id="spinner" class="spinner">
                <img class="spinner_img" src="./assets/img/loading_spinner.png" alt="bulbasaurus">
              </div>`
}