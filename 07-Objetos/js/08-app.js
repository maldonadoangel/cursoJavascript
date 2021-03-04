"use strict";

const producto = {
    nombre: 'Tv de 50 pulgadas',
    precio: 4000,
    disponibilidad: true
}
//Con esto no nos dejara agregar ni editar nuestro objeto
Object.freeze(producto);


producto.precio = 6000;
producto.disponibilidad = false;
producto.imagen = 'imagen.jpg';

console.log(producto);

console.log(Object.isFrozen(producto));