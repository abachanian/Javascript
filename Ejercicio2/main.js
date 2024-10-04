//?Creo un array con números del 1 al 20

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17, 18, 19, 20];

//? creo una función que recibe un array y cuenta cuantos números son multiplos de 3 y cuantos no.
let numerosMultiplos = 0;
let numerosNoMultiplos = 0;

function contarMultiplos (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
            numerosMultiplos++;
        } else {
            numerosNoMultiplos++;
        }
    }
}
//Muestro por consola los resultados
console.log(contarMultiplos(numeros));
console.log(numerosMultiplos);
console.log(numerosNoMultiplos);