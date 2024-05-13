// Fonction pour valider le formulaire de contact
function validateContactForm() {
    // Récupération des éléments du formulaire
    const prenom = document.getElementById("validationTooltip01");
    const nom = document.getElementById("validationTooltip02");
    const email = document.getElementById("validationTooltip03");
    const telephone = document.getElementById("validationTooltip04");
    const question = document.querySelector('textarea');
  
    // Réinitialisation des messages d'erreur
    document.getElementById("prenom-error").textContent = "";
    document.getElementById("nom-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("telephone-error").textContent = "";
    document.getElementById("question-error").textContent = "";
  
    // Initialisation des variables d'erreur
    let prenomError = false;
    let nomError = false;
    let emailError = false;
    let telephoneError = false;
    let questionError = false;
  
    // Validation du prénom
    if (prenom.value.length < 1) {
      prenomError = true;
      document.getElementById("prenom-error").textContent = "Veuillez entrer votre prénom.";
    }
  
    // Validation du nom
    if (nom.value.length < 1) {
      nomError = true;
      document.getElementById("nom-error").textContent = "Veuillez entrer votre nom.";
    }
  
    // Validation de l'email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email.value)) {
      emailError = true;
      document.getElementById("email-error").textContent = "Veuillez entrer une adresse email valide.";
    }
  
    // Validation du téléphone
    const telephoneRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/;
    if (!telephoneRegex.test(telephone.value)) {
      telephoneError = true;
      document.getElementById("telephone-error").textContent = "Veuillez entrer un numéro de téléphone valide.";
    }
  
    // Validation de la question
    if (question.value.length < 1) {
      questionError = true;
      document.getElementById("question-error").textContent = "Veuillez entrer votre question.";
    }
  
    // Si aucune erreur, soumettre le formulaire
    if (!prenomError && !nomError && !emailError && !telephoneError && !questionError) {
      document.getElementById("contactForm").submit();
    }
  }
  
  // Fonction pour valider le formulaire de livraison
  function validateDeliveryForm() {
    // Récupération des éléments du formulaire
    const jinx = document.getElementById("numero1");
    const contact = document.getElementById("numero2");
    const phone = document.getElementById("numero4");
    const adresse = document.getElementById("adresse");
  
    // Réinitialisation des messages d'erreur
    document.getElementById("jinx-error").textContent = "";
    document.getElementById("contact-error").textContent = "";
    document.getElementById("phone-error").textContent = "";
    document.getElementById("adresse-error").textContent = "";
  
    // Initialisation des variables d'erreur
    let jinxError = false;
    let contactError = false;
    let phoneError = false;
    let adresseError = false;
  
    // Validation du champ "Nom et Prénom"
    if (jinx.value.length < 1) {
      jinxError = true;
      document.getElementById("jinx-error").textContent = "Veuillez entrer votre nom et prénom.";
    }
  
    // Validation de l'email
    if (contact.value.length < 1) {
      contactError = true;
      document.getElementById("contact-error").textContent = "Veuillez entrer votre email.";
    }
  
    // Validation du téléphone
    const phoneRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/;
    if (!phoneRegex.test(phone.value)) {
      phoneError = true;
      document.getElementById("phone-error").textContent = "Veuillez entrer un numéro de téléphone valide.";
    }
  
    // Validation de l'adresse
    if (adresse.value.length < 1) {
      adresseError = true;
      document.getElementById("adresse-error").textContent = "Veuillez entrer votre adresse.";
    }
  
    // Si aucune erreur, soumettre le formulaire
    if (!jinxError && !contactError && !phoneError && !adresseError) {
      document.getElementById("aDeliveryForm").submit();
    }
  }