<?php
session_start();
$token = bin2hex(openssl_random_pseudo_bytes(32));
$_SESSION['tokenSessie'] = $token;
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/agenda.css">
    <title>Agenda Item Bewerken</title>
    <link rel="stylesheet" href="./css/toevoegen.css">
</head>
<body>
    <h1>Agenda Item Bewerken</h1>
    <div class="form-container">
        <form action="agenda_bewerken_verwerk.php" method="post">
            <div class="form-group">
                <label for="onderwerp">Onderwerp:</label>
                <?php if (isset($errors['onderwerp'])){ ?>
                    <span class="error-message"><?= htmlspecialchars($errors['onderwerp']) ?></span>
                <?php } ?>
                <input type="text" id="onderwerp" name="onderwerp" placeholder="Agenda item onderwerp..." value="<?= htmlspecialchars($resultaat['onderwerp']);?>">
            </div>
            
            <div class="form-group">
                <label for="inhoud">Inhoud:</label>
                <?php if (isset($errors['inhoud'])){ ?>
                    <span class="error-message"><?= htmlspecialchars($errors['inhoud']) ?></span>
                <?php } ?>
                <input type="text" id="inhoud" name="inhoud" placeholder="Agenda item inhoud..." value="<?= htmlspecialchars($resultaat['inhoud']) ?>">
            </div>
            
            <div class="form-group">
                <label for="begin_datum">Begin datum:</label>
                <?php if (isset($errors['begin_datum'])){ ?>
                    <span class="error-message"><?= htmlspecialchars($errors['begin_datum']) ?></span>
                <?php } ?>
                <input type="date" id="begin_datum" name="begin_datum" value="<?= htmlspecialchars($begin_datum); ?>">
            </div>
            
            <div class="form-group">
                <label for="status">Status:</label>
                <?php if (isset($errors['status'])){ ?>
                    <span class="error-message"><?= htmlspecialchars($errors['status']) ?></span>
                <?php } ?>
                <select name="status" id="status">
                    <option value="Nog niet begonnen" <?= (($resultaat['status'] ?? '') == 'Nog niet begonnen') ? 'selected' : '' ?>>Nog niet begonnen</option>
                    <option value="Bezig" <?= (($resultaat['status'] ?? '') == 'Bezig') ? 'selected' : '' ?>>Bezig</option>
                    <option value="Afgerond" <?= (($resultaat['status'] ?? '') == 'Afgerond') ? 'selected' : '' ?>>Afgerond</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="eind_datum">Eind datum:</label>
                <?php if (isset($errors['eind_datum'])){ ?>
                    <span class="error-message"><?= htmlspecialchars($errors['eind_datum']) ?></span>
                <?php } ?>
                <input type="date" id="eind_datum" name="eind_datum" value="<?= htmlspecialchars($eind_datum) ?>">
            </div>

            <input type="hidden" name="tokenVeld" id="token" value="<?= $token ?>">
            <input type="hidden" name="id" value="<?= $id ?>">

            <div class="form-actions">
                <input type="submit" value="Aanpassingen opslaan" class="btn btn-primary">
                <div class="back-link">
                    <a href="agenda.php" class="btn btn-detail">Terug naar overzicht</a>
                </div>
            </div>
        </form>
    </div>
</body>
</html>