function verwerk() {
    // Variabelen definiëren
    let zin;
    let lengte;
    let zinOutput;
    let vierdeKarakter;
    let zinUppercase;
    let EtoA;
    let eersteVijf;
    let ePosities;

    // Pak de zin uit het inputveld en controleer of er iets is ingevuld
    zin = document.getElementById("zin").value;
    if (zin == "") {
        alert("Vul een zin in!");
        return;
    }
    // Haal de spaties aan het begin en einde van de zin weg en bereken de lengte
    zin = zin.trim();
    lengte = zin.length;
    zinOutput = `De zin "${zin}" bevat ${lengte} tekens.`;

    // Pak het vierde karakter van de zin
    if (lengte < 4) {
        vierdeKarakter = `De zin is te kort om het vierde karakter te tonen.`;
    }
    else {
        if (zin.charAt(3) == " ") {
            vierdeKarakter = `Het vierde karakter is een spatie.`;
        }
        else {
            vierdeKarakter = `Het vierde is karakter is: "${zin.charAt(3)}".`;
        }
    }

    // Zet de zin in hoofdletters
    zinUppercase = zin.toUpperCase();

    // Vervang alle e's door a's
    if (zin.includes("e")) {
        EtoA = zin.replace(/e/g, "a");
    }
    else {
        EtoA = `Er zitten geen e's in de zin om te vervangen.`;
    }

    // Haal de eerste 5 letters van de zin
    if (lengte < 5) {
        eersteVijf = `De zin is te kort om de eerste 5 letters er af te halen.`;
    }
    else {
        eersteVijf = zin.slice(5);
    }

    // Verzamel alle e's in de zin en print hun positie in de zin
    if (zin.includes("e")) {
        ePosities = `De e's zitten op de volgende posities in de zin: `;
        for (let letter = 0; letter < lengte; letter++) {
            if (zin.charAt(letter) == "e") {
                ePosities += `${letter + 1}, `;
            }
        }
    }
    else {
        ePosities = `Er zitten geen e's in de zin.`;
    }

    // Eerste letter van de zin in hoofdletter
    zinLowerCase = zin.toLowerCase();
    zinLowerCase = zinLowerCase.charAt(0).toUpperCase() + zinLowerCase.slice(1);

    // Pak het element waar de output in moet komen en zet de output erin
    const output = document.getElementById("output");
    output.innerHTML = `
    ${zinOutput}<br>
    ${vierdeKarakter}<br>
    ${zinUppercase}<br>
    ${EtoA}<br>
    ${eersteVijf}<br>
    ${ePosities}<br>
    ${zinLowerCase}
    `;
}