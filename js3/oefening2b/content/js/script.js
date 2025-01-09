let globaleVariabele = "Dit is een globale variabele";

function test() {
    let lokaleVariabele = "Dit is een lokale variabele";
}
// console.log(lokaleVariabele); // Dit geeft een error omdat lokaleVariabele enkel binnen de functie test() bestaat
console.log(globaleVariabele);
console.log(lokaleVariabele);