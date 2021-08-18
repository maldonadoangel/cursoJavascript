const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', validarFormulario)

function validarFormulario(event){
    // El preventDefault nos ayuda a prevenir la accion que tiene por defecto el formulario, evitara que se abra el formulario enviando por method post o get al servidor
    // En este caso el de enviar el formulario al servidor
    // ya que nosotros nos encargaremos en prevenir y colocar la accion que tiene que hacer
    event.preventDefault();
    console.log('Consultado una api...');
    console.log(event.target.action);

}