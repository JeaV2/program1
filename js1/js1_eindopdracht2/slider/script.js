// sliders
let algemeneZaken = document.getElementById("algemeneZaken"); let valueAlgemeneZaken = document.getElementById("valueAlgemeneZaken");
let asiel = document.getElementById("asiel"); let valueAsiel = document.getElementById("valueAsiel");
let binnenlandseZaken = document.getElementById("binnenlandseZaken"); let valueBinnenlandseZaken = document.getElementById("valueBinnenlandseZaken");
let buitenlandseZaken = document.getElementById("buitenlandseZaken"); let valueBuitenlandseZaken = document.getElementById("valueBuitenlandseZaken");
let defensie = document.getElementById("defensie"); let valueDefensie = document.getElementById("valueDefensie");
let economischeZaken = document.getElementById("economischeZaken"); let valueEconomischeZaken = document.getElementById("valueEconomischeZaken");
let financien = document.getElementById("financien"); let valueFinancien = document.getElementById("valueFinancien");
let infrastructuur = document.getElementById("infrastructuur"); let valueInfrastructuur = document.getElementById("valueInfrastructuur");
let klimaat = document.getElementById("klimaat"); let valueKlimaat = document.getElementById("valueKlimaat");
let landbouw = document.getElementById("landbouw"); let valueLandbouw = document.getElementById("valueLandbouw");
let onderwijs = document.getElementById("onderwijs"); let valueOnderwijs = document.getElementById("valueOnderwijs");
let socialeZaken = document.getElementById("socialeZaken"); let valueSocialeZaken = document.getElementById("valueSocialeZaken");
let justitie = document.getElementById("justitie"); let valueJustitie = document.getElementById("valueJustitie");
let volkshuisvesting = document.getElementById("volkshuisvesting"); let valueVolkshuisvesting = document.getElementById("valueVolkshuisvesting");
let volksgezondheid = document.getElementById("volksgezondheid"); let valueVolksgezondheid = document.getElementById("valueVolksgezondheid");

// Value onder de slider
algemeneZaken.oninput = function() {
    valueAlgemeneZaken.innerHTML = this.value;
}
asiel.oninput = function() {
    valueAsiel.innerHTML = this.value;
}
binnenlandseZaken.oninput = function() {
    valueBinnenlandseZaken.innerHTML = this.value;
}
buitenlandseZaken.oninput = function() {
    valueBuitenlandseZaken.innerHTML = this.value;
}
defensie.oninput = function() {
    valueDefensie.innerHTML = this.value;
}
economischeZaken.oninput = function() {
    valueEconomischeZaken.innerHTML = this.value;
}
financien.oninput = function() {
    valueFinancien.innerHTML = this.value;
}
infrastructuur.oninput = function() {
    valueInfrastructuur.innerHTML = this.value;
}
klimaat.oninput = function() {
    valueKlimaat.innerHTML = this.value;
}
landbouw.oninput = function() {
    valueLandbouw.innerHTML = this.value;
}
onderwijs.oninput = function() {
    valueOnderwijs.innerHTML = this.value;
}
socialeZaken.oninput = function() {
    valueSocialeZaken.innerHTML = this.value;
}
justitie.oninput = function() {
    valueJustitie.innerHTML = this.value;
}
volkshuisvesting.oninput = function() {
    valueVolkshuisvesting.innerHTML = this.value;
}
volksgezondheid.oninput = function() {valueVolksgezondheid.innerHTML = this.value;}

function bereken() {
    let resultaat = document.getElementById("resultaat");
    let totaal = 330;
    let overig = totaal - algemeneZaken.value - asiel.value - binnenlandseZaken.value - buitenlandseZaken.value - defensie.value - economischeZaken.value - financien.value - infrastructuur.value - klimaat.value - landbouw.value - onderwijs.value - socialeZaken.value - justitie.value - volkshuisvesting.value - volksgezondheid.value;
    resultaat.innerHTML = `Je hebt nog ${overig} Miljard euro over.`;
}
