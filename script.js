function switchContent(sectionId) {
    // Nascondi tutte le sezioni
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
        section.classList.remove('active');
    });

    // Mostra la sezione selezionata
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    } else {
        console.error(`Section with ID "${sectionId}" not found.`);
    }

    // Aggiorna il menu
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item) => item.classList.remove('active'));

    // Attiva il menu corrente
    const activeItem = document.querySelector(`.menu-item a[href="#${sectionId}"]`)?.parentElement;
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

let currentSlide = 0;
function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    if (index >= totalSlides) {
        currentSlide = 0; 
    } else if (index < 0) {
        currentSlide = totalSlides - 1; 
    } else {
        currentSlide = index;
    }
    
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}
function prevSlide() { showSlide(currentSlide - 1); }
function nextSlide() { showSlide(currentSlide + 1); }