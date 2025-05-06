<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./content/style.css">
    <title>Resultaat</title>
</head>
<body>
    <div id="resultaat">
        <h1>Beste <?= $naam ?> <?= $tussenvoegsel ?> <?= $achternaam ?> , bedankt voor je inschrijving.</h1>
        <p>
            We zullen je zo snel mogelijk een e-mail sturen op je e-mailadres <?= $email ?>, <br>
            om je op de hoogte te houden van je vacature voor <?= $vacature ?>

        </p>
    </div>
</body>
</html>