

// Validation du formulaire contactForm
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Nettoyer les messages d'erreur précédents
  document.getElementById('prenom-error').textContent = '';
  document.getElementById('nom-error').textContent= '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('telephone-error').textContent = '';
  document.getElementById('question-error').textContent = '';

  let isFormValid = true;

  // Vérifier le champ Prénom
  let prenom = document.getElementById('validationTooltip01');
  if (!prenom.value.trim()) {
    document.getElementById('prenom-error').textContent = 'Veuillez entrer votre prénom.';
    isFormValid = false;
  }

  // Vérifier le champ Nom
  let nom = document.getElementById('validationTooltip02');
  if (!nom.value.trim()) {
    document.getElementById('nom-error').textContent = 'Veuillez entrer votre nom.';
    isFormValid = false;
  }

  // Vérifier le champ E-mail
  let email = document.getElementById('validationTooltip03');
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.value)) {
    document.getElementById('email-error').textContent = 'Veuillez entrer un e-mail valide.';
    isFormValid = false;
  }

  // Vérifier le champ Téléphone
  let telephone = document.getElementById('validationTooltip04');
  const telephoneRegex = /^\d{10}$/; // Téléphone à 10 chiffres
  if (!telephoneRegex.test(telephone.value)) {
    document.getElementById('telephone-error').textContent = 'Veuillez entrer un numéro de téléphone valide (10 chiffres).';
    isFormValid = false;
  }

  // Vérifier le champ Question
  let question = document.querySelector('#contactForm textarea');
  if (!question.value.trim()) {
    document.getElementById('question-error').textContent = 'Veuillez entrer votre question.';
    isFormValid = false;
  }

  // Si le formulaire est valide, envoyer les données
  if (isFormValid) {
    // Envoyer les données du formulaire ici
    console.log('Formulaire contactForm envoyé:', {
      prenom: prenom.value,
      nom: nom.value,
      email: email.value,
      telephone: telephone.value,
      question: question.value
    });
  }
});

// Ajouter un écouteur d'événement pour vérifier les champs lors de la modification
document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(function(field) {
  field.addEventListener('input', function() {
    if (field.id === 'validationTooltip01') {
      document.getElementById('prenom-error').textContent = '';
    } else if (field.id === 'validationTooltip02') {
      document.getElementById('nom-error').textContent = '';
    } else if (field.id === 'validationTooltip03') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (emailRegex.test(field.value)) {
        document.getElementById('email-error').textContent = '';
      }
    } else if (field.id === 'validationTooltip04') {
      const telephoneRegex = /^\d{10}$/;
      if (telephoneRegex.test(field.value)) {
        document.getElementById('telephone-error').textContent = '';
      }
    } else if (field.id === 'question') {
      document.getElementById('question-error').textContent = '';
    }
  });
});


// Validation du formulaire aDeliveryForm
document.getElementById('aDeliveryForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Nettoyer les messages d'erreur précédents
  document.getElementById('jinx-error').textContent = '';
  document.getElementById('contact-error').textContent = '';
  document.getElementById('phone-error').textContent = '';
  document.getElementById('adresse-error').textContent = '';

  let isFormValid = true;

  // Vérifier le champ Nom et Prénom
  let nomPrenom = document.getElementById('numero1');
  if (!nomPrenom.value.trim()) {
    document.getElementById('jinx-error').textContent = 'Veuillez entrer votre nom et prénom.';
    isFormValid = false;
  }

  // Vérifier le champ E-mail
  let email = document.getElementById('numero2');
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.value)) {
    document.getElementById('contact-error').textContent = 'Veuillez entrer un e-mail valide.';
    isFormValid = false;
  }

  // Vérifier le champ Téléphone
  let telephone = document.getElementById('numero4');
  const telephoneRegex = /^\d{10}$/; // Téléphone à 10 chiffres
  if (!telephoneRegex.test(telephone.value)) {
    document.getElementById('phone-error').textContent = 'Veuillez entrer un numéro de téléphone valide (10 chiffres).';
    isFormValid = false;
  }

  // Vérifier le champ Adresse
  let adresse = document.getElementById('adresse');
  if (!adresse.value.trim()) {
    document.getElementById('adresse-error').textContent = 'Veuillez entrer votre adresse.';
    isFormValid = false;
  }

  // Si le formulaire est valide, envoyer les données
  if (isFormValid) {
    // Envoyer les données du formulaire ici
    console.log('Formulaire aDeliveryForm envoyé:', {
      nomPrenom: nomPrenom.value,
      email: email.value,
      telephone: telephone.value,
      adresse: adresse.value
    });
  }
});

// Ajouter un écouteur d'événement pour vérifier les champs lors de la modification
document.querySelectorAll('#aDeliveryForm input, #DeliveryForm textarea').forEach(function(field) {
  field.addEventListener('input', function() {
    if (field.id === 'numero1') {
      document.getElementById('jinx-error').textContent = '';
    } else if (field.id === 'numero2') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (emailRegex.test(field.value)) {
        document.getElementById('contact-error').textContent = '';
      }
    } else if (field.id === 'numero4') {
      const telephoneRegex = /^\d{10}$/;
      if (telephoneRegex.test(field.value)) {
        document.getElementById('phone-error').textContent = '';
      }
    } else if (field.id === 'adresse') {
      document.getElementById('adresse-error').textContent = '';
    }
  });
});
