'use strict'

//! Méthode boite à outils pour "attendre"
function delay(time) {
    // Test de garde
    if (time <= 0) {
        return Promise.reject(new Error('Le temps doit être positif !'))
    }

    // L'attente :o
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

//! Méthodes de la simulation
async function allumerLaMachineCafe() {
    console.log('Machine à café : Allumage');
    await delay(1_500);
    console.log('Machine à café : Démarré');
}

async function faireLeCafe() {
    console.log("Café : en préparation");
    await delay(5_000);
    console.log("Café: prêt!")

    return "Café chaud!"
}

async function servirCafe(cafe) {
    console.log("Servir Café: Debut");
    await delay(500);
    console.log(`Servir Café: ${cafe} servi`);
}

async function couperLegumes(...legumes) {
    console.log('Couper les légumes : début');
    await delay(1000);
    for (const legume of legumes) {
        console.log(`Coupe des ${legume} en cours 🔪🔪🔪`);
        await delay(2000);
    }
    console.log('Couper les légumes : fin');
    return "La salade 🥗";
}

async function servirSalade(salade) {
    console.log('Servir Salade : Debut');
    await delay(2000);
    console.log(`Servir Salade : ${salade} est servie`);
}

async function chauffeLaPoele() {
    console.log('Chauffé la poele: debut');
    await delay(3000);
    console.log('Chauffé la poele; fun');
}

async function cuirViande() {
    console.log('Cuir viande: début');
    await delay(2000)
    if (Math.random() > 0.8) {
        throw new Error('Viande cramée');
    }
    await delay(3000)
    console.log('Cuir viande: fin');
    return "Viande";
}

async function servirViande(viande) {
    console.log("Servir viande : début");
    await delay(1000);
    console.log(`Servir viande : ${viande} servi`);
}

//! Demo 01 : Utilisation des méthodes
// - Chaque fonction s'attend
async function demo01() {
    console.warn('Debut de la péparation');
    await allumerLaMachineCafe()
    const cafe = await faireLeCafe()
    await servirCafe(cafe)
    const salade = await couperLegumes('Tomate', 'Onion', 'Pomme')
    await servirSalade(salade)
    await chauffeLaPoele()
    const viande = await cuirViande()
    await servirViande(viande)
    console.warn('Fin de la péparation');
}

//! Demo 01 : Par ensemble des fonctions
// - Création d'ensemble
async function preparationDuCafe() {
    await allumerLaMachineCafe()
    const cafe = await faireLeCafe()
    await servirCafe(cafe)
}

async function preparationDeLaViande() {
    await chauffeLaPoele();
    const viande = await cuirViande();
    await servirViande(viande);
}

// - On attend les ensembles de function
async function demo02() {
    console.warn('Debut de la péparation');

    const promise1 = preparationDuCafe();
    const promise2 = couperLegumes('Tomate', 'Onion', 'Pomme')
                        .then((salade) => servirSalade(salade));
    const promise3 = preparationDeLaViande();

    await Promise.allSettled([ promise1, promise2, promise3]);

    console.warn('Fin de la péparation');
}