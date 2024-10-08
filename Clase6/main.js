//*Métodos avanzados de arrays
//?forEach()
let numeros = [1, 2, 3, 4, 5];

//?Uso foreach para recorrer el array
numeros.forEach(function(numero){
    console.log('Número: ', numero)
})

//?map()

let numerosMap = [1, 2, 3, 4, 5];

let numerosDuplicado = numeros.map(function(numero) {
    return numero *2;
});
console.log(numerosDuplicado);


//Otro ejemplo
function duplicarValores(array) {
    return array.map(function(numero) {
        return numero * 2;
    });
}

// Ejemplo de uso
let numerosOriginales = [1, 2, 3, 4, 5];
let numerosDuplicados = duplicarValores(numerosOriginales);
console.log(numerosDuplicados);

//?Filter()
let numerosFilter = [1, 2, 3, 4, 5];

let numerosMayores = numeros.filter(function(numero){
    return numero > 3;
});

console.log(numerosMayores);

//?reduce()
let numerosReduce = [1, 2, 3, 4, 5];

let numerosReducidos = numeros.reduce(function(acumulador,numero){
    return acumulador + numero;
},10);//inicio el acumulador en 10.

console.log(numerosReducidos);


//! EJERCICIO CON map, filter y reduce
//? Busco los mayores de 18 años
let edades = [18, 25, 30, 16, 21, 35, 40];

let mayoresA18 = edades.filter(function(edad){
    return edad > 18;
});
console.log(mayoresA18);

//? map para calcular el doble de las edades
let dobleEdad = edades.map(function(edad){
    return edad *2;
});
console.log(dobleEdad);

//? Uso reduce para sumar todas las edades
let acumuladoEdades = edades.reduce(function(acumulador, edad){
    return acumulador + edad;
});
console.log(acumuladoEdades);
