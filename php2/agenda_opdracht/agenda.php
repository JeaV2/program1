<?php

require '../crud/config.php';
require './helpers.php';

try {
    $query = "SELECT * FROM crud_agenda";
    $stmt = $pdo->prepare($query);
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
    unset($rij);

    $aantalRijen = count($resultaten);
} catch (PDOException $e) {
    echo "Fout";
    echo "<p> Query: " . $query . "</p>";
    echo $e->getMessage();
}

include 'agenda_view.php';