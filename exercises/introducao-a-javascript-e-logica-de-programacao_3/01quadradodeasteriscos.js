let n = 7
let quadradoAsteriscos = ""
for(let line = 1; line <= n; line += 1){
    for(let col = 1; col <= n; col += 1){
        quadradoAsteriscos += " *";
        
    } 
    console.log(quadradoAsteriscos);
    quadradoAsteriscos = ""
}
