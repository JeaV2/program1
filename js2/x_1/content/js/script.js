function tafelFunction() {
    document.getElementById("tafelResult").innerHTML = "";
    tafel = document.getElementById("tafel").value;
    if (tafel == "" || isNaN(tafel)) {
        alert("Voer een getal in.");
        return;
    }
    for (i = 1; i <= 10; i++) {
        document.getElementById("tafelResult").innerHTML += tafel + " x " + i + " = " + tafel * i + "<br>";
    }
}