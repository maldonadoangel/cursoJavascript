const producto = 'Monitor 20 pulgadas';

// repeat nos permite repetir una cadena de texto

const texto = ' en promocion'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto} !!!`);    

//split te va a permitir dividir un string, con solo especificar la letra o espacio que los separara

const actividad = 'Estoy aprendiendo javascript moderno';

console.log(actividad.split(" "));

const hobbies = 'Leer, escuchar musica, escribir, aprender a programar';

console.log(hobbies.split(","));

const tweet = 'Aprendiendo Javascript #JSModernoConJuan';

console.log(tweet.split("#"));