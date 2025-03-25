<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$leeftijd = filter_var($_POST['leeftijd'], FILTER_SANITIZE_NUMBER_INT);
$naam = strip_tags(htmlspecialchars($_POST['naam']));
$datum = $_POST['datum'];
$hobby = $_POST['hobby'];

if (empty($naam)) {
    $errors['naam'] = 'De naam is verplicht.';
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Ongeldig email adres.';
}

if (!is_numeric($leeftijd)) {
    $errors['leeftijd'] = 'Leeftijd moet een getal zijn.';
} else if ($leeftijd < 18) {
    $errors['leeftijd'] = 'Leeftijd moet minimaal 18 zijn.';
}

if (empty($datum)) {
    $errors['datum'] = 'Geboorte datum is verplicht.';
} elseif ($datum > date('Y-m-d')) {
    $errors['datum'] = 'Geboorte datum mag niet in de toekomst liggen.';
} else{
    $geboorteDatum = New DateTime($datum);
    $vandaag = New DateTime('now');

    $verschil = date_diff($geboorteDatum, $vandaag);

    if ($verschil->y > 100) {
        $errors['datum'] = 'Geboorte datum mag niet meer dan 100 jaar geleden zijn.';
    }
}

if (empty($hobby)) {
    $errors['hobby'] = 'Hobby is verplicht.';
} elseif (strlen($hobby) < 20) {
    $errors['hobby'] = 'De beschrijving moet minimaal 20 karakters lang zijn.';
}

if (empty($errors)) {
    include_once("verwerk_view.php");
}
else {
    include_once("index_view.php");
}