
//? Declaro las variables de mis datos personales

let datosPersonales = {
    nombre: "Alejandro Bachanian",
    edad: 31,
    email: "abachanian@gmail.com"
};

//? Armo una variable con el texto completo que va a contener el div en el html
let textoAMostrar = `
    <p class="font-weight-bold">Nombre y Apellido: <span>${datosPersonales.nombre}</span></p>
    <p class="font-weight-bold">Edad: <span>${datosPersonales.edad}</span></p>
    <p class="font-weight-bold">Email: <span>${datosPersonales.email}</span></p>
`;

//? Selecciono el div del html y le agrego el texto que armé con la info. Para el mismo uso getElementById e innerHTML.
document.getElementById('datos-personales').innerHTML = textoAMostrar;
