// Element du DOM sous la forme d'un objet JS
const DOM = {
    YEAR_INPUT: document.getElementById('year-input'),
    BTN_VALID: document.getElementById('btn-validation'),
    RESULT: document.getElementById('result')
};

// Traitement
DOM.BTN_VALID.addEventListener('click', function () {
    const year = DOM.YEAR_INPUT.valueAsNumber;
    const result = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 'est' : 'n\'est pas';

    DOM.RESULT.textContent = `L'année ${year} ${result} bissextile !`;
    DOM.YEAR_INPUT.value = '';
});