// index.js
let currentIndex = 0;
const slideInterval = 4000; // Intervalo de 4 segundos

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    // Mostrar/ocultar botões de navegação
    document.querySelector('.prev').style.display = totalSlides > 1 ? 'block' : 'none';
    document.querySelector('.next').style.display = totalSlides > 1 ? 'block' : 'none';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Inicia o carrossel automático
setInterval(nextSlide, slideInterval);
