let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
function biggerName(array){
    let bigNam = ""
    let index = 0
    for(let i in array){
        if(array[i].length > bigNam.length){
            bigNam = array[i];
            
        }
    }
    return bigNam;
}

console.log (biggerName(names));