<?php
session_start();
$token = bin2hex(openssl_random_pseudo_bytes(32));
$_SESSION['tokenSessie'] = $token;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inloggen - Agenda</title>
    <link rel="stylesheet" href="./css/agenda.css">
    <link rel="stylesheet" href="./css/login.css">
</head>
<body>
    <div class="login-container">
        <div class="login-card">
            <h1>Inloggen</h1>
            
            <?php if (isset($error_message) && $error_message !== ""): ?>
                <div class="error-message">
                    <?= $error_message ?>
                </div>
            <?php endif; ?>
            
            <form action="index.php" method="post" class="login-form">
                <div class="form-group">
                    <label for="user_name">Gebruikersnaam:</label>
                    <input type="text" id="user_name" name="user_name" placeholder="Voer uw gebruikersnaam in..." value="<?= htmlspecialchars($user_name ?? '') ?>" >
                </div>
                
                <div class="form-group">
                    <label for="password">Wachtwoord:</label>
                    <input type="password" id="password" name="password" placeholder="Voer uw wachtwoord in..." >
                </div>
                
                <input type="hidden" name="tokenVeld" value="<?= $token ?>">
                
                <div class="form-actions">
                    <input type="submit" value="Inloggen" class="btn-login">
                </div>
            </form>
            
            <div class="login-footer">
                <p>Welkom bij het Agenda Systeem</p>
            </div>
        </div>
    </div>
</body>
</html>