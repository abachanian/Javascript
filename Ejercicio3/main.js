//Creo el array de notas
let notas = [10, 18, 5];

//Crep una función que reciba las notas y genere el promedio previo control de las variables.

function promedioNotas(array) {
    //Creo la variable que va a sumar las notas y la del promedio y de iteraciones, ya que si el número no es válido, no lo debería contar para el promedio.
    let suma = 0;
    let iteraciones = 0;
    for (let i = 0; i < array.length; i++) {
        if ((array[i] == 0 || array[i] > 10)) {
            console.log(array[i] + " no es una nota válida");
        } else {
            suma = suma + array[i];
            iteraciones++;
        }
    }
    return suma / iteraciones;
}

//Muestro por consola los resultados
console.log(promedioNotas(notas));