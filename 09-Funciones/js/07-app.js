
iniciarApp();

function iniciarApp(){
    console.log('Iniciando app.....');
    segundaFuncion();
}


function segundaFuncion(){
    console.log('Desde la segunda funcion.');

    usuarioAutenticado('Angel');
}


function usuarioAutenticado(usuario){
    console.log('Autenticado usuario....');
    console.log(`Usuario autenticado Exitosamente: ${usuario}`);
    
}