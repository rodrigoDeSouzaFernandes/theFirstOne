const fs = require('fs');

const findCharacter = (characterId) => {

  const id = `${characterId}`
  const promise = new Promise((resolve, reject) => {
    fs.readFile('simpsons.json', ((err, content) => {
      if(err)reject(err);
      
      const data = JSON.parse(content);
      
      if(!data.some(elem => elem.id === id))reject("id não encontrado")

      resolve(data.find(elem => elem.id === id))
    }));
  });

  return promise
}

findCharacter(1)
.then(data => console.log(data))
.catch(err => console.log(err))