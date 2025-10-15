let dialog = document.getElementById('dialog');
let mainContainer = document.getElementById('poke_collection');
let renderBtn = document.getElementById('render_btn');

function openSingleCard() {
    dialog.show();
};

window.onclick = function (event) {
    if (event.target == dialog) {
        dialog.close();
        scroll();
    }
};

function searchPokemon() {
    let search = document.getElementById('search');
    let searchName = search.value.toLowerCase();
    let collection = document.getElementsByClassName('poke_card');
    if (search.value.length >= 0) {
        disableBtn();
        for (let i = 0; i < searchData.length; i++) {
            let match = searchData[i].startsWith(searchName);
            collection[i].classList.add('d_none');
            if (match) {
                let position = searchData.indexOf(searchData[i]);
                collection[position].classList.remove('d_none');
            }
        }
    }
};

function displayPokemon() {
    let search = document.getElementById('search');
    search.value = "";
    enableBtn();
    let collection = document.getElementsByClassName('poke_card');
    for (let i = 0; i < collection.length; i++) {
        collection[i].classList.remove('d_none');
    }

};

function renderMore(add) {
    disableBtn();
    let currentAmount = document.getElementsByClassName('pokemon_name');
    let newEnd = currentAmount.length + add;
    allPokeData = [];
    loadAll(0, newEnd);
};

function startSpinner() {
    mainContainer.innerHTML = getSpinner();
};

function enableBtn() {
    renderBtn.disabled = false;
    renderBtn.classList.add('class_hover');
};

function disableBtn() {
    renderBtn.disabled = true;
    renderBtn.classList.remove('class_hover');
};

function log() {
    console.log(1);
};


