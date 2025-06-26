<?php

$id = $_GET['id'] ?? null;
if (empty($id)) {
    die("Geen ID opgegeven");
}

require_once '../crud/config.php';
require_once 'helpers.php';

$query = "SELECT * FROM crud_agenda WHERE id = :id";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':id', $id, PDO::PARAM_INT);
$stmt->execute();
$resultaat = $stmt->fetch();

$begin_datum = formatDate($resultaat['begin_datum']);
$eind_datum = formatDate($resultaat['eind_datum']);


include_once 'agenda_bewerken_view.php';