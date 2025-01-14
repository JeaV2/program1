// de variable a wordt eerst geretourneerd en daarna pas gedefinieerd, dit geeft een error
let a = 1;
console.log(a);
console.log(foo());

function foo(){
    return 2;
}