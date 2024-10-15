// Functie om de gegevens te controleren en verwerken.
function checkGegevens() {
    // Controleer of de velden zijn ingevuld en of de leeftijd een getal is.
    if (
        document.getElementById("naam").value == "" || 
        document.getElementById("leeftijd").value =="" || isNaN(parseInt(document.getElementById("leeftijd").value))
    ) {
        alert("Een of meerdere velden zijn niet correct ingevuld.");
        // Gegevens verzamelen en vergelijken met de lijst van symptomen.
    } 
    else {
        let naam = document.getElementById("naam").value;
        let leeftijd = document.getElementById("leeftijd").value;
        let hoofdpijn = document.getElementById('hoofdpijn').checked;
        let buikpijn = document.getElementById("buikpijn").checked;
        let keelpijn = document.getElementById("keelpijn").checked;
        let hoesten = document.getElementById("hoesten").checked;
        let koorts = document.getElementById("koorts").checked;

        let aantalSymptomen = 0;

        if (hoofdpijn == true) {
            aantalSymptomen++;
        }
        if (buikpijn == true) {
            aantalSymptomen++;
        }
        if (keelpijn == true) {
            aantalSymptomen++;
        }
        if (hoesten == true) {
            aantalSymptomen++;
        }
        if (koorts == true) {
            aantalSymptomen++;
        }
        // Controleren of de persoon contact moet opnemen met de huisarts,
        // en de overeenkomende symptomen in hoofdletters weergeven.
        const resultaat = document.getElementById("resultaat");
        const lijst = document.getElementById('lijst');
        lijst.innerHTML = "";

        if (leeftijd <= 18 && aantalSymptomen >= 3) {
            resultaat.innerHTML = `${naam} je hebt ${aantalSymptomen} symptomen, neem contact op met jouw huisarts.<br>Symptomen:`;
            if (hoofdpijn == true) {
                let li = document.createElement('li');
                li.innerText = "HOOFDPIJN";
                lijst.appendChild(li);
            }
            if (buikpijn == true) {
                let li = document.createElement('li');
                li.innerText = "BUIKPIJN";
                lijst.appendChild(li);
            }
            if (keelpijn == true) {
                let li = document.createElement('li');
                li.innerText = "KEELPIJN";
                lijst.appendChild(li);
            }
            if (hoesten == true) {
                let li = document.createElement('li');
                li.innerText = "HOESTEN";
                lijst.appendChild(li);
            }
            if (koorts == true) {
                let li = document.createElement('li');
                li.innerText = "KOORTS";
                lijst.appendChild(li);
            }
        } 
        else if (leeftijd > 18 && aantalSymptomen >= 2) {
            document.getElementById("resultaat").innerHTML = `${naam} je hebt ${aantalSymptomen} symptomen, neem contact op met jouw huisarts.<br>Symptomen:`;
            if (hoofdpijn == true) {
                let li = document.createElement('li');
                li.innerText = "HOOFDPIJN";
                lijst.appendChild(li);
            }
            if (buikpijn == true) {
                let li = document.createElement('li');
                li.innerText = "BUIKPIJN";
                lijst.appendChild(li);
            }
            if (keelpijn == true) {
                let li = document.createElement('li');
                li.innerText = "KEELPIJN";
                lijst.appendChild(li);
            }
            if (hoesten == true) {
                let li = document.createElement('li');
                li.innerText = "HOESTEN";
                lijst.appendChild(li);
            }
            if (koorts == true) {
                let li = document.createElement('li');
                li.innerText = "KOORTS";
                lijst.appendChild(li);
            }
        } 
        else {
            document.getElementById("resultaat").innerHTML = `${naam} je hebt niet genoeg symptomen, blijf thuis en ziek uit.`;
        }
    }
}