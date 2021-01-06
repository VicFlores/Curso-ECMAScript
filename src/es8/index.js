//? es8, lanzada en junio de 2017

//! Object.entries()

//* Devolver los valores en una matriz

const data = {
  frontend : 'Vic',
  backend: 'Madeleyne',
  design: 'Kaylee',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


//! Object.values()

//* Devolver los valores de un objeto a un arreglo

const data = {
  frontend : 'Vic',
  backend: 'Madeleyne',
  design: 'Kaylee',
}

const values = Object.values(data)
console.log(values);
console.log(values.length);

//! padStart()

//* Añade un valor al principio

//! padEnd

//* Añade un valor al final

const  string = 'Hello';
console.log(string.padStart(8, 'Vic'));
console.log(string.padEnd(8, 'Vic'));

//* Primer parametro, define la cantidad maxima de caracteres
//* Segundo parametro, recibe cuales son los valores de esa cantidad maxima que añadi

//! Trailing-Comas

//* Define y evita errores, dando a entender que puede seguir añadiendo elemetos o no

const person = {
  name: 'Kaylee', 
  lastName: 'Maria',
}

//! Async await

//* Ejemplo 1
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true) 
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test error'))
  })
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

//* Ejemplo 2

const anotherFunction = async() => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
}

anotherFunction();