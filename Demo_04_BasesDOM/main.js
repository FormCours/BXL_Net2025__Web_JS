//! DOM
//? Document Object Model
document.title = 'Demo Bases Manipulations DOM';

//! Récupérer des éléments HTML
//* Via l'id
const TITLE = document.getElementById('title'); //pour récup via id
console.log(TITLE);

const TITLE2 = document.querySelector('#title'); //pour récup le premier élément qui correspond à votre query css
console.log(TITLE2);

const DEMO = document.querySelectorAll('.card img'); //pour récup tous les éléments qui correspondent à votre query css
console.log(DEMO);

// * Pour le moment, celui par id sera largement suffisant pour nous

//! Modifier des éléments HTML
//? Texte
TITLE.textContent = 'Bienvenue sur notre site 👀';
// TITLE.textContent = '<span class="txt-main">Bienvenue</span> sur notre site 👀';
// TITLE.innerText = 'Bienvenue sur notre site 👀';
// TITLE.innerHTML = '<span class="txt-main">Bienvenue</span> sur notre site 👀';

// ---------------
// Attention à l'injection de scripts et d'html en utilisant innerHTML
// TITLE.innerHTML = '<a href="https://virus.com">Bienvenue</a> sur notre site 👀';
// TITLE.innerHTML = 'Ct dégueu ton resto tocar ! <img src="https://i.pinimg.com/736x/ee/54/96/ee5496f6bcd7adfca4bd6221202861e6.jpg" alt="jvou hé">';

//! Ajouter des évènements
const BTN_VALIDER = document.getElementById('valider');
const INPUT_AGE = document.getElementById('age');
const P_ERROR = document.getElementById('error');
const IMG = document.getElementById('image');
const CARD = document.getElementById('card');

BTN_VALIDER.addEventListener('click', () => {
   
    //Reset du message d'error
    P_ERROR.textContent = '';

    //? Récupérer la valeur de l'input
    console.log(INPUT_AGE.value); //value toujours en string
    console.log(INPUT_AGE.valueAsNumber); //uniquement disponible si l'input est de type number

    let age = INPUT_AGE.valueAsNumber;

    if(isNaN(age) || age < 0 || age > 150){
        P_ERROR.textContent = 'Veuillez entrer un nombre valide';
    }
    else if(age >= 18){
        // IMG.setAttribute('src', 'https://cfa.org/wp-content/uploads/2025/01/Sphynx-Tripp-cropped-874x1024.webp');
        
        IMG.src = 'https://cfa.org/wp-content/uploads/2025/01/Sphynx-Tripp-cropped-874x1024.webp';
        IMG.alt = 'naked cat';
        TITLE.textContent = 'Petit coquinou va 😏';

        INPUT_AGE.disabled = true;

        CARD.classList.add('ok');
    }
    else { //age < 18
        IMG.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/PEGI_18.svg/838px-PEGI_18.svg.png'; 
        IMG.alt = 'Pegi 18 Logo';
        TITLE.textContent = 'Retourne à l\'école toi 🤬';

        INPUT_AGE.disabled = true;  
    
        //! Jouer avec le style
        // ? Style inline
        INPUT_AGE.style.border = '5px solid red';

        // ? Class
        CARD.classList.add('pas-ok');
        // CARD.classList.remove('card');
        // CARD.classList.toggle('ok'); //si classe présente, la retire, si classe absente, la rajoute
    }
    
    
})
// () => {} fonction fléchée ou fonction anonyme
