let custo = 60
let venda = 100
let custoTotal = 120/100*custo

if (custo < 0 || venda < 0){
    console.log("Erro: O valor de entrada não pode ser menor do que zero.")
}
else{
    console.log((venda*1000) - (custoTotal*1000))
}