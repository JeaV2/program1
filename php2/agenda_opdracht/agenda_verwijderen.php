<?php

require_once("session_check.php");
require '../crud/config.php';

// Get the ID parameter from URL
$id = $_GET['id'] ?? null;

if (!$id) {
    die("No ID provided");
}

require_once 'helpers.php';

try {
    $query = "SELECT * FROM crud_agenda WHERE id = :id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();

    $resultaten = $stmt->fetchAll();

    // Format dates in the results
    foreach ($resultaten as &$rij) {
        if (isset($rij['begin_datum'])) {
            $rij['begin_datum'] = formatDate($rij['begin_datum']);
        }
        // Add more date fields if needed
        if (isset($rij['eind_datum'])) {
            $rij['eind_datum'] = formatDate($rij['eind_datum']);
        }
    }

    $aantalRijen = count($resultaten);
} catch (PDOException $e) {
    echo "Fout bij ophalen van agenda item";
    echo "<p>Query: " . $query . "</p>";
    echo "<p>Error: " . $e->getMessage() . "</p>";
}

include 'agenda_verwijderen_view.php';