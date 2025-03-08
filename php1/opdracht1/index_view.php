<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./content/style.css">
    <title>Jea</title>
</head>
<body>
    <div class="container">
        <div class="text">
            <h1>Hallo, ik ben <?= $naam; ?>. (<?= $studentenNummer ?>)</h1>
            ik zit in klas <?= $klas; ?>. <br>
            en ik heb deze vakken op de middelbare school gehad zijn:
            <ul>
                <?php foreach ($leerlijn as $vak): ?>
                    <li><?= $vak; ?></li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>
</body>
</html>