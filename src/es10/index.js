//? es10, lanzado en junio de 2019

//! .flat

//* Nos permite devolver una matriz aplanada (va disolviendo cada vez para dejarla de una manera simple)

let array = [1,2,3, [4,5,6, [7,8,9]]];

console.log(array.flat(2)); // el valor que recibe es la profundida que queremos que sea apalnada la matriz

//! .flatMap

//* Nos permite mapear cada elemento, despues pasarle una funcion y aplanarlo segun el resultado

let array = [1,2,3,4,5]

console.log(array.flatMap(value => [value, value * 2]));

//! .trim

//* Nos permite eliminar los espacios en blanco de un string

let hello = '          hello world';

console.log(hello);
console.log(hello.trimStart()); // Para quitar espacios al principio

let hello = 'Hello         ';
console.log(hello);
console.log(hello.trimEnd());

//! try/catch

//* ahora puedes utilizarlo sin necesidad de especificaro como catch(error) 
//* sino directamente usarlo en el scope del catch.

try {
  
} catch {
  console.log(error);
}

//! Object.fromEntries

//* Tranforma un arreglo a un objeto

let entries = [['name', 'Vic'], ['age', 19]]

console.log(Object.fromEntries(entries));

//! permite regresar el descripcion opcional del Symbol

let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);

console.log(symbol.description);
