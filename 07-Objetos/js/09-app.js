"use strict";

const producto = {
    nombre: 'Tv de 50 pulgadas',
    precio: 4000,
    disponible: true
}
//Con esto no nos dejara agregar ni editar nuestro objeto
// seal no nos deja eliminar ni agregar nada a al objeto pero si modificar, pero freeze no nos deja hacer practicamente nada.
Object.seal(producto);


producto.disponible = false;


/* producto.precio = 6000;
producto.disponibilidad = false; */
producto.imagen = 'imagen.jpg'; 

console.log(producto);

