let n = 7;
let answer = 0
for(let num = 1; num <= n; num += 1){
    if(n%num === 0){
        answer += 1
    }
}
console.log(`Numero de divisores: ${answer}`)
if (answer === 2){
    console.log("Este número é primo!")
}
else{
        console.log("Este número não é um primo!")
    }
