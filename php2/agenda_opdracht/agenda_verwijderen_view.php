<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/agenda.css">
    <title>Agenda Item Verwijderen</title>
</head>
<body>
<h1>Agenda Item Verwijderen</h1>

<div class="agenda-container">
    <?php if ($aantalRijen > 0) { ?>
        <?php foreach ($resultaten as $rij) { ?>
            <div class="agenda-item">
                <div class="agenda-field">
                    <span class="agenda-label">Onderwerp:</span>
                    <span class="agenda-value"><?= htmlspecialchars($rij['onderwerp']) ?></span>
                </div>

                <div class="agenda-field">
                    <span class="agenda-label">Inhoud:</span>
                    <span class="agenda-value"><?= htmlspecialchars($rij['inhoud']) ?></span>
                </div>

                <div class="agenda-field">
                    <span class="agenda-label">Begindatum:</span>
                    <span class="agenda-value"><?= htmlspecialchars($rij['begin_datum']) ?></span>
                </div>

                <div class="agenda-field">
                    <span class="agenda-label">Status:</span>
                    <span class="agenda-value"><?= htmlspecialchars($rij['status']) ?></span>
                </div>

                <div class="agenda-field">
                    <span class="agenda-label">Einddatum:</span>
                    <span class="agenda-value"><?= htmlspecialchars($rij['eind_datum']) ?></span>
                </div>

                <div class="agenda-actions">
                    <p>
                        Weet je zeker dat je dit item wilt verwijderen? <br>
                        <sup>Dit kan niet ongedaan gemaakt worden.</sup>
                    </p>
                    <a href="agenda_verwijderen_verwerk.php?id=<?= $rij['id'] ?>" class="btn btn-delete"><b>Verwijderen</b></a>
                    <a href="./" class="btn btn-add">Behouden</a>
                </div>
            </div>
        <?php } ?>
    <?php } else { ?>
        <div class="no-results">
            <p>Geen resultaten gevonden.</p>
        </div>
    <?php } ?>
</div>
</body>
</html>