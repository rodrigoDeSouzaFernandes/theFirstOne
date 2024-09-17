let n = 9
let pir = ""
if(n % 2 == 0){
    console.log("n deve ser um número ímpar")}
    else{

for(let line = 1; line <= n - (line-1); line += 1){
    for(let col = 1; col <= (n - (line + (line - 1)))/2; col += 1){
        pir += " ";
        }
    if(line == ((n -1)/2)+1){
        for(let ast = 1; ast <= n; ast += 1){
        pir += "*"}
    
    }
        else if(line != n){
        pir += "*"
    }
    if(line == 1){}
    else if(line == (((n-1)/2)+1)){}
    else if(line != n){
        for(let spc = 1; spc <= (line +(line -1))-2; spc += 1){
            pir += " "
        }
    }
    if(line == 1){}
    else if(line == (((n-1)/2)+1)){}
    else{
        pir += "*"
    }
   
    console.log(pir)
    pir = ""
}
    }