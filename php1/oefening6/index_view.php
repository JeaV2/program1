<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Oefening 6 | Formulier</title>
</head>
<body>
<p><?= $info ?></p>
<form action="./verwerk.php" method="post">
    <label for="naam">Naam</label>: <input type="text" name="naam" id="naam"><br>
    <label for="leeftijd">leeftijd</label>: <input type="text" name="leeftijd" id="leeftijd"><br>
    <input type="submit" value="Verwerken">
</form>
</body>
</html>