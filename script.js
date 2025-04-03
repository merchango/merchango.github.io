// Script para mostrar un slider de imágenes (opcional)
let currentIndex = 0;
const items = document.querySelectorAll('.galeria .item');
const totalItems = items.length;

function showNextItem() {
    items[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].style.display = 'block';
}

setInterval(showNextItem, 3000); // Cambia cada 3 segundos

// Mostrar el primer elemento
items[currentIndex].style.display = 'block';
