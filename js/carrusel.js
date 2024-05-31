let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


// Funcionalidad Click en cada button

// Obtener elementos necesarios
const buttons = document.querySelectorAll('.seleccionado');
const modal = document.getElementById('image-modal');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-btn');

// Función para mostrar el modal con el texto del botón
function showModal(event) {
    const text = event.currentTarget.getAttribute('data-text');
    modalDescription.textContent = text;
    modal.style.display = 'block';
}

// Añadir evento de clic a cada botón
buttons.forEach(button => {
    button.addEventListener('click', showModal);
});

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
}

// Añadir evento de clic al botón de cerrar
closeBtn.addEventListener('click', closeModal);

// Añadir evento de clic fuera del modal para cerrar
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        closeModal();
    }
});