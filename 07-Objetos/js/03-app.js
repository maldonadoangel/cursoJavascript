const producto = {
    nombre: 'Televisor 32 pulgadas',
    precio: 4000,
    disponible: true
}


//agregar nuevas propiedades a un objeto
producto.imagen = "imagen.jpg";
producto.descuento = 0.15;

//eliminar propiedades de un objeto
delete producto.disponible;


console.log(producto);

