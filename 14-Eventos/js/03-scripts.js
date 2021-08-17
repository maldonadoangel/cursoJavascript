const navegacion = document.querySelector('.busqueda');
console.log(navegacion);

//Se ejecuta cuando presionas una tecla
// navegacion.addEventListener('keydown', () => {
//     console.log('Escribiendo....');
// });
// blur, se suele utilizar para validaciones, debido a que al salir del formulario, guarda el evento
navegacion.addEventListener('blur', () => {
    console.log('Utilizando blur');
})

// Registra cuando pegas algo al formulario
navegacion.addEventListener('paste', () => {
    console.log('pegaste algo al formulario');
})
//Registra cuando copias algo del formulario
navegacion.addEventListener('copy', () => {
    console.log('Copiaste algo del formulario');
})

//input, realiza todos los anteriores eventos, excepto el blur, pasamos como evento el conocer que escribio el usuario a traves
//del event.target.value
navegacion.addEventListener('input', (event) => {
    if(event.target.value === ''){
        console.log('Fallo la validacion');
    }
    console.log(event.target.value);
})