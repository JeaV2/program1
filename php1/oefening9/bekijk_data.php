<?php
// display errors
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Laat data zien op pagina
// Open het tekstbestand in read modus
$data = fopen( "data.txt", "r");
// Voeg alle lijnen toe aan een array
$dataArray = [];
while(!feof($data)) {
    $dataArray[] = fgets($data);
}
fclose($data);
foreach($dataArray as $line) {
    $explodedArray[]= explode(",", $line);
}
include_once("bekijk_data_view.php");