<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
$db = __DIR__ . '/program1_agenda.sqlite';
try {
    $pdo = new PDO("sqlite:$db");
    echo "DB successfully connected";
} catch (PDOException $e) {
    echo $e->getMessage();
}