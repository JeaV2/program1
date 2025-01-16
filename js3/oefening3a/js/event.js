function knopKlik() {
    console.log('Joepie! Je hebt op de knop gedrukt');
}

function tekstveldFocus() {
    document.getElementById('textfield').style.backgroundColor = 'yellow'
}

function plaatjeDubbelklik() {
    document.getElementById('uitvoerveld').innerHTML='antwoord: Zelda';
}

function plaatjeHover() {
    document.getElementById('zelda').style.border = '5px solid red';
}

function plaatjeHoverEnd() {
    document.getElementById('zelda').style.border = 'none';
}

function keyPress(){
    console.log('Je hebt een toets ingedrukt');
    console.log(event.key);

}