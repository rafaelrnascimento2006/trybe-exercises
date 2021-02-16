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

// Exercício 1
const addNewKey = (obj, key, value) => {
  obj[key] = value;
};
addNewKey(lesson2, 'turno', 'manhã');

// Exercício 2
const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson2));

// Exercício 3
const objLength = (obj) =>  Object.keys(obj).length;
console.log(objLength(lesson2));

// Exercício 4
const listValues = (obj) =>  Object.values(obj);
console.log(listValues(lesson2));

// Exercício 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// Exercício 6
const studentsTotal = (obj) => {
  let total = 0;
  for (let key of Object.keys(obj)) {
    total += obj[key].numeroEstudantes;
  }
  return total;
};
console.log(studentsTotal(allLessons));

// Exercício 7
const valueByIndex = (obj,index) => Object.values(obj)[index];
console.log(valueByIndex(lesson2, 3));

// Exercício 8
const verifyPair = (obj, key, value) => {
  let check = false;
  for (let element of Object.entries(obj)) {
    if (element[0] === key && element[1] === value) check = true;
  }
  return check;
};
console.log(verifyPair(lesson2,'turno','manhã'));
