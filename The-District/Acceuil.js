
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
    alert('Veuillez entrer votre prénom');
    erreur = true;
  }

  // Vérification du nom
  if (nom === '') {
    alert('Veuillez entrer votre nom');
    erreur = true;
  }

  // Vérification de l'email
  if (email === '') {
    alert('Veuillez entrer votre adresse e-mail');
    erreur = true;
  } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    alert('Veuillez entrer une adresse e-mail valide');
    erreur = true;
  }

  // Vérification du téléphone
  if (telephone === '') {
    alert('Veuillez entrer votre numéro de téléphone');
    erreur = true;
  } else if (!telephone.match(/^[0-9]{10}$/)) {
    alert('Veuillez entrer un numéro de téléphone valide (10 chiffres)');
    erreur = true;
  }

  // Vérification de la question
  if (question === '') {
    alert('Veuillez entrer votre question');
    erreur = true;
  }

  if (!erreur) {
    // Si tout est valide, on peut envoyer le formulaire
    alert("Le formulaire a bien été envoyé !");
    form.submit();
  }
});
