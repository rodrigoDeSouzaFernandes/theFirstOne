let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;

for(index = 0; index < numbers.length; index++){
    somaNumbers = somaNumbers + numbers[index];
}
if(somaNumbers/numbers.length > 20){
    console.log("Valor maior que 20");
}
else{
    console.log("Valor menor ou igual a 20");
}
