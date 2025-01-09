function bereken(){
    let a =document.getElementById("veld1").value;
    let b =document.getElementById("veld2").value;
    a = parseInt(a);
    b = parseInt(b);
    let c = a + b;
    document.getElementById("uitvoerVeld").value = c;
}