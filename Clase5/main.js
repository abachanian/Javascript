let amigos = ["Juan", "Pepe", "Luis", "Ana", "Maria"];

let frutas = ["Manzana", "Banana", "Pera", "Uva", "Naranja"];

//!Acceder a los elementos de un array
console.log(amigos[0]); // Juan
console.log(amigos[1]); // Pepe
console.log(amigos[2]); // Luis

//!Modificar un elemento de un array
amigos[0] = "Pedro";
console.log(amigos[0]); // Pedro

//!Agregar un elemento a un array
frutas[5] = "Sandia";
console.log(frutas[5]); // Sandia

//!Otra forma de agregar un elemento a un array
frutas.push("Kiwi");
console.log(frutas[6]); // Kiwi

//!pop elimina el último elemento de un array
let eliminado = frutas.pop();
console.log(eliminado); // Kiwi
console.log(frutas);

//!unshift agrega un elemento al principio de un array
frutas.unshift("Kiwi");
console.log(frutas); // Kiwi

//!shift elimina el primer elemento de un array
let eliminado2 = frutas.shift();
console.log(eliminado2); // Kiwi
console.log(frutas);


//?Ejercicio: gestiona una lista de tareas
let tareas = ["Estudiar Javastript", "hacer ejercicio", "llamar al trabajo"];

//Agregar una tarea
tareas.push("comprar pan");
console.log(tareas);

//Eliminar una tarea
let tareaEliminada = tareas.pop();
console.log(tareaEliminada);

//agrego una tarea al principio
tareas.unshift("comprar leche");
console.log(tareas);

//elimino la primera tarea
let eliminarPrimeraTarea = tareas.shift();
console.log(eliminarPrimeraTarea);