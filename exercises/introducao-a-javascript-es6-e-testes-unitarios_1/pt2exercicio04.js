const findX = (string, subistitute) => string.replace('x', subistitute);

console.log(findX('trybe x aqui', 'bebeto'));

//  function 2

let skills = ['javascript', 'css', 'html', 'empatia' , 'auto conhecimento'];

const function2 = (function1, skill) => {
   return `${function1}
    minhas cinco principais habilidades são: 
    ${skill.sort()[0]}
    ${skill.sort()[1]}
    ${skill.sort()[2]}
    ${skill.sort()[3]}
    ${skill.sort()[4]}`
}

console.log(function2(findX('trybe x aqui', 'bebeto'), skills));