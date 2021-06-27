const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);




//Acceder al html del documento

//si en el css - visibility: hidden; no lo va a encontrar
//console.log(encabezado.innerText); // innertext no va a encontrar un texto oculto con visibility: hidden mientras los otros dos si

//otra forma
//console.log(encabezado.textContent); // si lo va a encontrar aunque este oculto

//console.log(encabezado.innerHTML); //se trae el texto y el html

//Realiza cambios en la pagina a traves del doom
//const nuevoHeading = 'Nuevo heading'
//document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

//modificar imagenes con javascript
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';