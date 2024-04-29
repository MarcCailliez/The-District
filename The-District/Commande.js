
/* Vérification du formulaire de commande */


/* 
const form = document.getElementById('DeliveryForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  
  const NomPrenom = document.getElementById('numero1').value.trim();
  
  const contact = document.getElementById('numero2').value.trim();
  const phone = document.getElementById('numero4').value.trim();
  const adresse = document.getElementById('adresse').value.trim();
 

  let erreur = false;

   Vérification du prénom

  if (NomPrenom === '') {
    document.getElementById('NomPrenom-error').innerHTML = 'Veuillez entrer votre prénom';
    document.getElementById('NomPrenom-error').style.color = 'red';
    erreur = true;
  } else {
    document.getElementById('NomPrenom-error').innerHTML = '';
  }

 

   Vérification de email

  if (contact === '') {
    document.getElementById('contact-error').innerHTML = 'Veuillez entrer votre adresse e-mail';
    document.getElementById('contact-error').style.color = 'red';
    erreur = true;
  } else if (!contact.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    document.getElementById('contact-error').innerHTML = 'Veuillez entrer une adresse e-mail valide';
    document.getElementById('contact-error').style.color = 'red';
    erreur = true;
  } else {
    document.getElementById('contact-error').innerHTML = '';
  }

   Vérification du téléphone

  if (phone === '') {
    document.getElementById('phone-error').innerHTML = 'Veuillez entrer votre numéro de téléphone';
    document.getElementById('phone-error').style.color = 'red';
    erreur = true;
  } else if (!phone.match(/^[0-9]{10}$/)) {
    document.getElementById('phone-error').innerHTML = 'Veuillez entrer un numéro de téléphone valide (10 chiffres)';
    document.getElementById('phone-error').style.color = 'red';
    erreur = true;
  } else {
    document.getElementById('phone-error').innerHTML = '';
  }

   Vérification de la adresse

   if (adresse === '') {
    document.getElementById('adresse-error').innerHTML = 'Veuillez entrer votre adresse';
    document.getElementById('adresse-error').style.color = 'red';
    erreur = true;
  } else {
    document.getElementById('adresse-error').innerHTML = '';
  }

  if (!erreur) {

    Si tout est valide, on peut envoyer le formulaire

    alert("Le formulaire a bien été envoyé !");
    form.submit();
  }
});
 */


// deliveryForm.js

const form = document.getElementById('DeliveryForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const NomPrenom = document.getElementById('numero1').value.trim();
  const contact = document.getElementById('numero2').value.trim();
  const phone = document.getElementById('numero4').value.trim();
  const adresse = document.getElementById('adresse').value.trim();

  let erreur = false;

  // Vérification du prénom
  if (NomPrenom === '') {
    document.getElementById('NomPrenom-error').innerHTML = 'Veuillez entrer votre prénom';
    document.getElementById('NomPrenom-error').style.color = 'red';
    erreur = true;
  } else {
    document.getElementById('NomPrenom-error').innerHTML = '';
  }

  // Vérification de email
  if (contact === '') {
    document.getElementById('contact-error').innerHTML = 'Veuillez entrer votre adresse e-mail';
    document.getElementById('contact-error').style.color = 'red';
    erreur = true;
  } else if (!contact.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    document.getElementById('contact-error').innerHTML = 'Veuillez entrer une adresse e-mail valide';
    document.getElementById('contact-error').style.color = 'red';
    erreur = true;
  } else {
    document.getElementById('contact-error').innerHTML = '';
  }

  // Vérification du téléphone
  if (phone === '') {
    document.getElementById('phone-error').innerHTML = 'Veuillez entrer votre numéro de téléphone';
    document.getElementById('phone-error').style.color = 'red';
    erreur = true;
  } else if (!phone.match(/^[0-9]{10}$/)) {
    document.getElementById('phone-error').innerHTML = 'Veuillez entrer un numéro de téléphone valide (10 chiffres)';
    document.getElementById('phone-error').style.color = 'red';
    erreur = true;
  } else {
    document.getElementById('phone-error').innerHTML = '';
  }

  // Vérification de la adresse
  if (adresse === '') {
    document.getElementById('adresse-error').innerHTML = 'Veuillez entrer votre adresse';
    document.getElementById('adresse-error').style.color = 'red';
    erreur = true;
  } else {
    document.getElementById('adresse-error').innerHTML = '';
  }

  if (!erreur) {
    // Si tout est valide, on peut envoyer le formulaire
    alert("Le formulaire a bien été envoyé!");
    form.submit();
  }
});