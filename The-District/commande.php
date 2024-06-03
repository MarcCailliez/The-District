<?php include 'header.php'?>

  <!-- couleur arrière plan -->
<!-- <div class="bg-color"> -->
<br>


<!-- card de la commande -->






<!-- Formulaire de commande -->



<form id="aDeliveryForm" class="row g-3 needs-validation mx-5 p-5" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" onsubmit="event.preventDefault(); validateDeliveryForm();">


<div class="container-fluid d-flex" id="commandeCentre">
  <div class="card mb-3 text-center no-hover" id="commandeCouleur">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="images_the_district/image-perso-1.jpeg" class="img-fluid rounded-5 border border-secondary" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Plats commandé</h5>
          <p class="card-text">Description du plat commandé.</p>

          <div class="input-group" id="commandeCentre">
            <label for="tentacles-value">Quantité : &nbsp;</label>
            <button class="btn btn-secondary btn-sm" id="minus" type="button">-</button>
            <input type="text" style="" id="tentacles-display" value="00" min="0" max="100" readonly />
            <button class="btn btn-secondary btn-sm" id="plus" type="button">+</button>
            <input type="hidden" id="tentacles-value" name="tentacles" min="0" max="100" value="0" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  <div class="container">
    <div class="col-md-12">
      <label for="numero1" class="form-label text-white" id="jinx">Nom et Prénom</label>
      <input type="text" id="numero1" name="jinx" class="form-control">
      <div class="error-message" id="jinx-error"></div>
    </div>
  </div>

  <div class="col-md-6">
    <label for="numero2" class="form-label text-white" id="contact">E-mail</label>
    <input type="text" id="numero2" name="contact" class="form-control">
    <div class="error-message" id="contact-error"></div>
  </div>
  <div class="col-md-6 ">
    <label for="numero4" id="phone" class="form-label text-white">Téléphone</label>
    <input type="tel" id="numero4" name="phone" class="form-control">
    <div class="error-message" id="phone-error"></div>
  </div>
  <div class="col-12">
    <label for="adresse" id="Test" class="form-label text-white">Votre Adresse</label>
    <textarea id="adresse" name="adresse" class="form-control"></textarea>
    <div class="error-message" id="adresse-error"></div>
  </div>
  <br>
  <div class="container text-end">
    <div class="btn-group " role="group" aria-label="Un groupe de boutons">
      <input class="btn btn-primary me-2" type="submit" value="Envoyer">
    </div>
  </div>
</form>






<?php 

if ( $_SERVER['REQUEST_METHOD'] == 'POST') {


  $jinx = $_POST['jinx'];
  $contact = $_POST['contact'];
  $phone = $_POST['phone'];
  $adresse = $_POST['adresse'];
  $nombre = $_POST['tentacles'];
 

  $date = date ('Y-m-d-H-i-s');
  $filename = $date  . '.txt' ;

  $file = fopen($filename, 'a');
  fwrite($file, "Prénom : $jinx\n");
  fwrite($file, "E-mail : $contact\n");
  fwrite($file, "Téléphone : $phone \n");
  fwrite($file, "Adresse : $adresse \n");
  fwrite($file, "Nombre d article : $nombre \n");
 
  fclose($file);




}
 ?>
 
    <!-- Réseaux sociaux -->    

    <?php include 'footer.php'?>