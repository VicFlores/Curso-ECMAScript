//? es7, salio en junio de 2016

//! includes

//* Trabaja sobre arrays o strings, validando si existe el valor que se le indique

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

if (numbers.includes(14)) {
  console.log('Si se encuentra el valor 4');
} else {
  console.log('No se cuentra :(');
}


//! ** (nueva forma de elevar un potencia)

let base = 5;
let exponent = 2;
let result = base ** exponent

console.log(result);