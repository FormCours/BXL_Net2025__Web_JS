//! Element du DOM
const DOM = {
    INPUT: document.getElementById('input-multi'),
    BTN: document.getElementById('btn-multi'),
    MSG: document.getElementById('message-info'),
    RESULT: document.getElementById('table-result')
};

//! Constantes
const MULTI_MIN = 1;
const MULTI_MAX = 10;


//! Traitement
DOM.BTN.addEventListener('click', function() {

    // Effacer les valeurs précédentes
    DOM.RESULT.innerHTML = '';

    // Valeur de la table
    const table = DOM.INPUT.valueAsNumber;

    // Test de garde
    if(isNaN(table)) {
        DOM.MSG.textContent = "Valeur de table invalide";
        return;
    }

    // Génération
    DOM.MSG.textContent = '';
    for(let multi = MULTI_MIN; multi <= MULTI_MAX; multi++) {

        const result = table * multi;

        const elem = document.createElement('li');
        elem.textContent = `${multi} x ${table} = ${result}`;
        DOM.RESULT.append(elem);
    }
});