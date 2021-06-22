let formulario = document.getElementById('formulario');
console.log(formulario);

//No existe
const noExiste = document.getElementById('No-existe');
console.log(noExiste);

//Si existen mas de dos formularios, solo tomara en cuenta el primero que encuentre, a diferencia 
//de className ya que las clases se pueden utilizar mas de una vez por document 