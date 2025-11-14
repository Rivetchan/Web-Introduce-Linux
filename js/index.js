let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
function showSlide(index) {
    slides.forEach((s, i) => {
        s
            .classList
            .remove('active');
        s.style.transform = 'translateX(100%)';
        s.style.opacity = '0';
        s.style.zIndex = '0';
        if (i === index) {
            s
                .classList
                .add('active');
            s.style.transform = 'translateX(0)';
            s.style.opacity = '1';
            s.style.zIndex = '10';
        }
    });
}
showSlide(currentSlide);
document
    .getElementById('nextSlide')
    .addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

const distroData = {
    kali: {
        title: "Kali Linux",
        desc: "Kali Linux berbasis Debian, digunakan untuk penetration testing.",
        image: "source/kali.png"
    },
    arch: {
        title: "Arch Linux",
        desc: "Arch Linux rolling release, fleksibel dan minimal.",
        image: "source/arch.png"
    },
    debian: {
        title: "Debian",
        desc: "Debian stabil, cocok server dan desktop.",
        image: "source/debian.png"
    },
    ubuntu: {
        title: "Ubuntu",
        desc: "Ubuntu user-friendly, berbasis Debian.",
        image: "source/ubuntu.png"
    },
    fedora: {
        title: "Fedora",
        desc: "Fedora cutting-edge, dikembangkan Red Hat.",
        image: "source/fedora.png"
    }
};

const modal = document.getElementById('distroModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalClose = document.getElementById('modalClose');

document
    .querySelectorAll('[data-distro]')
    .forEach(el => {
        el.addEventListener('click', () => {
            const distro = el.getAttribute('data-distro');
            modalImage.src = distroData[distro].image;
            modalTitle.textContent = distroData[distro].title;
            modalDesc.textContent = distroData[distro].desc;
            modal
                .classList
                .remove('hidden');
            modal
                .classList
                .add('flex');
        });
    });

modalClose.addEventListener('click', () => {
    modal
        .classList
        .remove('flex');
    modal
        .classList
        .add('hidden');
});

modal.addEventListener('click', e => {
    if (e.target === modal) {
        modal
            .classList
            .remove('flex');
        modal
            .classList
            .add('hidden');
    }
});
