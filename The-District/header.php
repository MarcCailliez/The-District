<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Disctrict</title>
    <link rel="stylesheet" href="ptit_css.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>

  <div class="container-fluid g-0" >
    <div class="parallax">

    <!-- Enetete avec liens vers les autres pages -->

     <header>

     <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
      <div class="container-fluid ">
        <img src="images_the_district/the_district_brand/logo_transparent.png" alt="logo" width="10%">
     
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li class="nav-item">
              <a class="nav-link  <?php if ($_SERVER['REQUEST_URI'] == "/The-District/The-District/Acceuil.php") { echo "active"; }?>"  aria-current="page" href="Acceuil.php">Accueil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link  <?php if ($_SERVER['REQUEST_URI'] == "/The-District/The-District/Cat%C3%A9gories.php") { echo "active"; }?>" aria-current="page" href="Catégories.php">Catégories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link  <?php if ($_SERVER['REQUEST_URI'] == "/The-District/The-District/Tous%20les%20plats.php") { echo "active"; }?>" href="Tous les plats.php">Tout les Plats</a>
            </li>
            <li class="nav-item">
              <a class="nav-link  <?php if ($_SERVER['REQUEST_URI'] == "/The-District/The-District/Contact.php") { echo "active"; }?>" href="Contact.php">Contact</a>
            </li>
            <li class="nav-item">
              <a href="commande.php">
                <img  src="images_the_district/basket2.svg" class="rounded-pill  p-1 " id="couleurNavbar">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
 


    




    <!-- barre de recherche et gif en fond  -->
    
    


<div class="container-fluid g-0 " id="video1">
     <div class="card no-hover" id="videoBordure">
  <video class="embed-responsive-item " autoplay muted loop id="videoTaille">
      <source src="images_the_district/intérieur resto.mp4" type="video/mp4">
  </video>
  <?php if ($_SERVER['REQUEST_URI']!= "/The-District/The-District/commande.php") 
  if ($_SERVER['REQUEST_URI']!= "/The-District/The-District/Contact.php"){?>
  <div class="card-img-overlay no-hover d-flex align-items-center justify-content-center ">
      <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search" id="rechercheBarre">
  </div>
  <?php }?>
</div>
</div>




  </header>

  