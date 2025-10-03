let dialog = document.getElementById('dialog');

function openSingleCard() {
    dialog.show();
};

window.onclick = function (event) {
    if (event.target == dialog) {
        dialog.close();
    }
};
