<?php include 'header.php'?>

    <!-- Formulaire de contact -->

    <!-- couleur arrière plan -->
<!-- <div class="bg-color"> -->

<br>


<!-- Formulaire de contact -->




  <br>


 <form id="contactForm" class="row g-3 needs-validation mx-5 p-5" onsubmit="event.preventDefault(); validateContactForm();">
    <div class="col-md-6">
      <label for="validationTooltip01" class="form-label text-white" id="prenom">Prénom</label>
      <input type="text" class="form-control " id="validationTooltip01">
      <div class="error-message" id="prenom-error"></div>
    </div>
    <div class="col-md-6">
      <label for="validationTooltip02" class="form-label text-white" id="nom">Nom</label>
      <input type="text" class="form-control" id="validationTooltip02">
      <div class="error-message" id="nom-error"></div>
    </div>
    <div class="col-md-6">
      <label for="validationTooltip03" class="form-label text-white" id="email">E-mail</label>
      <input type="text" class="form-control" id="validationTooltip03">
      <div class="error-message" id="email-error"></div>
    </div>
    <div class="col-md-6 ">
      <label for="validationTooltip04" id="telephone" class="form-label text-white">Téléphone</label>
      <input type="tel" class="form-control" id="validationTooltip04">
      <div class="error-message" id="telephone-error"></div>
    </div>
    <div class="col-12">
      <label for="question" id="question" class="form-label text-white">Votre Question</label>
      <textarea class="form-control"></textarea>
      <div class="error-message" id="question-error"></div>
    </div>
    <br>
    <div class="container text-end">
      <div class="btn-group " role="group" aria-label="Un groupe de boutons">
        <input class="btn btn-primary me-2" type="submit" value="Envoyer">
      </div>
    </div>
  </form> 






 
    <!-- Réseaux sociaux -->    

    <?php include 'footer.php'?>