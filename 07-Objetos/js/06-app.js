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

const { nombre, informacion, informacion: {fabricacion: {pais}} } = producto;
const {informacion: {medidas: {peso}}} = producto;

console.log(nombre);
console.log(pais);
console.log(informacion);

console.log(peso);