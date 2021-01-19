const producto = "Monitor de 20 pulgadas ";
const precio = '30 USD ';

console.log(producto.concat(precio));
console.log(producto.concat("En descuento"));

console.log(producto + precio);


//ECMMA 6 y más recomendada
console.log(`El producto ${producto}tiene un precio de: $ ${precio}`)