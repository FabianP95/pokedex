function closeSingleCard() {
    dialog.close();
    scroll();
};

function nextPokemon(n) {
    n++;
    showSinglePokemon(n)
};

function previousPokemon(n) {
    n--;
    showSinglePokemon(n)
};

function checkBtns(n) {
    hideBackBtn(n);
    hideForwardBtn(n);
};

function hideBackBtn(n) {
    let btnBack = document.getElementById('btn_backward');
    switch (true) {
        case n === 1:
            btnBack.classList.add('d_none');
            break;
        default:
            btnBack.classList.remove('d_none');
            break;
    }
};

function hideForwardBtn(n) {
    let btnForward = document.getElementById('btn_forward');
    switch (true) {
        case n === 9:
            btnForward.classList.add('d_none');
            break;
        default:
            btnForward.classList.remove('d_none');
            break;
    }
};

function playCry(cry) {
    let cryAudio = new Audio(cry);
    cryAudio.play();
};

function showAbout() {
    let about = document.getElementById('about');
    let stats = document.getElementById('stats');
    stats.classList.add('d_none');
    about.classList.remove('d_none');
};

function showStats() {
    let about = document.getElementById('about');
    let stats = document.getElementById('stats');
    stats.classList.remove('d_none');
    about.classList.add('d_none');
};

function noScroll() {
    let dialog = document.getElementById('dialog');
    let body = document.getElementById('body');
    if (dialog.open) {
        body.style.overflow = 'hidden';
    }
};

function scroll() {
    let body = document.getElementById('body');
    body.style.overflow = 'auto';
}


