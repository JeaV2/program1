<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Simpel formulier</title>
</head>
<body>
    <form action="verwerk.php" method="post">
        <label for="naam">Wat is je naam?:</label>
        <input type="text" name="naam" id="naam">
        <br>
        <label for="achternaam">Wat is je achternaam?:</label>
        <input type="text" name="achternaam" id="achternaam">
        <br>
        <label for="geboortedatum">Wat is je geboortedatum?</label>
        <input type="date" name="geboortedatum" id="geboortedatum">
        <br>
        <br>
        <input type="submit" value="Verzenden">
    </form>
</body>
</html>