// Functie word geroepen wanneer de knop word ingedrukt
function bereken() {
    let totaal = 330
    if (
        // Check of de velden leeg zijn of geen getal bevatten
        document.getElementById("algemeneZaken").value == "" || isNaN(document.getElementById("algemeneZaken").value) || document.getElementById("algemeneZaken").value < 0 ||
        document.getElementById("asiel").value == "" || isNaN(document.getElementById("asiel").value) || document.getElementById("algemeneZaken").value < 0 ||
        document.getElementById("binnenlandseZaken").value == "" || isNaN(document.getElementById("binnenlandseZaken").value) || document.getElementById("algemeneZaken").value < 0 ||
        document.getElementById("buitenlandseZaken").value == "" || isNaN(document.getElementById("buitenlandseZaken").value) || document.getElementById("algemeneZaken").value < 0 ||
        document.getElementById("defensie").value == "" || isNaN(document.getElementById("defensie").value) || document.getElementById("algemeneZaken").value < 0 ||
        document.getElementById("economischeZaken").value == "" || isNaN(document.getElementById("economischeZaken").value) || document.getElementById("algemeneZaken").value < 0 ||
        document.getElementById("financien").value == "" || isNaN(document.getElementById("financien").value) || document.getElementById("algemeneZaken").value < 0 ||
        document.getElementById("infrastructuur").value == "" || isNaN(document.getElementById("infrastructuur").value) || document.getElementById("algemeneZaken").value < 0 ||
        document.getElementById("klimaat").value == "" || isNaN(document.getElementById("klimaat").value) || document.getElementById("algemeneZaken").value < 0 ||
        document.getElementById("landbouw").value == "" || isNaN(document.getElementById("landbouw").value) || document.getElementById("algemeneZaken").value < 0 ||
        document.getElementById("onderwijs").value == "" || isNaN(document.getElementById("onderwijs").value) || document.getElementById("algemeneZaken").value < 0 ||
        document.getElementById("socialeZaken").value == "" || isNaN(document.getElementById("socialeZaken").value) || document.getElementById("algemeneZaken").value < 0 ||
        document.getElementById("justitie").value == "" || isNaN(document.getElementById("justitie").value) || document.getElementById("algemeneZaken").value < 0 ||
        document.getElementById("volkshuisvesting").value == "" || isNaN(document.getElementById("volkshuisvesting").value) || document.getElementById("algemeneZaken").value < 0 ||
        document.getElementById("volksgezondheid").value == "" || isNaN(document.getElementById("volksgezondheid").value) || document.getElementById("algemeneZaken").value < 0
    ) {
        alert("Een of meerdere velden zijn niet correct ingevuld.")
    } else {
        // Verzamelt de waardes van de velden en trekt deze van het totaal af.
        const algemeneZaken = document.getElementById("algemeneZaken").value
        const asiel = document.getElementById("asiel").value
        const binnenlandseZaken = document.getElementById("binnenlandseZaken").value
        const buitenlandseZaken = document.getElementById("buitenlandseZaken").value
        const defensie = document.getElementById("defensie").value
        const economischeZaken = document.getElementById("economischeZaken").value
        const financien = document.getElementById("financien").value
        const infrastructuur = document.getElementById("infrastructuur").value
        const klimaat = document.getElementById("klimaat").value
        const landbouw = document.getElementById("landbouw").value
        const onderwijs = document.getElementById("onderwijs").value
        const socialeZaken = document.getElementById("socialeZaken").value
        const justitie = document.getElementById("justitie").value
        const volkshuisvesting = document.getElementById("volkshuisvesting").value
        const volksgezondheid = document.getElementById("volksgezondheid").value

        let totaalBudget = parseInt(algemeneZaken) + parseInt(asiel) + parseInt(binnenlandseZaken) + parseInt(buitenlandseZaken) + parseInt(defensie) + parseInt(economischeZaken) + parseInt(financien) + parseInt(infrastructuur) + parseInt(klimaat) + parseInt(landbouw) + parseInt(onderwijs) + parseInt(socialeZaken) + parseInt(justitie) + parseInt(volkshuisvesting) + parseInt(volksgezondheid)
        totaal = totaal - totaalBudget
        document.getElementById("resultaat").innerHTML = `Je hebt nog €${totaal} miljard over.`
    }
}