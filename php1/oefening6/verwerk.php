<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $naam = $_POST["naam"];
    $leeftijd = $_POST["leeftijd"];
    $error = $naam . " is " . $leeftijd . " jaar oud";
}
else {
    $error = "Unknown";

}

header("Location: index.php?info=".$error);