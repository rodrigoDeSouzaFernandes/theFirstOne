let n = 5;
function sum(numbers){
    let result = 0
    for(let index = 1; index <= n; index += 1){
        result += index
    }
    return result
}
console.log(sum(n));