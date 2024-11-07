export function initializeCarousel() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
  
    // Mostrar la primera diapositiva
    if (slides.length > 0) slides[0].classList.remove('hidden');
  
    // Función para navegar entre diapositivas
    window.navigateSlide = function(targetIndex) {
      slides[currentSlide].classList.add('hidden');
      currentSlide = (targetIndex + slides.length) % slides.length; // Navegación cíclica
      slides[currentSlide].classList.remove('hidden');
    };
  }
  