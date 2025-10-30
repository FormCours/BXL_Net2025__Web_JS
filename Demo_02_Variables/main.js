// ! Déclarer une variable
// Le mot clef var n'est plus trop utilisé. Il n'existait que lui à une époque mais maintenant il existe bien mieux
// ? let sera utilisé pour toute variable qui peut être réaffectée
let total = 0;
total += 4;
console.log(total);

// ? const sera utilisé pour toute variable qui ne peut être réaffectée
const PRENOM_FORMATRICE = 'Aude'; //la constante devra d'office être initialisée en même temps que sa déclaration
// 🚨 la constante signifie qu'on ne peut pas réassigner de valeur mais si cette constante contient un objet ou un tableau, on peut modifier cet objet
// PRENOM_FORMATRICE = 'Aurélien'; Ca c'est interdit
const FORMATRICE = { 
    prenom : 'Aude',
    nom : 'Beurive',
    dateNaiss : null
}
FORMATRICE.dateNaiss = new Date('1989-10-16'); // On pourra modifier l'objet mais jamais le remplacer par autre chose
console.log(FORMATRICE);

// ! Conventions de nommages
// html/css -> kebab-case
// let -> lowerCamelCase
// const -> UPPERCASE
// Pas de caractères spéciaux sauf _ et $
// Pas de chiffres en premier caractère mais ensuite isoké
// On essaie au max d'écrire en anglais, des noms qui indiquent ce que contient la variable (on évite les lettres, les trucs, pouet, test, test42, etc)

// ! Les types de base
// ? En Js, vos variables possèdent un type mais qui est dynamique (il peut changer au cours du programme)
// Les types communs
// ? Number (pas de distinction entre int et float)
let entier = 12;
let decimal = 12.5;
// ? String
let chaine = "Aujourd'hui nous sommes Jeudi";
let chaine2 = 'Aujourd\'hui nous sommes Jeudi';
let jour = 'Jeudi';
let sansInter = 'Bonjour nous sommes ' + jour + ' et la temperature est de ' + entier + ' °C';
// Ne s'utilise qu'avec les backticks ``
let interpolation = `Bonjour nous sommes ${jour} et la temperature est de ${entier} °C`;
// Les conventions utilisées sont souvent '' mais les pluparts des dev demandent juste que vous soyez constants
// ? Boolean
let estMalade = true;
let estWeekend = false;

// console.log(jour.toUpperCase());
// jour = false;
// console.log(jour);
// console.log(jour.toUpperCase());

// Les types/valeurs spéciales
// ? undefined -> La variable est considérée comme vide
let maVariable;
console.log(maVariable);

// ? null -> La variable n'a pas de valeur mais c'est voulu
let chienGavin = 'Sky';
let chienAude = 'Taylor';
let chatGavin = null; //Signifie une absence volontaire de valeur
let chatAude = 'Soup';

// ? NaN -> Not a number (🚨 son type est Number)
let operationRatee = 'patate' - 5;
let conversionRatee = parseInt('patate');
console.log(operationRatee);
console.log(conversionRatee);
if(isNaN('patate')){
    console.log( ('b' + 'a' + + 'a' + 'a').toLowerCase());
}

// ? Infinity
let nombre1 = 12;
let nombre2 = 0;
let division = 12/0;
console.log(division);

// Les types avancés (qu'on verra + en détail plus tard)
// ? Tableau
// ? Il n'y a pas de distinction liste/tableau en JS, les tableaux sont dynamiques, leur taille change en fonction de ce qu'il y a dedans
let hobbies = ['Ricard', 'Pétanque', 'Saucisson'];
// Attention qu'en Js, on peut mettre n'importe quoi dans un tableau mais on mettra toujours les mêmes types
let bazar = ['Pouet', new Date(), 56, {}, true];
hobbies[42] = 'Brocantes';
console.log(hobbies);

for(let value of hobbies){
    console.log(value); //va afficher 39 fois undefined pour les cases vides
}


// ? Objet
console.clear();
let person = {
    // clef : valeur
    prenom : 'Aude',
    nom : 'Beurive',
    direBonjour : () => { console.log('Bonjour') },
    hobbies : [''],
    pets : [
        { type : 'cat', name : 'Soup' },
        { type : 'chien', name : 'Taylor'}
    ],
    "country abreviation" : 'BE'
}

console.log(person.prenom + ' ' + person.nom);
person.dateNaiss = new Date('1989-10-16');
console.log(person);

delete person.dateNaiss;
console.log(person);

console.log(person.direBonjour);
person.direBonjour();

// Plus
// ? BigInt
let grosEntier = 100_548_484_848n;
// let operation = grosEntier + 12;
// console.log(operation); //va planter parce qu'on ne peut utilise que des BigInt entre eux





