const nav = document.querySelector('.navegacion');
console.log(nav);

// Registrar un evento
nav.addEventListener('click', () => {
    console.log('Haz dado click');
})

// Registrar un evento en el logo de la pagina
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
    console.log('Seleccionaste el logo');
});

// mouseenter, entrar en la navegacion
const navEnter = document.querySelector('.navegacion');
    navEnter.addEventListener('mouseenter', () => {
        console.log('Entrando a la navegacion');
        nav.style.backgroundColor = 'white';
});
// mouseout, salir de la navegacion
const navOut = document.querySelector('.navegacion');
navOut.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');
    nav.style.backgroundColor = 'transparent';
});

//mousedown, cuando presionas un html
const navDown = document.querySelector('.navegacion');
navDown.addEventListener('mousedown', () => {
    console.log('presionaste con un click de tu mouse');
})
//mouseup, cuando sueltas el click en html
const navUp = document.querySelector('.navegacion');
navUp.addEventListener('mouseup', () => {
    console.log('Soltaste el click del mouse');
})