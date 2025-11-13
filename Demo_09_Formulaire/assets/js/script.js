const exempleForm = document.forms['exemple-form'];

// Annulation du comportement par defaut  du submit
exempleForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Submit par defaut annulé !');
});

// Traiter les données - Acces au DOM
exempleForm.addEventListener('submit', (event) => {

    const data = {
        email: exempleForm.elements['email'].value,
        pseudo: exempleForm.elements['pseudo'].value,
        nbGuest: exempleForm.elements['nbGuest'].valueAsNumber,
        birthdate: exempleForm.elements['birthdate'].valueAsDate,
        spam: exempleForm.elements['spam'].checked,
    }

    // → Exemple de traitement : Envoyer vers une WebAPI via une requete AJAX 🫧  

    console.log('Donnée du formulaire 1:', data);
});

// Traiter les données - FormData
exempleForm.addEventListener('submit', (event) => {

    const formData = new FormData(exempleForm);
    const data = Object.fromEntries(formData.entries());

    // → Exemple de traitement : Envoyer vers un serveur via une requete AJAX ⚔️

    console.log('Donnée du formulaire 2', formData, data);
});

// Exemple de validation custom (contrainte via le navigateur)
const birthdateElement = exempleForm.elements['birthdate'];
birthdateElement.addEventListener('change', (event) => {

    const birthdate = birthdateElement.valueAsDate;

    const limitDate = new Date();
    limitDate.setFullYear(limitDate.getFullYear() - 13);
    
    if(birthdate > limitDate) {
        birthdateElement.setCustomValidity('Rentre chez toi !');
    }
    else {
        birthdateElement.setCustomValidity('');
    }
});