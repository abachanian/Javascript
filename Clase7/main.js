//OBjetos en JavaScript 
let persona = {
    nombre: "Alejandro",
    apellido: "Bachanian",
    edad: 31,
    ciudad: "Buenos Aires",
    profesion: "Desarrollador"
};

//Accedo a las propiedades del objeto, usando la notación de punto
console.log(persona);
console.log(persona.nombre);

//Accedo a las propiedades del objeto, usando la notación de corchetes
console.log(persona["nombre"]);

//la diferencia entre acceder a las propiedades de un objeto con la notación de punto y la notación de corchetes, es que con la notación de corchetes puedo acceder a las propiedades de un objeto de manera dinámica, es decir, puedo acceder a las propiedades de un objeto, cuyo nombre de propiedad lo tengo almacenado en una variable
let propiedad = "nombre";
console.log(persona[propiedad]);    //Alejandro

//Modificar propiedades de un objeto
persona.nombre = "Juan";
console.log(persona);

//Agregar propiedades a un objeto
persona.pais = "Argentina";
persona.direccion = "Calle Falsa 123";
console.log(persona.pais);
console.log(persona.direccion);

//Eliminar propiedades de un objeto
delete persona.direccion;

//Métodos en un objeto
persona.saludar = function(){
    return "Hola, mi nombre es " + this.nombre + " " + this.apellido;
};
console.log(persona.saludar());

//Objetos anidados
let estudiantes = {
    nombre: "Alejandro",
    apellido: "Bachanian",
    edad: 31,
    cursos: {
        programacion: "JavaScript",
        diseño: "Photoshop",
        matematica: "Algebra"
    }
};

//Acceder a las propiedades de un objeto anidado
console.log(estudiantes.cursos.programacion);   //JavaScript
console.log(estudiantes.cursos.diseño);          //Photoshop
console.log(estudiantes.cursos.programacion);   //JavaScript
console.log(estudiantes.cursos.diseño);          //Photoshop


//? Ejercicio
let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2021,
    encendido: false,
    encender: function(){
        this.encendido = true;
        console.log("El auto está encendido");
    },
    apagar: function(){
        this.encendido = false;
        console.log("El auto está apagado");
    },
    estado: function(){
        return this.encendido ? "El auto está encendido" : "El auto está apagado";
    }
};

console.log(auto.marca);
auto.encender();
console.log(auto.estado());
auto.apagar();
console.log(auto.estado());
