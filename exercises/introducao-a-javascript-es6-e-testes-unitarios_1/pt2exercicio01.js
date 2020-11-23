const fatorial = n => {
    let resultado = 1;
    for (let i = 1; i <= n; i += 1){
        resultado = resultado * i;
    }
    console.log(resultado)
}

fatorial(4);
fatorial(5);
fatorial(4);