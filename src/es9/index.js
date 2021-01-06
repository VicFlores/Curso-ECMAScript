//? es9, lanzada en junio de 2018

//! ...all (operador de reposo)

//* Funciona para separar los elementos de un objeto

const obj = {
  name: 'Vic',
  lastName: 'Flores',
  age: 19
};

//* Ejemplo 1 

let { name, ...all } = obj;

console.log(name, all);

//* Ejemplo 2

let { age, ...all } = obj;

console.log(all);

//! Operador de propagacion para unir dos objetos

const obj = {
  name: 'Vic',
  lastName: 'Flores',
  age: 19
};

const obj2 = {
  ...obj,
  age: 19
};

console.log(obj2);

//! .finally

//* Nos permite saber cuando nuestra promesa a acabado

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally( () => console.log('Finalizo'))


//! mejora de regex

//* Como agrupar bloques del regex y poder acceder a ellos

const regextData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regextData.exec('2020-11-16');

const  year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);