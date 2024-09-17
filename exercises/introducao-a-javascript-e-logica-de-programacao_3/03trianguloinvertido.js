let n = 7
let tri = ""
for(let line = 1; line <= n; line += 1){
    for(let col = 1; col <= n - line; col += 1){
        tri += " ";
        
    } 
    for(let ast = 1; ast <= line; ast += 1){
        tri += "*"
    }
    console.log(tri);
    tri = ""
}