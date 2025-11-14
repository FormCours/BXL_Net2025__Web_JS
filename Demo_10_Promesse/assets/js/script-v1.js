'use strict';

function demoPromesse(dividend, divisor) {

    return new Promise((resolve, reject) => {
        // Par defaut, la promesse est en status « Pending »

        //? Timeout de simulation
        setTimeout(() => {

            // Test d'erreur (division par zero)
            //  → La promesse doit passé en « Rejected »
            if(divisor === 0) {

                // ↓ Modifier le status de la promesse en rejected
                reject(new Error('Division par zéro !'));
                
            }
            // Sinon, la promesse doit passé en « Fulfilled »
            else {
                const result = Math.round(dividend / divisor);

                // ↓ Modifier le status de la promesse en fullfilled
                resolve(result);
            }
        }, 3_000);

    });
}


// demoPromesse(42, 3).then((data) => {
//     console.log(`Le resultat est ${data}`)
// }) 

// demoPromesse(42, 0).catch((error) => {
//     console.log(`Erreur lors de la division !`);
//     console.log(`Detail de l'erreur : ${error.message}`)
// }) 

// demoPromesse(42, 3).then((data) => {
//     console.log(`Le resultat est ${data}`)
// }).catch((error) => {
//     console.log(`Erreur : ${error.message}`)
// })