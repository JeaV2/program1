document.addEventListener('DOMContentLoaded', function() {
    // variabelen aanmaken
    let output = document.getElementById('output');
    let ruimtePerLeerling = 3;
    let aantalLeerlingen = document.getElementById('aantalLeerlingen');

    // berekenen van de oppervlakte per leerling
    aantalLeerlingen.oninput = function() {
        document.getElementById("aantalLeerlingenLive").innerHTML = this.value;
        let oppervlakte = ruimtePerLeerling * aantalLeerlingen.value;
        if (oppervlakte <= 50) {
            output.innerHTML = `Dat is wel lekker de ruimte!`;
        }
        else if (oppervlakte > 50 && oppervlakte <= 80) {
            output.innerHTML = `Verspreid iedereen over het lokaal dan is het prima te doen!`;
        }
        else if (oppervlakte > 80) {
            output.innerHTML = `Dat is wel druk, houd een beetje afstand!`;
        }
        // datum en tijd toevoegen
        let datum = new Date();
        console.log(datum);
        let outputDatum = document.getElementById('datum');
        datumOutput = `Het is vandaag ${datum.getDate()}-${datum.getMonth()}-${datum.getFullYear()}`;
        tijd = `U heeft antwoord gegeven om ${datum.getHours()}:${datum.getMinutes()}`;
        outputDatum.innerHTML = `
        ${datumOutput} <br>
        ${tijd}
        `;
    };
});
