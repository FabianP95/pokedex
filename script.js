let singleCard = document.getElementById('single_card');

function openSingleCard() {
    singleCard.show();
};

window.onclick = function (event) {
    if (event.target == singleCard) {
        singleCard.close();
    }
};
