//? fuciones
//* Declaración de funciones (declarativas y expresivas)
//!Función declarativa
function sumar (a,b) {
    return a + b;
}
console.log(sumar(1,2));

//!Función expresiva
let restar = function (a,b) {
    return a - b;
}
console.log(restar(1,2));

//! Parámetros, argumentos y return
function multiplicar (a,b) {
    return a * b;
}
let resultado = multiplicar(2,3);
console.log(resultado);

//!Función sin return
function saludar (nombre) {
    console.log('Hola ' + nombre);
}
saludar('Juan');

//!función con multiples parametros
function dividir (a,b) {
    if (b === 0) {
        return 'No se puede dividir por 0';
    } else {
        return a / b;
    }
}

console.log(dividir(10,2));
console.log(dividir(10,0));

//! parametros con valores predeterminados
function saludarConPredeterminado (nombre = 'Usuario') {
    console.log('Hola ' + nombre);
}
saludarConPredeterminado();


//!scope de funciones (alcance de una variable)
function miFuncion () {
    let mensaje = 'Hola';
    console.log(mensaje);
}
miFuncion();

//console.log(mensaje);

//! scope global y local
let nombre = "Alejandro";

function cambiarNombre () {
    let nombre = "Juan";
    console.log(nombre);
}
cambiarNombre()
console.log(nombre);