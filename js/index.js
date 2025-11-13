let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((s, i) => {
        s.classList.remove('active');
        s.classList.add('hidden');
        if (i === index) {
            s.classList.add('active');
            s.classList.remove('hidden');
        }
    });
}

// Initial slide
showSlide(currentSlide);

// Navigation
document.getElementById('nextSlide').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.getElementById('prevSlide').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Theme Switcher
document.getElementById('lightTheme').addEventListener('click', () => {
    document.body.className = 'bg-white text-black transition-colors duration-500';
});

document.getElementById('darkTheme').addEventListener('click', () => {
    document.body.className = 'bg-gray-900 text-white transition-colors duration-500';
});

document.getElementById('penguinTheme').addEventListener('click', () => {
    document.body.className = 'bg-linuxBlue text-white transition-colors duration-500';
});