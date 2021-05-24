/* for(let i = 0; i <= 10; i++){
    if(i === 5){
        console.log('Este es el 5');
        continue;
    }
    console.log(`Numero: ${i}`);
} */


const electronicos = [
    {nombre: 'Televisor de 10 pulgadas', precio: 1000},
    {nombre: 'Televisor de 100 pulgadas', precio: 10000},
    {nombre: 'Bocina', precio: 800, descuento: true},
    {nombre: 'Celular', precio: 4000},
    {nombre: 'Notebook Retina 15', precio: 20000} ]


for(let i=0; i<electronicos.length; i++){
    if(electronicos[i].descuento){
        console.log(`El articulo ${electronicos[i].nombre} tiene descuento.`);
        continue;

    }

    console.log(electronicos[i].nombre);
}