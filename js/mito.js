// Seleccionar todas las imágenes con la clase 'selectable'
const mitologia = document.querySelectorAll('.seleccionado');

// Seleccionar el modal y sus elementos
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const closeModalBtn = document.querySelector('.close-btn');

// Agregar un evento de clic a cada imagen
mitologia.forEach(image => {
    image.addEventListener('click', () => {
        // Mostrar el modal
        modal.style.display = 'flex';
        
        // Mostrar la imagen seleccionada y la descripción correspondiente en el modal
        modalImage.src = image.src;
        modalDescription.textContent = image.getAttribute('data-text');
    });
});

// Agregar evento de clic para cerrar el modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}); 