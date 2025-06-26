<?php
session_start();


$valid_referer = isset($_SERVER['HTTP_REFERER']) && (
    strpos($_SERVER['HTTP_REFERER'], '127.0.0.1:5500/agenda_opdracht/') !== false ||
    strpos($_SERVER['HTTP_REFERER'], '102710.stu.sd-lab.nl/program1/php2/agenda_opdracht/') !== false
);

if (
    isset($_SESSION['tokenSessie']) &&
    isset($_POST['tokenVeld']) &&
    $_SESSION['tokenSessie'] === $_POST['tokenVeld'] &&
    $_SERVER['REQUEST_METHOD'] === 'POST' &&
    $valid_referer
) {
    $onderwerp = trim(htmlspecialchars(strip_tags($_POST['onderwerp']), ENT_QUOTES, 'UTF-8'));
    $inhoud = trim(htmlspecialchars(strip_tags($_POST['inhoud']), ENT_QUOTES, 'UTF-8'));
    $begin_datum = trim(htmlspecialchars(strip_tags($_POST['begin_datum']), ENT_QUOTES, 'UTF-8'));
    $status = trim(htmlspecialchars(strip_tags($_POST['status']), ENT_QUOTES, 'UTF-8'));
    $eind_datum = trim(htmlspecialchars(strip_tags($_POST['eind_datum']), ENT_QUOTES, 'UTF-8'));
    $id = trim(htmlspecialchars(strip_tags($_POST['id']), ENT_QUOTES, 'UTF-8'));
} else {
    echo "Ongeldige aanvraag of token niet gevonden.";
    echo '<a href="./">Terug naar overzicht</a>';
    exit;
}

if ($onderwerp === "") {
    $errors['onderwerp'] = "Een onderwerp voor het agenda-item is verplicht.";
} if (strlen($onderwerp) > 100) {
    $errors['onderwerp'] = "Onderwerp mag niet langer zijn dan 100 tekens.";
}

if ($inhoud === "") {
    $errors['inhoud'] = "Een inhoud voor het agenda-item is verplicht.";
} if (strlen($inhoud) > 100) {
    $errors['inhoud'] = "Inhoud mag niet langer zijn dan 100 tekens.";
}

if ($begin_datum === "") {
    $errors['begin_datum'] = "Een begin datum voor het agenda-item is verplicht.";
}

if ($status === "") {
    $errors['status'] = "Een status voor het agenda-item is verplicht.";
}
if ($status !== "Nog niet begonnen" && $status !== "Bezig" && $status !== "Afgerond") {
    $errors['status'] = "De status moet Nog niet begonnen, Bezig of Afgerond zijn.";
}

if ($eind_datum === "") {
    $errors['eind_datum'] = "Een eind datum voor het agenda-item is verplicht.";
}

// Date validation
if (!empty($begin_datum)) {
    // Check if begin_datum is a valid date
    $begin_date_parts = explode('-', $begin_datum);
    if (count($begin_date_parts) != 3 || !checkdate($begin_date_parts[1], $begin_date_parts[2], $begin_date_parts[0])) {
        $errors['begin_datum'] = "Begin datum moet een geldige datum zijn.";
    } else {
        $begin_date_obj = new DateTime($begin_datum);
        $current_year = date('Y');
        $begin_year = $begin_date_obj->format('Y');

        // Check if begin_datum is in current year
        if ($begin_year != $current_year) {
            $errors['begin_datum'] = "Begin datum moet in het huidige jaar zijn ({$current_year}).";
        }
    }
}

if (!empty($eind_datum)) {
    // Check if eind_datum is a valid date
    $eind_date_parts = explode('-', $eind_datum);
    if (count($eind_date_parts) != 3 || !checkdate($eind_date_parts[1], $eind_date_parts[2], $eind_date_parts[0])) {
        $errors['eind_datum'] = "Eind datum moet een geldige datum zijn.";
    } else {
        $eind_date_obj = new DateTime($eind_datum);
        $five_years_future = new DateTime('+5 years');

        // Check if end date is not more than 5 years in the future
        if ($eind_date_obj > $five_years_future) {
            $errors['eind_datum'] = "Eind datum mag niet meer dan 5 jaar in de toekomst zijn.";
        }

        // Check if begin_datum is before eind_datum (only if both dates are valid)
        if (!empty($begin_datum) && !isset($errors['begin_datum']) && isset($begin_date_obj)) {
            if ($begin_date_obj > $eind_date_obj) {
                $errors['eind_datum'] = "Eind datum moet na de begin datum zijn.";
            }
        }
    }
}

if (empty($errors)) {
    require("../crud/config.php");
    try {
        $query = "UPDATE crud_agenda SET onderwerp = :onderwerp, inhoud = :inhoud, begin_datum = :begin_datum, status = :status, eind_datum = :eind_datum whERE id = :id";
        $stmt = $pdo->prepare($query);
        $stmt -> execute([
            ':onderwerp' => $onderwerp,
            ':inhoud' => $inhoud,
            ':begin_datum' => $begin_datum,
            ':status' => $status,
            ':eind_datum' => $eind_datum,
            ':id' => $id
        ]);
        if ($stmt->rowCount()) {
            header("Location: index.php");
            exit;
        } else {
            echo "Fout bij het toevoegen.<br>";
            echo '<a href="./">Terug naar overzicht</a>';
        }
    } catch (PDOException $e) {
        echo "Fout bij het toevoegen.<br> Foutmelding: ".$e->getMessage()."<br>";
        echo '<a href="./">Terug naar overzicht</a>';
    }
} else {
    include_once('agenda_toevoegen_view.php');
}