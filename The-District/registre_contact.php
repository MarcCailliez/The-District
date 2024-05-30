

<?php



// On déclare une variable dont la valeur (contenu) sera écrite dans le fichier
 $myVar = \n  $_REQUEST['prenom'];


 /* $_REQUEST['prenom']  $_REQUEST['nom'] $_REQUEST['email] $_REQUEST['telephone']  $_REQUEST['question] "; */


// Ouverture en écriture seule 
$fp = fopen("AAAA-MM-JJ-HH-MM-SS.txt", "a"); 

// Ecriture du contenu ($myVar) 
fputs($fp, $myVar); 

// Fermeture du fichier  
fclose($fp); 


?>