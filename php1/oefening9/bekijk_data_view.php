<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Data</title>
</head>
<body>
    <h1>data</h1>
    <p>
        <!--Laat de data zien op de pagina-->
        <!--Dump hele array-->
        <?php var_dump($explodedArray); ?>
        <br>
        <br>
        <?php foreach ($explodedArray as $persoon): ?>
            <?php foreach ($persoon as $gegeven): ?>
                    <span><?= $gegeven; ?> </span>
                <?php endforeach; ?>
            <br>
        <?php endforeach; ?>
    </p>
</body>
</html>