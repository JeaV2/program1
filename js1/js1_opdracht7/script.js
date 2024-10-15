// Vraagt om de lentge, breedte en hoogte en berekent de inhoud.
document.addEventListener('DOMContentLoaded', function() {
    let lengte = window.prompt("wat is de lengte?");
    let breedte = window.prompt("wat is de breedte?");
    let hoogte = window.prompt("wat is de hoogte?");
    let inhoud = lengte * breedte * hoogte;
    document.getElementById("inhoud").innerHTML = inhoud;
});