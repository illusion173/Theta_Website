<?php
 $input = $_POST["firstname"] + " " + $_POST["lastname"] + " " + $_POST["bday"] + " " + $_POST["card#"] + " " + $_POST["gender"] + " " + $_POST["email"] + " " + $_POST["to"] + " " + $_POST["from"] + " " + $_POST["triptype"] + " " + $_POST["departdate"] + " " + $_POST["landingdate"] + " " + $_POST["pass"] + " " + $_POST["class"];
 
$filename = $_POST["lastname"] + "_" + $_POST["firstname"];

$filew = fopen( ($filename + ".txt"), "w");

fwrite($filew, $input);
fclose($filew);

?>