const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const productos = [
    {nombre: 'Celular Samsung s8', precio: 3500, disponible: true},
    {nombre: 'Tv LG 32 pulgadas', precio: 4000, disponible: false},
    {nombre: 'NoteBook Retina', precio: 13000, disponible: true}
];

//Arreglo original sin modificar
console.log(meses)
//COn el spread operator, no modificamos los arreglos originales, esto es conocido como programacion funcional
const mesTotal = [...meses, 'Enero'];
console.log(mesTotal);

//Con objetos y arreglos en uno solo

const accesorio = {nombre: 'cargador de s8', precio: 100, disponible: true};

const carrito = [...productos, accesorio];
console.log(carrito);