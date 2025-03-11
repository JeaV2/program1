<?php

$nummer = null;
$naam = null;

if (!empty($_GET["nummer"]) && is_numeric($_GET["nummer"]) && !empty($_GET["naam"])) {
    $nummer = $_GET["nummer"];
    $naam = $_GET["naam"];
    include_once("view.php");
}
else {
    $error = "Unknown";
    header("Location: index.html");
}