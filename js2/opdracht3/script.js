let nummer = parseInt(prompt("Hoe vaak moet ik je feliciteren?"));
// Check of het een nummers is
if (isNaN(nummer)) {
    alert("Dat is geen getal!");
    window.location.reload();
}
// Als het een nummer is, feliciteer de persoon i aantal keer 
else {
    let i = 0;
    while ( i < nummer) {
        document.write(`Ik feliciteer je ${i + 1} keer! <br>`);
        i++;
    }
}