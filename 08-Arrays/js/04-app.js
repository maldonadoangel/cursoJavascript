const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

/* Las constantes en arreglos y objetos si se pueden modificar, en excepcion si se sella el arreglo u objeto */
meses[0] = 'Nuevo mes';
meses[6] = 'Ultimo mes';

console.table(meses);