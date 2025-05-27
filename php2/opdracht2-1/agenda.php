<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
require '../crud/config.php';

try {
    $query = "SELECT * FROM crud_agenda";
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    $resultaten = $stmt->fetchAll();

    $aantalRijen = count($resultaten);
} catch (PDOException $e) {
    echo "Fout";
    echo "<p> Query: " . $query . "</p>";
    echo $e->getMessage();
}


include 'agenda_view.php';