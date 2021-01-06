
//! Valor de propagacion

let team1 = ['Vic', 'Madeleyne', 'Kaylee'];
let team2 = ['Andrea', 'Elizabeth', 'Georgina'];

let education = ['Carolina', ...team1, ...team2];

console.log(education);

//! Promesas

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('¡Hey! Funciona :)')
    } else {
      reject('¡Ups!')
    }
  })
}

helloPromise()
  .then(response => console.log(response))
  .then( () => console.log('then de prueba'))
  .catch(error => console.log(error))

//! Clases en JS

class calculator {
  constructor() {
    this.valorA = 0;
    this.valorB = 0;
  }

  //* Metodo
  sum (valorA, valorB) {
    this.valorA = valorA
    this.valorB = valorB
    return this.valorA + this.valorB  
  }
}

//* Ejecutar la clase

const calc = new calculator();
console.log(calc.sum(5,5));

//! Importar

import { hello } from './module';

hello();

//! Generator

function* helloWorld() {
  if (true) {
    yield 'Hello'
  }

  if (true) {
    yield 'World'
  }
}

//* next ejecuta cada proceso y cuando termina y ejecuta otro, recuerda donde se a quedado para seguir
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

const a