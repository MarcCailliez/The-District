



/* bouton + et -  */


const input = document.getElementById('tentacles-value');
const display = document.getElementById('tentacles-display');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');

minusButton.addEventListener('click', () => {
  const currentValue = parseInt(input.value);
  if (currentValue > 0) {
    input.value = currentValue - 1;
    display.value = input.value.padStart(2, '0');
  }
});

plusButton.addEventListener('click', () => {
  const currentValue = parseInt(input.value);
  if (currentValue < 100) {
    input.value = currentValue + 1;
    display.value = input.value.padStart(2, '0');
  }
});

/* Vérification du formulaire de commande */


const form = document.getElementById('DeliveryForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nomPrenom = document.getElementById('numero1').value;
  const contact = document.getElementById('numero2').value;
  const phone = document.getElementById('numero4').value;
  const adresse = document.getElementById('adresse').value;

  let errors = [];

  if (nomPrenom === '') {
    errors.push('Le champ "Nom et Prénom" est obligatoire');
    document.getElementById('NomPrenom-error').innerHTML = '<span style="color: red;">Le champ "Nom et Prénom" est obligatoire</span>';
  } else {
    document.getElementById('NomPrenom-error').innerHTML = '';
  }

  if (!validateEmail(contact)) {
    errors.push('L\'adresse e-mail est invalide');
    document.getElementById('contact-error').innerHTML = '<span style="color: red;">L\'adresse e-mail est invalide</span>';
  } else {
    document.getElementById('contact-error').innerHTML = '';
  }

  if (phone === '') {
    errors.push('Le champ "Téléphone" est obligatoire');
    document.getElementById('phone-error').innerHTML = '<span style="color: red;">Le champ "Téléphone" est obligatoire</span>';
  } else if (!validatePhone(phone)) {
    errors.push('Le numéro de téléphone doit contenir exactement 10 chiffres');
    document.getElementById('phone-error').innerHTML = '<span style="color: red;">Le numéro de téléphone doit contenir exactement 10 chiffres</span>';
  } else {
    document.getElementById('phone-error').innerHTML = '';
  }

  if (adresse === '') {
    errors.push('Le champ "Adresse" est obligatoire');
    document.getElementById('adresse-error').innerHTML = '<span style="color: red;">Le champ "Adresse" est obligatoire</span>';
  } else {
    document.getElementById('adresse-error').innerHTML = '';
  }

  if (errors.length > 0) {
    console.log(errors);
  } else {
    // Envoyer le formulaire
    alert('Le formulaire a été envoyé avec succès!');
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^\d{10}$/;
  return re.test(phone);
}




