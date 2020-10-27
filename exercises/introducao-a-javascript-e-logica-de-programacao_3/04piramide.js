let n = 9
let pir = ""
for(let line = 1; line <= n - (line-1); line += 1){
    for(let col = 1; col <= (n - (line + (line - 1)))/2; col += 1){
        pir += " ";
        }
    for(let ast = 1; ast <= (line + (line - 1)); ast += 1){
        pir += "*"
    }
   
    console.log(pir)
    pir = ""
}
