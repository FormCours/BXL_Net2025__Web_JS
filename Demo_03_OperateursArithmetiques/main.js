// ! Opérateurs
// + (addition ou concaténation)
let addition = 5 + 7;
console.log(addition);

let concatenation = 5 + '7';
console.log(concatenation);

// - (soustraction)
let soustraction = 7 - 5;
console.log(soustraction);

let soustraction2 = 7 - '5';
console.log(soustraction2); //conversion implicite

// * (multiplication)
let multi = 7 * 5;
console.log(multi);

// / (division)
let division = 7 / 2;
console.log(division);

let divisionEntiereInf = Math.floor(7/2); //3
let divisionEntiereSup = Math.ceil(7/2); //4
let divisionEntierProche = Math.round(7/2); //4
console.log(divisionEntiereInf);
console.log(divisionEntiereSup);
console.log(divisionEntierProche);

// % (modulo) (reste de la division entière)
let modulo = 7 % 2;
console.log(modulo);

// ** (exposant)
let exposant = Math.pow(2, 3);
console.log(exposant);
let exposantNew = 2 ** 3;
console.log(exposantNew);

// ! Tous dispo avec l'opérateur d'affection raccourcis
let x = 5;
x += 5;
console.log(x); //10
x -= 5;
console.log(x); //5
x *= 2;
console.log(x); //10
x /= 2;
console.log(x); //5
x **= 2;
console.log(x); //25
x %= 5;
console.log(x); //0

// ! Opérateur d'incrémentation/décrémentation
let y = 5;
console.log(y++); //5
console.log(y); //6

console.log(++y); //7
console.log(y); //7

















