// ! Déclarer une variable
// Le mot clef var n'est plus trop utilisé. Il n'existait que lui à une époque mais maintenant il existe bien mieux
// ? let sera utilisé pour toute variable qui peut être réaffectée
let total = 0;
total += 4;
console.log(total);

// ? const sera utilisé pour toute variable qui ne peut être réaffectée
const PRENOM_FORMATRICE = 'Aude'; //la constante devra d'office être initialisée en même temps que sa déclaration
// 🚨 la constante signigie qu'on ne peut pas réassigner de valeur mais si cette constante contient un objet ou un tableau, on peut modifier cet objet
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





