const producto = {
    nombre: 'Tv de 50 pulgadas',
    precio: 10000,
    disponibilidad: true
}


//forma antigua de extraer una propiedad y convertirla en una variable

/* const nombre = producto.nombre; */

/* console.log(nombre); */


//Destructuring nueva forma de ecma 6
const { nombre, precio, disponible } = producto;


console.log(nombre);
console.log(precio);
console.log(disponible);