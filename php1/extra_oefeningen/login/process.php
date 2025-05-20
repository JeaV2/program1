<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$username = "admin";
$password = "VerySecurePassword";


if($_SERVER["REQUEST_METHOD"] == "POST"){
    $inputUsername = strip_tags(htmlspecialchars($_POST["username"]));
    $inputPassword = strip_tags(htmlspecialchars($_POST["password"]));

    if($inputUsername === ""){
        $errors["username"] = "Please enter a valid username.";
    }
    if($inputPassword === ""){
        $errors["password"] = "Please enter a valid password.";
    }

    if ($username !== $inputUsername || $password !== $inputPassword) {
        $errors["login"] = "Incorrect username or password.";
    }

    if (empty($errors)) {
        include_once "process_view.php";
    }
    else {
        include_once "view.php";
    }

}