<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_SERVER['HTTP_REFERER'] = 'https://102710.stu.sd-lab.nl/program1/php2/agenda_opdracht/agenda_toevoegen.php' && $_SESSION['token'] == $_POST['csrf_token']) {
    $onderwerp = strip_tags(htmlspecialchars($_POST['onderwerp']));
    $inhoud = strip_tags(htmlspecialchars($_POST['inhoud']));
    $begin_datum = strip_tags(htmlspecialchars($_POST['begin_datum']));
    $status = strip_tags(htmlspecialchars($_POST['status']));
    $eind_datum = strip_tags(htmlspecialchars($_POST['eind_datum']));

    if ($onderwerp === "") {
        $errors['onderwerp'] = "Een onderwerp voor het agenda-item is verplicht.";
    }
    if ($inhoud === "") {
        $errors['inhoud'] = "Een inhoud voor het agenda-item is verplicht.";
    }
    if ($begin_datum === "") {
        $errors['begin_datum'] = "Een begin datum voor het agenda-item is verplicht.";
    }
    if ($status === "") {
        $errors['status'] = "Een status voor het agenda-item is verplicht.";
    }
    if ($eind_datum === "") {
        $errors['eind_datum'] = "Een eind datum voor het agenda-item is verplicht.";
    }
    if (empty($errors)) {
        require("../crud/config.php");
        try {
            $query = "INSERT INTO crud_agenda (onderwerp, inhoud, begin_datum, status, eind_datum) VALUES (:onderwerp, :inhoud, :begin_datum, :status, :eind_datum)";
            $stmt = $pdo->prepare($query);
            $stmt -> execute([
                ':onderwerp' => $onderwerp,
                ':inhoud' => $inhoud,
                ':begin_datum' => $begin_datum,
                ':status' => $status,
                ':eind_datum' => $eind_datum
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
}