<?php

require_once '../crud/config.php';

$valid_referer = isset($_SERVER['HTTP_REFERER']) && (
    strpos($_SERVER['HTTP_REFERER'], '127.0.0.1:5500/agenda_opdracht/') !== false ||
    strpos($_SERVER['HTTP_REFERER'], '102710.stu.sd-lab.nl/program1/php2/agenda_opdracht/') !== false
);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $valid_referer) {
    $user_name = trim(htmlspecialchars(strip_tags($_POST['user_name']), ENT_QUOTES, 'UTF-8'));
    $password = trim(htmlspecialchars(strip_tags($_POST['password']), ENT_QUOTES, 'UTF-8'));
    $password = sha1($password);
    $error_message = "";
    if ($user_name === "") {
        $error_message .= "Gebruikersnaam is verplicht. <br>";
    } 
    if ($password === "") {
        $error_message .= "Wachtwoord is verplicht.";
    }
    if ($error_message) {
        include_once 'index.php';
    } else {
        $stmt = $pdo->prepare("SELECT * FROM user WHERE user_name = :user_name AND password = :password");
        $stmt->execute(['user_name' => $user_name, 'password' => $password]);
        $user = $stmt->fetch();

        if ($user) {
            session_start();
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_name'] = $user['user_name'];
            header("Location: agenda.php");
            exit;
        } else {
            $error_message = "Ongeldige gebruikersnaam of wachtwoord.";
            include_once 'index.php';
        }
    }
}

include_once 'login_view.php';