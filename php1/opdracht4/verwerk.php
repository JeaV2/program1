<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $naam = strip_tags(htmlspecialchars($_POST["naam"]));
    $achternaam = strip_tags(htmlspecialchars($_POST["achternaam"]));
    $tussenvoegsel = strip_tags(htmlspecialchars($_POST["tussenvoegsel"]));
    $email = strip_tags(htmlspecialchars($_POST["email"]));
    $telefoon = strip_tags(htmlspecialchars($_POST["telefoon"]));
    $straatnaam = strip_tags(htmlspecialchars($_POST["straat"]));
    $huisnummer = strip_tags(htmlspecialchars($_POST["huisnummer"]));
    $postcode = strip_tags(htmlspecialchars($_POST["postcode"]));
    $woonplaats = strip_tags(htmlspecialchars($_POST["woonplaats"]));
    $bsn = strip_tags(htmlspecialchars($_POST["bsn"]));
    $geboortedatum = strip_tags(htmlspecialchars($_POST["geboortedatum"]));
    $vacature = strip_tags(htmlspecialchars($_POST["vacature"]));

    if ($naam === "") {
        $errors['naam'] = "Voer uw naam in.";
    }
    if ($achternaam === "") {
        $errors['achternaam'] = "Voer uw achternaam in.";
    }
    if ($email === "") {
        $errors['email'] = "Voer uw email in.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = "Ongeldige e-mailadres.";
    }
    if ($telefoon === "") {
        $errors['telefoon'] = "Voer uw telefoonnummer in.";
    } elseif (!preg_match('/(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/', $telefoon)) {
        $errors['telefoon'] = "Ongeldige telefoonnummer.";
    }
    if ($straatnaam === "") {
        $errors['straatnaam'] = "Voer uw straatnaam in.";
    }
    if ($huisnummer === "") {
        $errors['huisnummer'] = "Voer uw huisnummer in.";
    } elseif (!ctype_digit($huisnummer)) {
        $errors['huisnummer'] = "Ongeldige huisnummer.";
    }
    if ($postcode === "") {
        $errors['postcode'] = "Voer uw postcode in.";
    } elseif (!preg_match('/\\d\\d\\d\\d[A-Za-z][A-Za-z]/i', $postcode)) {
        $errors['postcode'] = "Ongeldige postcode.";
    }
    if ($woonplaats === "") {
        $errors['woonplaats'] = "Voer uw woonplaats in.";
    }
    if ($bsn === "") {
        $errors['bsn'] = "Voer uw bsn in.";
    } elseif (!preg_match('/^\\d{8,9}$/', $bsn)) {
        $errors['bsn'] = "Ongeldige bsn.";
    }
    if ($geboortedatum === "") {
        $errors['geboortedatum'] = "Voer uw geboortedatum in.";
    } elseif ($geboortedatum > date('Y-m-d')) {
        $errors['geboortedatum'] = 'Geboorte datum mag niet in de toekomst liggen.';
    } else {
        $geboorteDatum = new DateTime($geboortedatum);
        $vandaag = new DateTime('now');

        $verschil = date_diff($geboorteDatum, $vandaag);

        if ($verschil->y > 100) {
            $errors['geboortedatum'] = 'Geboorte datum mag niet meer dan 100 jaar geleden zijn.';
        } elseif ($verschil->y < 18) {
            $errors['geboortedatum'] = 'U moet minimaal 18 jaar oud zijn.';
        }
    }
    if ($vacature === "") {
        $errors['vacature'] = "Voer uw vacature in.";
    }

    if (empty($errors)) {
        include_once("./verwerk_view.php");
    }
    else {
        include_once("./index.php");
    }
}