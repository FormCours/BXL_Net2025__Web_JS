//! DOM
const DOM = {
    BTN_START: document.getElementById('btn-start'),
    RESULT: document.getElementById('result'),
    SWITCH_DARK_MODE: document.getElementById('switch-dark-mode')
}

//! Constantes
NB_MAX = 100;

//! Dark Mode
DOM.SWITCH_DARK_MODE.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    DOM.SWITCH_DARK_MODE.textContent = (document.body.classList.contains('dark-mode')) ? '🌞' : '🌚';
});

//! Exercice 👈(ﾟヮﾟ👈)
DOM.BTN_START.addEventListener('click', function() {

    DOM.RESULT.innerHTML = '';

    for(let nb = 1; nb <= NB_MAX; nb++) {
        const elem = document.createElement('span');

        if(nb % 3 == 0 && nb % 5 == 0) {
            elem.textContent = "FizzBuzz";
            elem.className= "fizz buzz";
        }
        else if(nb % 3 == 0) {
            elem.textContent = "Fizz";
            elem.className= "fizz";
        }
        else if(nb % 5 == 0) {
            elem.textContent = "Buzz";
            elem.className= "buzz";
        }
        else {
            elem.textContent = nb;
        }

        DOM.RESULT.append(elem, ', ')
    }

    // Supprimer la derniere virgule
    DOM.RESULT.lastChild.remove();
});