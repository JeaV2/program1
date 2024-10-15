kleuren = ["#1e81b0","#ae4494","#fa76a1","#c3a740","#2f45ae","#7b8a06","#0c8db6","#9a03bf","#086e2c","#d70d1c"];

let counter = 0;
document.addEventListener("DOMContentLoaded", function() {
    box = document.getElementById("box");
    box.style.backgroundColor = kleuren[counter];
    counter++;
});

function kleur() {
    box.style.backgroundColor = kleuren[counter];
    counter++;
    if (counter == kleuren.length) {
        counter = 0;
    }
}
