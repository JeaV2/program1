let output = document.getElementById("output");
let een = [];
let twee = [];
let drie = [];
let vier = [];
let vijf = [];
let zes = [];

function dobbelsteen(){
    let aantalWorpen = document.getElementById("aantalWorpen").value;
    for(let i = 0; i < aantalWorpen; i++){
        let worp = Math.floor(Math.random() * 6) + 1;
        if (worp === 1) {
            een.push(worp);
            let aantal = document.getElementById("een")
            aantal.innerHTML = een.length;
            aantal.style.backgroundColor = "red";
            aantal.style.width = `${een.length * 5}px`;
        }
        else if (worp === 2) {
            twee.push(worp);
            let aantal = document.getElementById("twee")
            aantal.innerHTML = twee.length;
            aantal.style.backgroundColor = "red";
            aantal.style.width = `${twee.length * 5}px`;
        }
        else if (worp === 3) {
            drie.push(worp);
            let aantal = document.getElementById("drie")
            aantal.innerHTML = drie.length;
            aantal.style.backgroundColor = "red";
            aantal.style.width = `${drie.length * 5}px`;            
        }
        else if (worp === 4) {
            vier.push(worp);
            let aantal = document.getElementById("vier")
            aantal.innerHTML = vier.length;
            aantal.style.backgroundColor = "red";
            aantal.style.width = `${vier.length * 5}px`            
        }
        else if (worp === 5) {
            vijf.push(worp);
            let aantal = document.getElementById("vijf")
            aantal.innerHTML = vijf.length;
            aantal.style.backgroundColor = "red";
            aantal.style.width = `${vijf.length * 5}px`
        }
        else if (worp === 6) {
            zes.push(worp);
            let aantal = document.getElementById("zes")
            aantal.innerHTML = zes.length;
            aantal.style.backgroundColor = "red";
            aantal.style.width = `${zes.length * 5}px`
        }
    }
}