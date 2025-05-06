<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $naam = $_POST["naam"];
    $achternaam = $_POST["achternaam"];
    $geboortedatum = $_POST["geboortedatum"];

    //Validatie toeveogen

    //Naar een bestand schrijven
    $bestand = fopen("data.txt", "a") or die("Unable to open file!");
    //Rechten aanpassen
    chmod("data.txt", 0644);
    //Schrijf de data uit het formulier in het tekstbestand
    if(fwrite($bestand, $naam . "," . $achternaam . "," . $geboortedatum . "\n"))
    {
        $melding = "De gegevens zijn opgeslagen.";
    }
    else {
        $melding = "Er is iets misgegaan.";
    }
    fclose($bestand);
}

include_once("verwerk_view.php");