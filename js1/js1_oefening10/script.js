let datum = new Date();
let minuut = datum.getMinutes();
// console.log(minuut);

document.addEventListener('DOMContentLoaded', function() {  
    if (minuut < 15) {
        document.getElementById("kwartier").innerHTML = "Het is het eerste kwartier";
    } else if (minuut < 30) {
        document.getElementById("kwartier").innerHTML = "Het is het tweede kwartier";
    } else if (minuut < 45) {
        document.getElementById("kwartier").innerHTML = "Het is het derde kwartier";
    } else {
        document.getElementById("kwartier").innerHTML = "Het is het vierde kwartier";
    }
});