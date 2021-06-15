let elemento;
elemento = document.all;
//elemento = document.head;
//elemento = document.body;
elemento = document.domain;
elemento = document.forms;
//Podemos acceder a los elementos del formulario y tambien al id del mismo
//La sintaxis es muy similar a la de un arreglo
elemento = document.forms[0].id;
elemento = document.forms[0].method;
//Nos ayuda a ver que clase fue nombrada en el elemento del formulario
elemento = document.forms[0].classList;
elemento = document.forms[0].action;
//Para visualizar todos los elementos de tipo link en nuestro documento
elemento = document.links;
elemento = document.links[4].classList;
//COmo ver cuantas imagenes posee nuestro documento
elemento = document.images;
//Como ver cuantos scripts tiene nuestro documento
elemento = document.scripts;
console.log(elemento);