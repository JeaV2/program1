// Lijst met symptomen
const symptomen = ["verkoudheid", "keelpijn", "hoesten", "koorts", "kortademigheid", "vermoeidheid", "spierpijn", "hoofdpijn", "misselijkheid", "diarree", "buikpijn"];

// Functie om de gegevens te controleren en verwerken.
function checkGegevens() {
    // Controleer of de velden zijn ingevuld en of de leeftijd een getal is.
    if (
        document.getElementById("naam").value == "" || 
        document.getElementById("leeftijd").value =="" || isNaN(parseInt(document.getElementById("leeftijd").value)) ||
        document.getElementById("symptoom1") == "" ||
        document.getElementById("symptoom2") == "" ||
        document.getElementById("symptoom3") == ""
    ) {
        alert("Een of meerdere velden zijn niet correct ingevuld.");
        // Gegevens verzamelen en vergelijken met de lijst van symptomen.
    } else {
        let naam = document.getElementById("naam").value;
        let leeftijd = document.getElementById("leeftijd").value;
        let symptoom1 = document.getElementById("symptoom1").value;
        let symptoom2 = document.getElementById("symptoom2").value;
        let symptoom3 = document.getElementById("symptoom3").value;
        // Symptomen omzetten naar kleine letters.
        symptoom1 = symptoom1.toLowerCase();
        symptoom2 = symptoom2.toLowerCase();
        symptoom3 = symptoom3.toLowerCase();
        // Lijst met ingevulde symptomen maken en controleren of de ingevulde symptomen in de lijst staan.
        let symptomenLijst = [symptoom1, symptoom2, symptoom3];
        let symptomenCheck = symptomenLijst.filter(value => symptomen.includes(value));
        // Controleren of de persoon contact moet opnemen met de huisarts,
        // en de overeenkomende symptomen in hoofdletters weergeven.
        if (leeftijd <= 18 && symptomenCheck.length >= 3) {
            let symptomenUpperCase = symptomenCheck.map(value => value.toUpperCase()).join(", ");
            document.getElementById("resultaat").innerHTML = `${naam} je hebt 3 of meer symptomen, neem contact op met jouw huisarts.<br>Symptomen: ${symptomenUpperCase}`;
        } else if (leeftijd > 18 && symptomenCheck.length >= 2) {
            let symptomenUpperCase = symptomenCheck.map(value => value.toUpperCase()).join(", ");
            document.getElementById("resultaat").innerHTML = `${naam} je hebt 2 of meer symptomen, neem contact op met jouw huisarts.<br>Symptomen: ${symptomenUpperCase}`;
        } else {
            document.getElementById("resultaat").innerHTML = `${naam} je hebt niet genoeg symptomen, blijf thuis en ziek uit.`;
        }
    }
}