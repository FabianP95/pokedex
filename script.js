let dialog = document.getElementById('dialog');

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
    let name = document.getElementsByClassName('pokemon_name');
    for (let i = 0; i < name.length; i++) {
        let realName = name[i].innerText;
        if (realName == search.value) {
            name[i].classList.add('d_none'); //parent element bekommen
        }
    }
};

function renderMore(add) {
    let currentAmount = document.getElementsByClassName('pokemon_name');
    let newStart = currentAmount.length;
    let newEnd = newStart + add;
    useMore(newStart, newEnd);
};