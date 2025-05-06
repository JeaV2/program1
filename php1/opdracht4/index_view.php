<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./content/style.css">
    <title>Studenten vacature</title>
</head>
<body>
    <form action="./verwerk.php" method="post">
        <h1>Inschrijfformulier Uitzendbureau</h1>
        <hr>
        <br>
        <?php if (isset($errors)){ ?>
        <p style="color: red"><?= @$errors['naam'] ?></p>
        <?php } ?>
        <label for="naam">Voornaam:</label>
        <input type="text" name="naam" id="naam" value="<?= @$naam ?>">
        <br>
        <?php if (isset($errors)){ ?>
            <p style="color: red"><?= @$errors['achternaam'] ?></p>
        <?php } ?>
        <label for="achternaam">Achternaam:</label>
        <input type="text" name="achternaam" id="achternaam" value="<?= @$achternaam ?>">
        <br>
        <label for="tussenvoegsel">Tussenvoegsel:</label>
        <input type="text" name="tussenvoegsel" id="tussenvoegsel" value="<?= @$tussenvoegsel ?>">
        <br>
        <?php if (isset($errors)){ ?>
            <p style="color: red"><?= @$errors['email'] ?></p>
        <?php } ?>
        <label for="email">E-mailadres:</label>
        <input type="email" name="email" id="email" value="<?= @$email ?>">
        <br>
        <?php if (isset($errors)){ ?>
            <p style="color: red"><?= @$errors['telefoon'] ?></p>
        <?php } ?>
        <label for="telefoon">Telefoonnummer:</label>
        <input type="tel" name="telefoon" id="telefoon" value="<?= @$telefoon ?>">
        <br>
        <?php if (isset($errors)){ ?>
            <p style="color: red"><?= @$errors['straatnaam'] ?></p>
        <?php } ?>
        <label for="straat">Straatnaam:</label>
        <input type="text" name="straat" id="straat" value="<?= @$straatnaam ?>">
        <br>
        <?php if (isset($errors)){ ?>
        <p style="color: red"><?= @$errors['huisnummer'] ?></p>
        <?php } ?>
        <label for="huisnummer">Huisnummer:</label>
        <input type="number" name="huisnummer" id="huisnummer" value="<?= @$huisnummer ?>">
        <br>
        <?php if (isset($errors)){ ?>
        <p style="color: red"><?= @$errors['postcode'] ?></p>
        <?php } ?>
        <label for="postcode">Postcode:</label>
        <input type="text" name="postcode" id="postcode" value="<?= @$postcode ?>">
        <br>
        <?php if (isset($errors)){ ?>
        <p style="color: red"><?= @$errors['woonplaats'] ?></p>
        <?php } ?>
        <label for="woonplaats">Woonplaats:</label>
        <input type="text" name="woonplaats" id="woonplaats" value="<?= @$woonplaats ?>">
        <br>
        <?php if (isset($errors)){ ?>
        <p style="color: red"><?= @$errors['bsn'] ?></p>
        <?php } ?>
        <label for="bsn">BSN-nummer:</label>
        <input type="text" name="bsn" id="bsn" value="<?= @$bsn ?>">
        <br>
        <?php if (isset($errors)){ ?>
        <p style="color: red"><?= @$errors['geboortedatum'] ?></p>
        <?php } ?>
        <label for="geboortedatum">Geboortedatum:</label>
        <input type="date" name="geboortedatum" id="geboortedatum" value="<?= @$geboortedatum ?>">
        <br>
        <?php if (isset($errors)){ ?>
        <p style="color: red"><?= @$errors['vacature'] ?></p>
        <?php } ?>
        <label for="vacature">Vacature:</label>
        <select name="vacature" id="vacature">
            <option value="" >Selecteer een vacature </option>
            <?php foreach ($vacatures as $key => $value): ?>
                <option value="<?= $value; ?>"><?= $key ?></option>
            <?php endforeach; ?>
        </select>
        <br>
        <br>
        <input type="submit" value="Inschrijven" id="submit">
    </form>
</body>
</html>