const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

console.table(meses);
console.table(meses[1]);
console.table(meses[2]);

/* Recorrer un arreglo cuando tiene un tamaño variable nuestro arreglo*/
/* Tenemos que ver cuanto mide nuestro arreglo con la propiedad length */
console.log(meses.length);

/* For loop se compone por 3 partes */
for(let i=0; i < meses.length; i++){
    console.log(meses[i]);
}