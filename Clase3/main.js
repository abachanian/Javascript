//*Estructura de control (if, else, switch)
//?Estructura de control if
let edad = 16;
if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

//?Estructura de control switch
let dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("No es un dia valido");
        break;
}

//*Bucles
//?Bucle for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//?Bucle while
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

//?Bucle do while
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);

//!Ejercicio
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pares = 0;
let impares = 0;

//El tema de lenght dice cuantos elementos tiene el array (en este caso 10)
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0)//el tema de % 2 da resto, si el resto da 0 es par
    {
        pares++;
    } else {
        impares++;
    }
}
//el 0 lo suma como número par
console.log(`Pares: ${pares}`);
console.log(`Impares: ${impares}`);
console.log(`Total: ${numeros.length}`);

