function a(){
    console.log('Dit is een melding vanuit functie a');
}
let b = function(){
    console.log('Dit is een melding vanuit functie b');
}
a();
b();

(function(){
    console.log('Dit is een melding vanuit een anonieme functie');
})();