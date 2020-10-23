//1
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//2
if(a > b){
    console.log (a);
}
else if(a < b){
    console.log (b);
}
else{
    console.log("Os números são iguais");
}

//3
let c = 3;
let d = 4;
let e = 6;

if(c > d && c > e){
    console.log (c);
}
else if(d > c && d > e){
    console.log (d);
}
else if(e > d && e > c){
    console.log (e);
}
else{
    console.log("Os numeros são iguais");
}

//4
if(a > 0){
    console.log(true);
}
else if(a < 0){
    console.log(false);
}
else{
    console.log(0);
}

//5
if(a + b + c == 180){
    console.log(true);
    return true;
}
else {
    console.log('Ângulos inválidos');
    return false;
}

//6
