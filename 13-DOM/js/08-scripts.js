 const navegacion = document.querySelector('.navegacion'); 

/* console.log(navegacion);
console.log(navegacion.childNodes); //Los elementos en blanco son considerados en elementos
console.log(navegacion.children); //Es mejor este que childnodes ya que te lista los elementos reales */

/* console.log(navegacion.children[1]);  */

const card = document.querySelector('.card');
console.log(card.children[1].children);

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild)