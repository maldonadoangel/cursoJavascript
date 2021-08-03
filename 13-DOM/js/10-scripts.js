/* Creando un nuevo elemento */
const enlace = document.createElement('a');
//Agregando texto al enlace
enlace.textContent = "Nuevo Enlace";
enlace.id = "nuevoEnlace";
enlace.target = "_blank";

//añadiendo href
enlace.href = '/nuevo-enlace';

enlace.onclick = miFuncion;

console.log(enlace);

/* Seleccionar la navegacion */ 
const navegacion = document.querySelector('.navegacion');
/* Colocar lo que creamos en nuestro DOM */
console.log(navegacion.children);
/* colocamos donde querramos nuestra creacion */
navegacion.insertBefore(enlace, navegacion.children[1]);

 function miFuncion(){
     alert('DISTE CLICK');
 }

 /* Crear una card */

 const parrafo1 = document.createElement('p');
 parrafo1.textContent = 'Concierto';
 parrafo1.classList.add('categoria', 'concierto');
 const parrafo2 = document.createElement('p');
 parrafo2.textContent = 'Concierto de Rock';
 parrafo2.classList.add('titulo');
 const parrafo3 = document.createElement('p');
 parrafo3.textContent = '800$ por persona';
parrafo3.classList.add('precio');

//crear div con la clase info
const info = document.createElement('div');
info.classList.add('info');
console.log(info);
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear imagen
const imagen = document.createElement('img');
imagen.src = "img/hacer2.jpg";

imagen.alt = "Texto Alternativo";
imagen.classList.add('img-fluid');

//crear card
const card = document.createElement('div');
card.classList.add('card');

//Asignamos la imagen
card.appendChild(imagen);


//asignar info
card.appendChild(info);

//insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');

contenedor.insertBefore(card, contenedor.children[0]);





