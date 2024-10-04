//? Declaración de variables
var nombreVar = "Alejandro";
let nombreLet = "Juan";
const nombreConst = "Pedro";

//? imprimo variables
console.log(nombreVar);
console.log(nombreLet);
console.log(nombreConst);

//? Diferencias entre var, let y const
//Ejemplo de scope con var
if (true) {
  var x = 10;
  console.log(nombreVar);
}
console.log(x);//como es global, lo podes ejecutar afuera

//Ejemplo de scope con let
if (true) {
  let y = 20;
  console.log(y);
}
//console.log(y);//no la toma porque el scope es diferente, la debería ejecutar dentro del if.

//Ejemplo de scope con const
const z = 30;
//z = 40;
console.log(z);//no se puede reasignar un valor a una constante, por eso da error.

//*--------------------------------------------------------------------------------------------
//? Tipos de datos en JavaScript

// Primitivos
let cadena = "Hola Mundo"; //String
let numero = 10; //Number
let booleano = true; //Boolean
let indefinido = undefined; //Undefined
let nulo = null; //Null

console.log(cadena);
console.log(numero);
console.log(booleano);
console.log(indefinido);
console.log(nulo);

//Objetos

let persona = {
    nombre: "Alejandro",
    edad: 31,
    ciudad: "Buenos Aires"
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);

//? Operadores y Operaciones con tipos de datos
//? Operadores con numeros
let a = 10;
let b = "5";
let c = 3;

let suma = (a + b);
console.log(suma);//el tema acá es que lo "suma" concatenando

//booleano
console.log(a + booleano);//el booleano se convierte en 1 si es true y 0 si es false

//! NaN = Not a Number
let resultado = "hola" * 3;
//log(resultado);//esto da NaN

//Precisión de punto flotante
let resultado2 = 0.1 + 0.2;
console.log(resultado2);//esto da 0.30000000000000004
console.log(resultado2.toFixed(1));//esto da 0.3

//concatenación de string
let saludo = "Hola";
let saludo2 = "Mundo";

let resultado3 = saludo + " " + saludo2;
console.log(resultado3);
