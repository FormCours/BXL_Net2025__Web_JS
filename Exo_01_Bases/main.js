const TVA = 0.25;

// ? 1) Demander les infos à l'utilisateur
// Nombre de livres
let quantity = parseInt(prompt('Combien de livres désirez-vous ?'));
console.log(quantity);

// Prix unitaire d'un livre 
let bookPrice = parseFloat(prompt('Quel est le prix unitaire du livre ?').trim().replace(',', '.'));
console.log(bookPrice);

// ? 2) Calculs 
let priceWithoutTVA = quantity * bookPrice;
// let priceWithTVA = priceWithoutTVA + (priceWithoutTVA * TVA);
let priceWithTVA = priceWithoutTVA * (1+TVA);

// ? 3) Affichage du résultat final
alert(`Le prix total de vos ${quantity} livres à ${bookPrice} €/u est de ${priceWithTVA.toFixed(2)} € avec une TVA de ${TVA}%`);