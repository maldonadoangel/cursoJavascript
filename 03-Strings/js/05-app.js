const producto = 'Monitor 20 pulgadas';

//replace se utiliza para sustituir alguna palabra por otra
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

//slice sirve para extraer texto o cortar
console.log(producto.slice(0, 10));
//cortar apartir de el caracter 8 de la cadena de texto
console.log(producto.slice(8));

// alternativa a slice 
console.log(producto.substring(0, 10));
console.log(producto.slice(2, 1));

//extraer la letra inicial de dos formas diferentes
const usuario = "Angel";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));