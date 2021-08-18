

const cardDiv = document.querySelector('.card');
const cardInfo = document.querySelector('.info');
const cardTitulo = document.querySelector('.titulo');

//event bubbling, hace referencia cuando un evento desata otros eventos no deseados
//la manera de detenerlo es con event.stopPropagation
cardDiv.addEventListener('click', event=>{
    event.stopPropagation();
    console.log('Click en card');

});

cardInfo.addEventListener('click', event=>{
    event.stopPropagation();
    console.log('Click en info');

});

cardTitulo.addEventListener('click', event=>{
    event.stopPropagation();
    console.log('Click en titulo');

});