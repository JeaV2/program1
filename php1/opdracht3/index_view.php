<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Opdracht 3 | Resultaten</title>
    <link rel="stylesheet" href="./content/style.css">

</head>
<body>
<div class="container">
    <h1>Resultaten</h1>

        <div class="student-info">
            <h2><?= $naam ?></h2>
            <p><strong>Student nummer:</strong> <?= $studentNummer ?></p>
            <p><strong>Klas:</strong> <?= $klas ?></p>
        </div>

            <h3>Vakken en cijfers</h3>
            <table>
                <thead>
                <tr>
                    <th>Vak</th>
                    <th>Cijfer</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <?php
                $gemiddelde = 0;
                $aantalVakken = 0;

                foreach ($vakken as $vak => $cijfer):
                    if (!empty($vak) && is_numeric($cijfer)):
                        $aantalVakken++;
                        $gemiddelde += floatval($cijfer);
                        ?>
                        <tr>
                            <td><?= htmlspecialchars($vak) ?></td>
                            <td><?= htmlspecialchars($cijfer) ?></td>
                            <td>
                                <?php if (floatval($cijfer) >= 5.5): ?>
                                    <span class="voldoende">Voldoende</span>
                                <?php else: ?>
                                    <span class="onvoldoende">Onvoldoende</span>
                                <?php endif; ?>
                            </td>
                        </tr>
                    <?php
                    endif;
                endforeach;

                $gemiddelde = $aantalVakken > 0 ? $gemiddelde / $aantalVakken : 0;
                ?>
                </tbody>
                <tfoot>
                <tr>
                    <td><strong>Gemiddelde</strong></td>
                    <td><strong><?= number_format($gemiddelde, 1) ?></strong></td>
                    <td>
                        <?php if ($gemiddelde >= 5.5): ?>
                            <span class="voldoende">Voldoende</span>
                        <?php else: ?>
                            <span class="onvoldoende">Onvoldoende</span>
                        <?php endif; ?>
                    </td>
                </tr>
                </tfoot>
            </table>
</div>
</body>
</html>