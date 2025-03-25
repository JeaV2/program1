<!doctype html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Oefening 7 | Formulier validatie</title>
</head>
<body>
    <h1>Formulier</h1>
    <form action="verwerk.php" method="post">


        <?php if (isset($errors)){ ?>
            <p><?= @$errors['naam'] ?></p>
        <?php } ?>
        <label for="naam">Wat is je naam?:</label>
        <input type="text" name="naam" id="naam" >
        <br>

        <?php if (isset($errors)){ ?>
            <p><?= @$errors['email'] ?></p>
        <?php } ?>
        <label for="email">Wat is je email-adres?:</label>
        <input type="email" name="email" id="email" >
        <br>

        <?php if (isset($errors)){ ?>
            <p><?= @$errors['leeftijd'] ?></p>
        <?php } ?>
        <label for="leeftijd">Wat is je leeftijd?:</label>
        <input type="number" name="leeftijd" id="leeftijd" >
        <br>
        <br>
        <input type="submit" value="submit">
    </form>
</body>
</html>