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
    if (searchData.includes(searchName)) {
        for (let i = 0; i < collection.length; i++) {
            collection[i].classList.add('d_none');
            collection[searchData.indexOf(searchName)].classList.remove('d_none');
        }
    }
};

function displayPokemon() {
    let search = document.getElementById('search');
    console.log(search.value.length);
    let collection = document.getElementsByClassName('poke_card');
    if (search.value.length == 0) {
        for (let i = 0; i < collection.length; i++) {
            collection[i].classList.remove('d_none');
        }
    }
};

function renderMore(add) {
    let currentAmount = document.getElementsByClassName('pokemon_name');
    let newStart = currentAmount.length;
    let newEnd = newStart + add;
    useMore(newStart, newEnd);
};

function startSpinner() {
    mainContainer.innerHTML = getSpinner();
};
