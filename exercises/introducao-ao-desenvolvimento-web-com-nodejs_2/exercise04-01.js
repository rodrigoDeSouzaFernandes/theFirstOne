const fs = require('fs');

const printCharacter = () => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile('simpsons.json', (err, content) => {
      if(err)reject(err);
      const result = JSON.parse(content);

      result.forEach(({id, name}) => console.log(`${id} - ${name}`))
      
      resolve(result);
    });
  });
  return promise;  
}

printCharacter()
