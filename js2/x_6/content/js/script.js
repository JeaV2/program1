// Maak array voor de getallen
let getallen = [];
function bereken() {
    // Haal het getal op uit het invoerveld
    let getal = parseInt(document.getElementById("getal").value);
    let output = document.getElementById("output");
    // Maak de output leeg
    output.innerHTML = "";
    // Als het geen getal is, geef een foutmelding
    if(isNaN(getal)) {
        window.alert("Voer een geldig getal in!");
        return;
    }
    else{
        // Voeg het getal toe aan de array
        getallen.push(getal);
        console.log(getallen);
        // Hoogste getal
        let max = Math.max.apply(null, getallen);
        // Laagste getal
        let min = Math.min.apply(null, getallen);
        // Bereken het gemiddelde
        let totaal = 0;
        for(let i = 0; i < getallen.length; i++) {
            totaal += getallen[i];
        }


        // Voeg de getallen en berekeningen toe aan de output
        output.innerHTML = `
        Er zijn ${getallen.length} getallen ingevoerd.<br>
        Het hoogste getal is: ${max} <br>
        Het laagste getal is: ${min} <br>
        Het gemiddelde is: ${totaal / getallen.length} <br>
        `;
    }
}