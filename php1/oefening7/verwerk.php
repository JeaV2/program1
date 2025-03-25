<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$leeftijd = filter_var($_POST['leeftijd'], FILTER_SANITIZE_NUMBER_INT);
$naam = strip_tags(htmlspecialchars($_POST['naam']));

if (empty($naam)) {
    $errors['naam'] = 'De naam is verplicht.';
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Ongeldig email adres.';
}

if (!is_numeric($leeftijd)) {
    $errors['leeftijd'] = 'Leeftijd moet een getal zijn.';
}

if (empty($errors)) {
    include_once("verwerk_view.php");
}
else {
    include_once("index_view.php");
}