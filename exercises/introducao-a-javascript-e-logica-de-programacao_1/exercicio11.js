let salarioBruto = 3500;
let inss;
let ir;



//INSS
if (salarioBruto <= 1556.94 ) {
    inss = 8/100*salarioBruto;
}
else if(salarioBruto <= 2594.92){
    inss = 9/100*salarioBruto;
}
else if (salarioBruto <= 5189.82) {
    inss = 11/100*salarioBruto;
}
else {
    inss = 570.88;
}
let salarioBaseIr = salarioBruto - inss;

//IR
if (salarioBaseIr <= 1903.98) {
    ir = 0
}
else if(salarioBaseIr <= 2826.65){
    ir = (7.5/100*salarioBaseIr) - 142.80
}
else if(salarioBaseIr <= 3751.05){
    ir = (15/100*salarioBaseIr) - 354.80
}
else if(salarioBaseIr <= 4664.68){
    ir = (22.5/100*salarioBaseIr) - 636.13
}
else{
    ir = (27.5/100*salarioBaseIr) - 869.36
}
let salarioLiquido = salarioBruto - inss - ir;
console.log(salarioLiquido)