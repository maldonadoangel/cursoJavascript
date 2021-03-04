const producto = {
    nombre: 'Tv de 50 pulgadas',
    precio: 5000,
    disponibilidad: true
}


//El problema con los objetos que aunque sean constantes si se pueden modificar

delete producto.precio;

producto.disponible = false;

console.log(producto.disponible);