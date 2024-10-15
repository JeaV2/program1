function controleer()
    {
        let waarde = document.getElementById("invoer").value;
        if (waarde == "") {
            document.getElementById("uitvoer").innerHTML = "U heeft niets ingevoerd.";
        }
        else {
            document.getElementById("uitvoer").innerHTML = "Hallo, " + waarde + ".";
        }

        let waarde2 = document.getElementById("invoer2").value;
        if (waarde2 == "") {
            document.getElementById("uitvoer2").innerHTML = "U heeft niets ingevoerd.";
        }
        else {
            document.getElementById("uitvoer2").innerHTML = "Je woont in, " + waarde2 +".";
        }
    }