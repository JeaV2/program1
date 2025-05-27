<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Agenda</title>
</head>
<body>
    <h1>Agenda</h1>
    <?php
    if ($aantalRijen > 0) { ?>
    <ul>
        <?php foreach ($resultaten as $rij) { ?>
            <li>
                <strong>Onderwerp:</strong> <?= $rij['onderwerp'] ?><br>
                <strong>Inhoud:</strong> <?= $rij['inhoud'] ?><br>
                <strong>Begindatum:</strong> <?= $rij['begin_datum'] ?><br>
                <strong>Acties:</strong>
                <a href="agenda_bewerken.php?id=<?= $rij['id'] ?>">Bewerken</a> |
                <a href="agenda_verwijderen.php?id=<?= $rij['id'] ?>">Verwijderen</a>
            </li>
            <hr>
        <?php }?>
    </ul>
    <?php } else { ?>
        <p>Geen resultaten gevonden.</p>
    <?php } ?>
</body>
</html>