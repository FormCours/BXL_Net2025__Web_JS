/**
 * Méthode d'addition entre deux nombre
 * @param {number} nb1 Le 1er nombre
 * @param {number} nb2 Le 2e nombre
 * @returns {number} Le resultat arrondi
 */
function addition(nb1, nb2) {
    let resultat = nb1 + nb2;
    return Math.round(resultat);
}

/**********************************/

function additionInfini(...nbs) {

    if (nbs.length < 2) {
        throw new Error('☠️');
    }

    let somme = 0;
    for (const nb of nbs) {
        somme += nb;
    }

    return Math.round(somme);
}

/**********************************/

function filter(tab, myCallback) {

    // Test de garde
    if (typeof (myCallback) !== 'function') {
        throw new Error('Le callback doit être une fonction ! Boulet !')
    }

    // Traitement
    const tabResult = [];

    for (const val of tab) {

        if (myCallback(val)) {
            tabResult.push(val);
        }
    }

    return tabResult;
}

const myNumber = [8, 5, 2, 3, 4, 5, 6, 1]
const res1 = filter(myNumber, function (nb) { return nb % 2 === 0 });
const res2 = filter(myNumber, (nb) => nb % 3 === 0);

const myNames = ['Riri', 'Fifi', 'Della', 'Zaza', 'Donald'];
const res3 = filter(myNames, (str) => str.includes('i'));


function testNameLenght(name) {
    return name.length > 4;
}
const res4 = filter(myNames, testNameLenght);
console.log(res4);
