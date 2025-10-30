console.log('coucou depuis le fichier js');

// Commentaire sur une ligne
/* Commentaires
Sur 
Plusieurs Lignes */
// Rappel raccourcis :
// [Ctrl] + [:] commentaire //
// [Alt] + [Shift] + [A] commentaire /* */
// commentaire sur Webstorm : [Ctrl] + [/] */
// [Alt] + [↑] ou [↓] : Remonte/Descends le code

// !--------------------------------------
// ! Demo defer
// !--------------------------------------

// Spoil de ce qu'on va voir un peu plus tard
// Récupérer un élément html
const BTN_BJR = document.getElementById('bjr');
// Ajouter un évènement
BTN_BJR.addEventListener('click', () => {
    console.log('Bonjour !');
})
// !--------------------------------------

// !--------------------------------------
// ! Écrire dans la console
// !--------------------------------------
// ? La console est l'endroit où vous pouvez afficher des messages pendant le dev pour vous donner des indications, vous aider etc

console.log('Coucou');
console.error('Une erreur est survenue !');
console.warn('Attention, ça va péter');
console.info('Une info random');

let tableau = ['Aurélien', 'Aude', 'Vladimir'];
console.log(tableau);
console.table(tableau);

// !--------------------------------------
// ! Intéragir avec l'utilisateur
// ! (avec un truc qu'on utilisera plus jamais ensuite)
// !--------------------------------------
alert('Bonjour les codeurs/codeuses');
let prenom = prompt('Comment vous appelez-vous ?'); //attention, vous récupérez toujours une chaine
let confirmation = confirm('Vous vous appelez bien ' + prenom + ' ?'); //Renvoie true si click sur Ok et false si click sur Annuler

