//! Les éléments du DOM
const mastermindForm = document.forms['mastermind-form'];
const mastermindStatus = document.getElementById('mastermind-status');
const mastermindHistory = document.getElementById('mastermind-history');

//! Variable global
let mastermind = generateMastermind();
let countTry = 0;
const maxTry = 12;
let gameover = false

//! Traitement de l'event "submit"
mastermindForm.addEventListener('submit', (event) => {

    // Annulation du comportement "refresh"
    event.preventDefault();

    // Test de garde - Est ce que la partie est terminée
    if (gameover) {
        return;
    }

    // Récuperation des valeurs (sous la forme d'une Array)
    //? Objectif → Obtenir ['1', '6', '2', '3']
    const inputs = mastermindForm.querySelectorAll('input');

    const userTry = [];
    for (const userInput of inputs) {
        userTry.push(userInput.value)
    };
    console.log(userTry);

    //? Ecriture alternative avec la méthode "map"
    /*
    const userTry2 = [...inputs].map(userInput => userInput.value);
    console.log(userTry2);
    */

    // Incremente le nombre d'essai
    countTry++;

    // Afficher la tentative dans l'historique
    showTryInHistory(userTry);

    // Test de fin de jeu
    if (checkVictory(userTry)) {
        showStatusMessage(`Bravo, tu n'as pas échoué en ${countTry} essai :o`);
        gameover = true;
    }
    else if (countTry >= maxTry) {
        showStatusMessage(`Tu as échoué ! C'était ${mastermind.join(', ')}`);
        gameover = true;
    }
});

//! Génération des valeurs du mastermind
function generateMastermind() {
    // TODO Rendre ca aleatoire quand le reste fonctionne :p
    return ['1', '1', '2', '3'];
}

//! Affichage
function showTryInHistory(userTry) {

    const wellPlaced = getWellPlaced(userTry);
    const missPlaced = getMissPlaced(userTry);

    const historyLine = document.createElement('p');
    historyLine.append(`Essai ${countTry} :  (${userTry.join(', ')}) • ${wellPlaced} bien placé et ${missPlaced} mal placé`)

    mastermindHistory.append(historyLine);
}

function showStatusMessage(message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    mastermindStatus.append(messageElement);
}

//! Autres...
function checkVictory(userTry) {
    let win = true;

    for (let i = 0; win && i < userTry.length; i++) {

        if (userTry[i] !== mastermind[i]) {
            win = false;
        }
    }

    return win;
}

function getWellPlaced(userTry) {

    let countWellPlaced = 0;

    userTry.forEach((value, index) => {

        if (value === mastermind[index]) {
            countWellPlaced++;
        }
    })

    return countWellPlaced;
}

function getMissPlaced(userTry) {

    let missPlaced = 0;
    let userTrySacrified = [...userTry]

    for (let i = 0; i < mastermind.length; i++) {

        if (mastermind[i] !== userTry[i]) {
            let found = false;

            for (let k = 0; (k < userTry.length && !found); k++) {

                if (mastermind[i] === userTrySacrified[k] && mastermind[k] != userTrySacrified[k]) {
                    missPlaced++;
                    userTrySacrified[k] = undefined;
                    found = true;
                }
            }
        }
    }

    return missPlaced;
}