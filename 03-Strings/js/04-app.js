const producto = '       Tv de 20 pulgadas      ';

console.log(producto);
//para ver el tamaño de la cadena incluyendo los espacios
console.log(producto.length);

//Quitar los espacios de la derecha

console.log(producto.trimStart());

//Quitar los espacios del final o izquierda
console.log(producto.trimEnd());

//Quitar ambos lados pero de la forma antigua
console.log(producto.trimStart().trimEnd() );
console.log(producto.trimStart().trimEnd().length );

//nueva forma de quitar ambos lados
console.log(producto.trim());
console.log(producto.trim().length);

