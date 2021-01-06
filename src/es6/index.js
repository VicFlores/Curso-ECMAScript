
//? Nota: En junio de cada año sale una nueva version de EcmaScript
//? es6, salio en 2015

//! Asignacion de valores (antes)

function newFuntion (name, age, country) {
  var  name = name || 'Vic'
  var age = age || 19
  var country = country || 'El Salvador'

  console.log(name, age, country);
}

//! Asignacion de valores (ahora)

function newFunction2 (name = 'Vic', age = 19, country = 'El Salvador') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Madeleyne', 21, 'El Salvador');

//! Concatenacion antes

let hello = 'Hello'
let world = 'Ferman'

let epicFhrase = hello + ' ' + world

console.log(epicFhrase)

//! Concatenacion ahora (Template literals);

let epicFhrase2 = `${hello} ${world}`

console.log(epicFhrase2);

//! Multilenia (antes)

let lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit \n' 
+ 'otra frase para demostrar el salto de linea'

//! Multilenia (ahora

let lorem2 = `'Lorem ipsum, dolor sit amet consectetur adipisicing elit 
demotracion de salto de linea`

console.log(lorem);
console.log(lorem2);

//! Acceder a elementos de un objeto (antes)

let person = {
  name: 'Vic',
  lastName: 'Escobar',
  age: 19,
  country: 'El Salvador'
}

console.log(person.name, person.lastName, person.age, person.country);

//! Acceder a elementos de un objeto (ahora, Destructuracion)

let { name, lastName, age, country } = person;

console.log(name, lastName, age, country);

//! Diferencia entre let y var

{
  //* Existe de forma global
  var globalVar = 'var global'
}

{
  //* Solo existe en el scope o bloque de codigo donde fue creada
  let globalLet = 'let global'
  console.log(globalLet);
}

console.log(globalVar);

//! Creacion de objetos (antes)

let name = 'Vic'
let age = 19

obj = { name: name, age: age }

//! Creacion de objetos (ahora)

obj2 = { name, age }

console.log(obj);
console.log(obj2);

//! Funciones (antes)

const names = [
  { name: 'Vic', age: '19' },
  { name: 'Madeleyne', age: '21' }
]

let listOfNames = names.map(function (item) {
  console.log(item.name);
})

//! Funciones (ahora, arrow function)

//* ejemplo 1
let listOfName2 = names.map(item => console.log(item.name))

//* ejemplo 2, cuando recibe parametros

const listOfName3 = (name, age) => {

}

//* ejemplo 3, cuando recibe un solo parametro

const listOfName4 = name => {

}

//* Ejemplo 4, obtiene el valor desde parametros, lo multiplica y lo retorna automaticamente

const square = num => num * num
