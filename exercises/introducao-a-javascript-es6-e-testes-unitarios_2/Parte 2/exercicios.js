const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  //    1
  const addMorning = (obj, key, value) => {
    const newKey = key
    const valor = value
    obj[newKey] = valor;
  }
  addMorning(lesson2, 'turno', 'manhã');
  console.log(lesson2);

  //    2
  const listAllKeys = (obj) => Object.keys(obj);
  console.log(listAllKeys(lesson2));

  //    3
  const objectLength = (obj) => Object.keys(obj).length;
  console.log(objectLength(lesson2));

  //    4
  const objectValues = (obj) => Object.values(obj);
  console.log(objectValues(lesson2));

