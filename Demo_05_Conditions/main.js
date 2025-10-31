// ! Les conditions

// ? Valeurs truthy & falsy
let variableATester;

if (variableATester) {
    // true
    // un number qui n'est pas 0
    // une chaine qui n'est pas vide
    // un tableau vide
    // un objet vide
    // Infinity
    console.log('Cette valeur est truthy');

}

if (!variableATester) {
    // false
    // 0
    // undefined
    // null
    // une chaine vide
    // NaN
    console.log('Cette valeur est falsy');
}

// ? Opérateurs de comparaison
// >= > (Supérieur ou égal & strictement supérieur)
// <= < (Inférieur ou égal & strictement inférieur)
// == != (Égal & Inégal)
// === !== (Égalité stricte & Inégalité Stricte)

console.log("0" == 0); //conversion implicite donc vrai
console.log("0" === 0); //pas de conversion donc faux

console.log([] == 0); // vrai
// console.log( [] === 0); //impossible
console.log(1 == true); //vrai
console.log(1 === true); //faux

// ! Essayez de toujours utiliser l'égalité/inégalité stricte

// ? Opérateurs logiques
// ET -> && (Les deux conditions doivent être vraies)
let estWeekend = true;
let faireBeau = true;

if (estWeekend && faireBeau) {
    console.log('Vamos a la playa 🐳');
}
else {
    console.log('No playa 🥺');
}

// OU -> || (Au moins une des deux conditions doit être vraie)
let estMalade = false;
let estVacances = true;

if (estMalade || estVacances) {
    console.log('Repos 😴');
}
else {
    console.log('Au boulot feignasse 🤬');
}

// NEGATION -> !
if (!estMalade) {
    console.log('Vous êtes en pleine forme');
}

// ? Structures logiques
// ? if
let age = 26;

if (age >= 18) {

    console.log('Majeur');

} else {
    console.log('Mineur');

}

// if ...else if ...else
// let note = parseInt(prompt('Entrez une note :'));

// if(isNaN(note) || note < 0 ||note > 20){
//     alert('Vous avez encodé n\'importe quoi 🤬');
// } else if (note === 0) {
//     alert('Gros nullos'); 
// } else if(note > 0 && note <= 5) {
//     alert('Y\'a un effort certain...');
// } else if(note > 5 && note < 10) {
//     alert('Allez t\'es presque à la moyenne');
// } else if(note === 10) {
//     alert('Tout pile dans la moyenne !');
// } else if(note > 10 && note <= 15) {
//     alert('Oh lalala c\'est de mieux en mieux');
// } else if(note > 15 && note < 20) {
//     alert('Allez presque la perfection');
// } else {
//     alert('🍾');
// }

// * Si vous faites un if else if else if else if avec une égalité... on fait plutôt un switch
let day = new Date().getDay(); //nombre de 0 à 6 (0 étant dimanche)
if (day === 0) {
    console.log('Dimanche');
} else if (day === 1) {
    console.log('Lundi');
}
///....

// ? switch (repose sur le ===)
switch (day) {
    case 0:
    case 6:
        console.log('Youpi c\'est le weekend !');
        break;
    case 1:
        console.log('Pire jour de la semaine');
        break;
    case 2:
        console.log('La machine est en route isoké');
        break;
    case 3:
        console.log('Le mercredi c\'est soirée friiiiites');
        break;
    case 4:
        console.log('Jeudredi, tout est permis');
        break;
    case 5:
        console.log('C\'est bientôt le weekend !!!');
        break;
    default:
        console.log('Une erreur est survenue');
}

// Petit twist : le switch Js peut s'utiliser avec des comparaisons en mettant un booléen dans le switch et des comparaisons dans les cases (attention, beaucoup de dev trouvent ça dégueu et ne veulent pas l'utiliser)
// let note = parseInt(prompt('Entrez votre note :'));
// switch(true){
//     // true === (note === 0)
//     case (note === 0) :
//         alert('Nullos');
//         break;
//     case (note > 0 && note < 10):
//         alert('Presque la moyenne');
//         break;
//     case (note === 10) :
//         alert('Moyen');
//         break;
//     case (note > 10 && note < 20) :
//         alert('Presque parfait');
//         break;
//     case (note === 20) :
//         alert('Parfait')
//         break;
//     default :
//         alert('Vous avez encodé n\'importe quoi 🤬');
//         break;
// }

// ? ternaire
// (condition) ? oui : non
let quantiteBananes = 1;
console.log(`Il y ${quantiteBananes} banane${ (quantiteBananes > 1) ? 's' : ''}`);

let nombre = parseInt(prompt('Entrez un nombre :'));

let resultat = (nombre % 2 === 0) ? 'pair' : 'impair';

console.log(`Le nombre ${nombre} est ${resultat}`);

// ! Pitié pas de ternaire dans une ternaire dans une ternaire dans une ternaire
let day2 = new Date().getDay();

console.log(`Aujourd'hui nous sommes ${ (day2 === 0) ? 'dimanche' : (day2 === 1) ? 'lundi' : 'ni lundi ni dimanche mais vous avez compris l\'idée'}`);

// ? coalesce
// spoil tableaux + objets
let trainers = [
    { 
        firstname : 'Aurélien',
        lastname : 'Strimelle', 
        age : 35, //TODO modifier ça demain
        salaireMensuel : 6000,
        salaireFixe : null,
        tauxHoraires : null,
        nbHeures : null,

    },
    { 
        firstname : 'Aude', 
        lastname : 'Beurive', 
        age : 36,
        salaireMensuel : null,
        salaireFixe : 1_000_000,
        tauxHoraires : null,
        nbHeures : null,
    },
    { 
        firstname : 'Mike', 
        lastname : 'Person', 
        age : null,
        salaireMensuel : null,
        salaireFixe : null,
        tauxHoraires : 2,
        nbHeures : 3000,   
    }
]

trainers.forEach((trainer) => {
    console.log(`Nom : ${trainer.lastname}\nPrénom : ${trainer.firstname}\nAge : ${trainer.age ?? 'Inconnu' }`);

    console.log(`Salaire annuel : ${ (trainer.salaireMensuel ) ? (trainer.salaireMensuel * 12) : null ?? (trainer.salaireFixe) ?? (trainer.tauxHoraires * trainer.nbHeures) }`); 
});

// Autre exemple
let trainer1 = null;
let trainer2 = null;
let trainer3 = 'Aurélien';
let trainer4 = null;
let trainer5 = 'Aude';

// Affichera la première valeur non null rencontrée
console.log(`Le·a formateur·ice du jour est ${trainer1 ?? trainer2 ?? trainer3 ?? trainer4 ?? trainer5 } `);



