const mitologia = document.querySelectorAll('.seleccionado');

const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const closeModalBtn = document.querySelector('.close-btn');

// Agregar un evento de clic a cada imagen
mitologia.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = image.src;
        modalDescription.textContent = image.getAttribute('data-text');

        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    });
});

// Agregar evento de clic para cerrar el modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
});

// Cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500)
    }
}); 