/* Un objeto dentro de otro objeto */
const producto = {
    nombre: "Tv de 50 pulgadas",
    precio: 10000,
    disponibilidad: true,
    informacion: {
        medidas: {
        peso: '1kg',
        medida: '1m'
         },
        fabricacion: {
            pais: 'China'
        }
    }
}

const {nombre, edad, disponibilidad, informacion} = producto;

console.log(nombre);
console.log(edad);
console.log(informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.fabricacion.pais);

console.log(producto);