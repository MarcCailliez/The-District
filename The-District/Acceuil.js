/* Vérifcation formulaire contact */

const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const prenom = document.getElementById('validationTooltip01').value.trim();
  const nom = document.getElementById('validationTooltip02').value.trim();
  const email = document.getElementById('validationTooltip03').value.trim();
  const telephone = document.getElementById('validationTooltip04').value.trim();
  const question = document.querySelector('textarea').value.trim();

  let erreur = false;

  // Vérification du prénom
  if (prenom === '') {
    document.getElementById('prenom-error').innerHTML = 'Veuillez entrer votre prénom';
    document.getElementById('prenom-error').style.color = 'red';
    erreur = true;
  } else {
    document.getElementById('prenom-error').innerHTML = '';
  }

  // Vérification du nom
  if (nom === '') {
    document.getElementById('nom-error').innerHTML = 'Veuillez entrer votre nom';
    document.getElementById('nom-error').style.color = 'red';
    erreur = true;
  } else {
    document.getElementById('nom-error').innerHTML = '';
  }

  // Vérification de l'email
  if (email === '') {
    document.getElementById('email-error').innerHTML = 'Veuillez entrer votre adresse e-mail';
    document.getElementById('email-error').style.color = 'red';
    erreur = true;
  } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    document.getElementById('email-error').innerHTML = 'Veuillez entrer une adresse e-mail valide';
    document.getElementById('email-error').style.color = 'red';
    erreur = true;
  } else {
    document.getElementById('email-error').innerHTML = '';
  }

  // Vérification du téléphone
  if (telephone === '') {
    document.getElementById('telephone-error').innerHTML = 'Veuillez entrer votre numéro de téléphone';
    document.getElementById('telephone-error').style.color = 'red';
    erreur = true;
  } else if (!telephone.match(/^[0-9]{10}$/)) {
    document.getElementById('telephone-error').innerHTML = 'Veuillez entrer un numéro de téléphone valide (10 chiffres)';
    document.getElementById('telephone-error').style.color = 'red';
    erreur = true;
  } else {
    document.getElementById('telephone-error').innerHTML = '';
  }

   // Vérification de la question
   if (question === '') {
    document.getElementById('question-error').innerHTML = 'Veuillez entrer votre question';
    document.getElementById('question-error').style.color = 'red';
    erreur = true;
  } else {
    document.getElementById('question-error').innerHTML = '';
  }

  if (!erreur) {
    // Si tout est valide, on peut envoyer le formulaire
    alert("Le formulaire a bien été envoyé !");
    form.submit();
  }
});





//


/* Vérifcation formulaire contact */
/* 
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
e.preventDefault();

const prenom = document.getElementById('validationTooltip01').value.trim();
const nom = document.getElementById('validationTooltip02').value.trim();
const email = document.getElementById('validationTooltip03').value.trim();
const telephone = document.getElementById('validationTooltip04').value.trim();
const question = document.querySelector('textarea').value.trim();

let erreur = false;

Vérification du prénom
if (prenom === '') {
alert('Veuillez entrer votre prénom');
erreur = true;
}

 Vérification du nom
if (nom === '') {
alert('Veuillez entrer votre nom');
erreur = true;
}

 Vérification de l'email
if (email === '') {
alert('Veuillez entrer votre adresse e-mail');
erreur = true;
} else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
alert('Veuillez entrer une adresse e-mail valide');
erreur = true;
}

Vérification du téléphone
if (telephone === '') {
alert('Veuillez entrer votre numéro de téléphone');
erreur = true;
} else if (!telephone.match(/^[0-9]{10}$/)) {
alert('Veuillez entrer un numéro de téléphone valide (10 chiffres)');
erreur = true;
}

Vérification de la question
if (question === '') {
alert('Veuillez entrer votre question');
erreur = true;
}

if (!erreur) {
 Si tout est valide, on peut envoyer le formulaire
alert("Le formulaire a bien été envoyé !");
form.submit();
}
});

 */