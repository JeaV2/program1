function bereken() {
    // Variabelen definiëren
    let merk = document.getElementById("merk").value;
    let type = document.getElementById("type").value;
    let verbruik = parseFloat(document.getElementById("verbruik").value);
    let bereik = parseFloat(document.getElementById("bereik").value);
    let afstand = parseFloat(document.getElementById("afstand").value);
    let resultaat = document.getElementById("resultaat");
    let snelheid = document.getElementById("snelheid").value;

    // Controleer of de velden correct zijn ingevuld
    if (
        merk === "" || type === "" || 
        isNaN(verbruik) || isNaN(bereik) || isNaN(afstand) || isNaN(snelheid)
    ) {
        alert("Vul alle velden goed in!");
        return;
    } else if (verbruik <= 0 || bereik <= 0 || afstand <= 0) {
        alert("De waarden moeten groter zijn dan 0!");
        return;
    // Bereken het brandstofverbruik
    } else if ( snelheid <= 0 || snelheid > 120) {
        alert("De snelheid moet tussen 0 en 120 km/u liggen!");
        return;

    } else {
        let berekeningLiters = (afstand / bereik) * verbruik;
        let berekeningDuur = afstand / snelheid;
        resultaat.innerHTML = `
        ${berekeningLiters.toFixed(2)} liter brandstof nodig voor ${afstand} km. <br>
        En je doet er ongeveer ${berekeningDuur.toFixed(0)} uur over.
        `;
    }
}