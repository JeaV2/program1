<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Oefening | array's</title>
</head>
<body>
    <h1>Games die ik speel:</h1>
    <ul>
        <?php
        foreach ($games1 as $game): ?>
            <li><?= $game; ?></li>
        <?php endforeach; ?>
        <?php
        for ($i = 0; $i < count($games2); $i++) {
            ?>
                <li><?= $games2[$i]; ?></li>
            <?php
        }
        ?>
    </ul>
</body>
</html>