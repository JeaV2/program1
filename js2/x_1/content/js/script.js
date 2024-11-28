function tafelFunction() {
    // Definieer variabelen
    document.getElementById("tafelResult").innerHTML = "";
    let tafel = document.getElementById("tafel").value;
    // Controleer of de input een getal is
    if (tafel == "" || isNaN(tafel)) {
        alert("Voer een getal in.");
        return;
    }
    // Loop door de tafel en schrijf de resultaten naar de pagina
    for (i = 1; i <= 10; i++) {
        document.getElementById("tafelResult").innerHTML += tafel + " x " + i + " = " + tafel * i + "<br>";
    }
}