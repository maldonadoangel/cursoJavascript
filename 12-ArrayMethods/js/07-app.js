const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const productos = [
    {nombre: 'Celular Samsung s8', precio: 3500, disponible: true},
    {nombre: 'Tv LG 32 pulgadas', precio: 4000, disponible: false},
    {nombre: 'NoteBook Retina', precio: 13000, disponible: true}
];

const mesTotal = meses.concat(meses2);

console.log(mesTotal);

//Spread Operator
const resultado2 = [...meses, ...meses2];

console.log(resultado2);