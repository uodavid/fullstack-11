//manipulacion del dom

const btnNoPress = document.getElementById('no-press-me');
btnNoPress.textContent = 'don\'t press me';

//eventos que cuando de click haga algo

btnNoPress.addEventListener('click', () => {
    console.error('Te dije que no me presionaras');
})

//click derecho
btnNoPress.addEventListener('contextmenu', () => {
    console.warn('click derecho');
})

//cuando uno pasa el mouse por encima
btnNoPress.addEventListener('mouseover', () => {
    console.info('Pusiste el mouse encima del boton');
})

//hacer que se oculte la imagen cuando me pare encima de ella 
const mainPhoto = document.getElementById('main-photo');

mainPhoto.addEventListener('mouseenter', () => {
    document.getElementById('main-photo').style.display = 'none';

});

mainPhoto.addEventListener('mouseleave', () => {
    document.getElementById('main-photo').style.display = 'block';

});


