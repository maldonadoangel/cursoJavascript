//object literal
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 3000,
    disponible: true
}

console.log(producto);

//Como acceder a un dato en especifico
//se le conoce la sintaxis de punto, la primera forma es la màs comun
console.log(producto.precio);
console.log(producto.disponible);
console.log(producto.nombre);
//otra forma de mostrar el valor de un objeto
console.log(producto['nombre']);