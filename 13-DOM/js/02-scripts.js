//Seleccionar elementos por su clase... la forma antigua

let header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

//Cuando las clases existen mas de 1 vez, nos mostrara todos los elementos del html que posean
//el mismo nombre de clase
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

//Si una clase no existe
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);