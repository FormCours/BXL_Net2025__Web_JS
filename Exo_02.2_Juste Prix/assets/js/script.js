//! Element du DOM
//  - Objet qui centralise les éléments du DOM
const DOM = {
    BTN_DIFFICULTY: {
        EASY: document.getElementById('btn-difficulty-easy'),
        NORMAL: document.getElementById('btn-difficulty-normal'),
        HARD: document.getElementById('btn-difficulty-hard'),
    },
    GUESS_NUMBER: document.getElementById('input-guess'),
    BTN_VALID: document.getElementById('btn-valid'),
    BTN_NEW_GAME: document.getElementById('btn-new-game'),
    MESSAGE: {
        LIFE: document.getElementById('life-status'),
        RESULT: document.getElementById('result-game')
    }
};

//  - Variable par élément du DOM
/*
const BTN_DIFFICULTY_EASY = document.getElementById('btn-difficulty-easy');
const BTN_DIFFICULTY_NORMAL = document.getElementById('btn-difficulty-normal');
const BTN_DIFFICULTY_HARD = document.getElementById('btn-difficulty-hard');
const INPUT_GUESS_NUMBER = document.getElementById('input-guess');
const BTN_VALID = document.getElementById('btn-valid');
const MESSAGE_LIFE = document.getElementById('life-status');
const MESSAGE_RESULT = document.getElementById('result-game');
*/

//! Game variables
let valueMin = 1;
let valueMax;
let valueMystery;
let nbLife;
let gameover;

//! Interaction avec le DOM
// - Via la prop "disabled"
DOM.BTN_VALID.disabled = true;
DOM.GUESS_NUMBER.disabled = true;
// - Via l'attribut HTML "disabled"
// DOM.BTN_VALID.setAttribute('disabled', '');
// DOM.BTN_VALID.removeAttribute('disabled');

//! Choix de la difficulté
DOM.BTN_DIFFICULTY.EASY.addEventListener('click', function () {
    valueMax = 10;
    nbLife = 4;
    gameInitialization();
});

DOM.BTN_DIFFICULTY.NORMAL.addEventListener('click', function () {
    valueMax = 100;
    nbLife = 10;
    gameInitialization();
});

DOM.BTN_DIFFICULTY.HARD.addEventListener('click', function () {
    valueMax = 1_000;
    nbLife = 20;
    gameInitialization();
});

//! Utilitaire
function getRandomValue(max, min = 1) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//! Démarage du jeu
function gameInitialization() {
    valueMystery = getRandomValue(valueMax + 1);
    gameover = false;

    DOM.BTN_DIFFICULTY.EASY.disabled = true;
    DOM.BTN_DIFFICULTY.NORMAL.disabled = true;
    DOM.BTN_DIFFICULTY.HARD.disabled = true;
    DOM.GUESS_NUMBER.disabled = false;
    DOM.BTN_VALID.disabled = false;

    DOM.MESSAGE.LIFE.textContent = 'Vie restant :' + ''.padEnd(nbLife*2, '🐈');
    DOM.MESSAGE.RESULT.textContent = 'Nouvelle partie !'
}

DOM.BTN_VALID.addEventListener('click', function () {
    // Anti tricheur de l'html :p
    if(gameover) { 
        return;
    }

    // Récuperation de la valeur
    const guess = parseInt(DOM.GUESS_NUMBER.value);

    // Test de garde
    if (isNaN(guess) || guess < valueMin || guess > valueMax) {
        DOM.MESSAGE.RESULT.textContent = 'Veuillez encoder une nombre valide (Boulet ♥)';
        return;
    }

    // Test de la valeur
    switch (true) {
        case guess > valueMystery:
            DOM.MESSAGE.RESULT.textContent = 'Plus petit !';
            nbLife--;
            break;
        case guess < valueMystery:
            DOM.MESSAGE.RESULT.textContent = 'Plus grand !';
            nbLife--;
            break;
        default:
            DOM.MESSAGE.RESULT.textContent = 'C\'est gagné !';
            gameover = true;
            break;
    }

    // Actualisation des vies
    if (nbLife > 0) {
        DOM.MESSAGE.LIFE.textContent = 'Vie restant :' + ''.padEnd(nbLife*2, '🐈');
    }
    else {
        DOM.MESSAGE.LIFE.textContent = `Game Over ☠️ - La valeur etait ${valueMystery}`;
        gameover = true;
    }

    // Fin de la partie
    if (gameover) {
        DOM.BTN_VALID.disabled = true;
        DOM.GUESS_NUMBER.disabled = true;
        DOM.BTN_NEW_GAME.className = "";
    }
});

//! Nouvelle partie ?
DOM.BTN_NEW_GAME.addEventListener('click', function () {
    DOM.BTN_DIFFICULTY.EASY.disabled = false;
    DOM.BTN_DIFFICULTY.NORMAL.disabled = false;
    DOM.BTN_DIFFICULTY.HARD.disabled = false;
    DOM.GUESS_NUMBER.disabled = true;
    DOM.BTN_VALID.disabled = true;

    DOM.MESSAGE.LIFE.textContent = 'NOMBRE DE VIE';
    DOM.MESSAGE.RESULT.textContent = 'RESULTAT DE LA PARTIE';
    DOM.GUESS_NUMBER.value = '';
    DOM.BTN_NEW_GAME.className = "hidden";
});