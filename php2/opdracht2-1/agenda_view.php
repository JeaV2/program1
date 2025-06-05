<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/agenda.css">
    <title>Agenda</title>
</head>
<body>
    <h1>Agenda</h1>
    <div class="agenda-container">
        <?php if ($aantalRijen > 0) {?>
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
                    
                    <div class="agenda-actions">
                        <a href="agenda_detail.php?id=<?= $rij['id'] ?>" class="btn btn-detail">Details</a>
                        <a href="agenda_bewerken.php?id=<?= $rij['id'] ?>" class="btn btn-edit">Bewerken</a>
                        <a href="agenda_verwijderen.php?id=<?= $rij['id'] ?>" class="btn btn-delete">Verwijderen</a>
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