
/* 
for(let i=0; i<=10; i+=2){
    console.log(`El numero es: ${i}`);
} */

/* 
for(let i = 0; i<=10; i++){
    if(i % 2 == 0){
        console.log(`Numero par: ${i}`);
    }else{
        console.log(`Numero Impar: ${i}`);
    }
} */


const electronicos = [
    {nombre: 'Televisor de 10 pulgadas', precio: 1000},
    {nombre: 'Televisor de 100 pulgadas', precio: 10000},
    {nombre: 'Bocina', precio: 800},
    {nombre: 'Celular', precio: 4000},
    {nombre: 'Notebook Retina 15', precio: 20000} ]

console.log(electronicos.length);

for(let i = 0; i < electronicos.length; i++){
  console.log(electronicos[i].nombre);
}