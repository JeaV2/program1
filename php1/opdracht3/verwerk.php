<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Initialize variables with default values
$naam = "";
$studentNummer = "";
$klas = "";
$vakken = [];

if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST["naam"]) && !empty($_POST["studentNummer"]) && !empty($_POST["klas"])) {
    $naam = $_POST["naam"];
    $studentNummer = $_POST["studentNummer"];
    $klas = $_POST["klas"];
    $vakken = [
        $_POST['vak1'] => $_POST['cijfer1'],
        $_POST['vak2'] => $_POST['cijfer2'],
        $_POST['vak3'] => $_POST['cijfer3'],
        $_POST['vak4'] => $_POST['cijfer4'],
    ];
}
else {
    $error = "Niet alle velden zijn ingevuld.";
    header("Location: index.html");
}

include_once("index_view.php");