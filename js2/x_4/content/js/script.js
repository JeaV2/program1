// Definieer 
const maanden = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
const dagen = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];
let dagdeel;

function datum () {
    let vandaag = new Date();
    let dag = dagen[vandaag.getDay() - 1];
    let datum = vandaag.getDate();
    let maand = maanden[vandaag.getMonth()];
    let jaar = vandaag.getFullYear();

    document.getElementById('datumOutput').innerHTML = `Het is vandaag ${dag}, ${datum} ${maand} ${jaar}`;
}

function tijd () {
    let vandaag = new Date();
    let uren = vandaag.getHours();
    let minuten = vandaag.getMinutes();
    if (uren >= 6 && uren < 12) {
        dagdeel = 'Goedemorgen!';
    } else if (uren >= 12 && uren < 18) {
        dagdeel = 'Goedemiddag!';
    } else if (uren >= 18 && uren < 24) {
        dagdeel = 'Goedenavond!';
    } else {
        dagdeel = 'Goedenacht!';
    }

    document.getElementById('tijdOutput').innerHTML = `De tijd is ${uren}:${minuten}<br>${dagdeel}`;
}