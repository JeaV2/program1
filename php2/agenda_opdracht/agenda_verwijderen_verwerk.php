<?php
require_once '../crud/config.php';

$id = $_GET['id'];

try {
    $query = "DELETE FROM crud_agenda WHERE id = :id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();

    if ($stmt->rowCount()) {
        $resultaat = 1;
    }
    else {
        $resultaat = 2;
    }
} catch (Exception $e) {
    $resultaat = "Er is een fout opgetreden: " . $e->getMessage();
}

header("Location: agenda.php?resultaat=" . urlencode($resultaat));