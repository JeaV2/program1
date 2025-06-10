<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
require '../crud/config.php';

// Get the ID parameter from URL
$id = $_GET['id'] ?? null;

if (!$id) {
    die("No ID provided");
}

function formatDate($dateValue) {
    if (empty($dateValue)) {
        return '';
    }

    // Check if it's a Unix timestamp (numeric and longer than 10 digits)
    if (is_numeric($dateValue) && strlen($dateValue) >= 10) {
        // Handle both seconds and milliseconds timestamps
        $timestamp = strlen($dateValue) > 10 ? intval($dateValue / 1000) : intval($dateValue);
        return date('Y-m-d', $timestamp);
    }

    // If it's already in a date format, try to parse and reformat it
    $date = DateTime::createFromFormat('Y-m-d', $dateValue);
    if ($date !== false) {
        return $date->format('Y-m-d');
    }

    // Try other common date formats
    $date = DateTime::createFromFormat('Y-m-d H:i:s', $dateValue);
    if ($date !== false) {
        return $date->format('Y-m-d');
    }

    // If all else fails, try strtotime
    $timestamp = strtotime($dateValue);
    if ($timestamp !== false) {
        return date('Y-m-d', $timestamp);
    }

    // Return original value if nothing works
    return $dateValue;
}

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

include 'agenda_details_view.php';