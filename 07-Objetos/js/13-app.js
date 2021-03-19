/* Object literal */
const producto = {
    nombre: 'Pc gamer GTX 1050',
    precio: 4000,
    disponible: true
}


//Esto nos devolvera en consola: nombre, precio y disponible pero solo los keys sin su valor
console.log(Object.keys(producto));
/* Este nos regresa los valores de los que se encuentran dentro del objeto producto */
console.log(Object.values(producto));
/* Este nos devuelve el objeto completo */
console.log(Object.entries(producto));