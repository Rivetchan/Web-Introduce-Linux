// js/index.js
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Data distro lengkap
  const distroData = {
    kali: {
      title: 'Kali Linux',
      desc: 'Distribusi berbasis Debian yang dikhususkan untuk penetration testing, forensik digital, dan keamanan siber. Dikembangkan dan dikelola oleh Offensive Security.',
      tag: 'Security / PenTest',
      bullets: [
        'Lebih dari 600 tool penetrasi testing pre-installed',
        'Kernel yang dikustomisasi untuk injection wireless',
        'Support untuk ARM devices (Raspberry Pi, dll)',
        'Development environment yang aman dan terisolasi',
        'Repositori khusus untuk update tool keamanan terbaru'
      ],
      usage: 'Ideal untuk ethical hackers, auditor keamanan, dan profesional keamanan siber.',
      icon: 'fas fa-shield-alt',
      color: 'from-blue-500 to-purple-600',
      image: 'src/kali-linux.png',
      resources: {
        official: 'https://www.kali.org',
        download: 'https://www.kali.org/get-kali/',
        docs: 'https://www.kali.org/docs/'
      }
    },
    arch: {
      title: 'Arch Linux',
      desc: 'Distribusi rolling-release yang minimalis dan ringan, memberikan kebebasan penuh kepada pengguna untuk membangun sistem sesuai kebutuhan mereka.',
      tag: 'Advanced / Rolling',
      bullets: [
        'Rolling release dengan update software terbaru',
        'Package manager Pacman yang powerful',
        'Arch User Repository (AUR) dengan 80,000+ package',
        'Dokumentasi terbaik di dunia Linux (Arch Wiki)',
        'Kustomisasi penuh dari instalasi hingga desktop environment'
      ],
      usage: 'Cocok untuk pengguna advanced, developer, dan mereka yang ingin belajar Linux secara mendalam.',
      icon: 'fas fa-tools',
      color: 'from-blue-400 to-blue-700',
      image: 'src/arch-linux.png',
      resources: {
        official: 'https://archlinux.org',
        download: 'https://archlinux.org/download/',
        docs: 'https://wiki.archlinux.org'
      }
    },
    debian: {
      title: 'Debian',
      desc: 'Salah satu distribusi Linux tertua dan paling stabil, dikenal sebagai "sistem operasi universal" dan menjadi basis bagi banyak distro populer.',
      tag: 'Stable / Server',
      bullets: [
        'Stabilitas teruji untuk server dan sistem produksi',
        'Repositori dengan 59,000+ package yang terkurasi',
        'Dukungan untuk 9 arsitektur hardware berbeda',
        'Komitmen kuat pada free software (100% gratis)',
        'Siklus rilis yang dapat diprediksi dan terencana'
      ],
      usage: 'Sempurna untuk server, sistem embedded, dan environment yang membutuhkan stabilitas maksimal.',
      icon: 'fas fa-rocket',
      color: 'from-red-500 to-red-700',
      image: 'src/debian.png',
      resources: {
        official: 'https://debian.org',
        download: 'https://debian.org/distrib/',
        docs: 'https://debian.org/doc/'
      }
    },
    ubuntu: {
      title: 'Ubuntu',
      desc: 'Distribusi berbasis Debian yang user-friendly, populer untuk desktop dan server, dengan dukungan komersial dari Canonical.',
      tag: 'Beginner / Desktop',
      bullets: [
        'Instalasi mudah dan dukungan hardware yang luas',
        'LTS (Long Term Support) rilis dengan 5 tahun support',
        'Snap packages untuk instalasi aplikasi yang mudah',
        'Komunitas pengguna terbesar dan paling aktif',
        'Integrasi cloud dan container yang mulus'
      ],
      usage: 'Terbaik untuk pemula, penggunaan desktop sehari-hari, dan environment enterprise.',
      icon: 'fas fa-users',
      color: 'from-orange-400 to-orange-600',
      image: 'src/ubuntu.png',
      resources: {
        official: 'https://ubuntu.com',
        download: 'https://ubuntu.com/download/desktop',
        docs: 'https://help.ubuntu.com'
      }
    },
    fedora: {
      title: 'Fedora',
      desc: 'Distribusi cutting-edge yang menampilkan teknologi terbaru Linux, sering menjadi tempat uji untuk Red Hat Enterprise Linux.',
      tag: 'Cutting-edge / Desktop',
      bullets: [
        'Selalu menggunakan versi terbaru dari software',
        'Workstation edition yang optimal untuk developer',
        'SELinux enabled by default untuk keamanan',
        'Flatpak dan RPM Fusion untuk package management',
        'Dukungan resmi dari Red Hat dan komunitas'
      ],
      usage: 'Ideal untuk developer, researcher, dan mereka yang ingin menggunakan teknologi Linux terbaru.',
      icon: 'fas fa-flask',
      color: 'from-blue-600 to-blue-900',
      image: 'src/fedora.png',
      resources: {
        official: 'https://fedoraproject.org',
        download: 'https://fedoraproject.org/workstation/download/',
        docs: 'https://docs.fedoraproject.org'
      }
    },
    mint: {
      title: 'Linux Mint',
      desc: 'Distribusi berbasis Ubuntu yang fokus pada kemudahan penggunaan, elegance, dan pengalaman desktop yang lengkap out-of-the-box.',
      tag: 'User-friendly',
      bullets: [
        'Cinnamon desktop environment yang intuitif',
        'Sudah termasuk multimedia codecs dan driver proprietary',
        'Update manager yang tidak mengganggu',
        'Kompatibilitas penuh dengan repository Ubuntu',
        'Timeshift untuk system backup dan restore'
      ],
      usage: 'Sempurna untuk migrasi dari Windows, pengguna rumahan, dan mereka yang menginginkan pengalaman desktop yang mulus.',
      icon: 'fas fa-leaf',
      color: 'from-green-500 to-green-700',
      image: 'src/linux-mint.png',
      resources: {
        official: 'https://linuxmint.com',
        download: 'https://linuxmint.com/download.php',
        docs: 'https://linuxmint.com/documentation.php'
      }
    }
  };

  // Fungsi untuk handle error gambar
  window.handleImageError = function(img) {
    console.warn(`Gambar tidak ditemukan: ${img.src}`);
    img.style.display = 'none';
    const overlay = img.nextElementSibling;
    if (overlay && overlay.classList.contains('distro-logo-overlay')) {
      overlay.style.display = 'flex';
    }
  };

  // Update fungsi untuk layout grid baru dengan gambar
  function initDistroGrid() {
    const distroCards = document.querySelectorAll('.distro-card');
    const selectedImage = document.getElementById('selectedImage');
    const selectedTitle = document.getElementById('selectedTitle');
    const selectedDesc = document.getElementById('selectedDesc');
    const selectedList = document.getElementById('selectedList');
    const selectedTagText = document.getElementById('selectedTagText');
    const selectedDetails = document.getElementById('selectedDetails');
    const selectedUsage = document.getElementById('selectedUsage');
    const selectedUsageText = document.getElementById('selectedUsageText');
    const selectedResources = document.getElementById('selectedResources');
    const officialSite = document.getElementById('officialSite');
    const downloadLink = document.getElementById('downloadLink');
    const docsLink = document.getElementById('docsLink');
    const infoPanel = document.querySelector('.info-panel');

    function updateDistroInfo(key) {
      const data = distroData[key];
      
      if (!data) return;

      // Update konten utama
      selectedTitle.textContent = data.title;
      selectedDesc.textContent = data.desc;
      selectedTagText.textContent = data.tag;
      
      // Update gambar distro di panel info
      if (data.image) {
        selectedImage.innerHTML = `
          <div class="relative w-full h-full">
            <img src="${data.image}" alt="${data.title}" class="w-full h-full object-contain rounded-xl" onerror="this.style.display='none'">
            <div class="absolute inset-0 bg-gradient-to-br ${data.color} rounded-xl flex items-center justify-center text-white text-4xl">
              <i class="${data.icon}"></i>
            </div>
          </div>
        `;
      } else {
        selectedImage.innerHTML = `<i class="${data.icon}"></i>`;
        selectedImage.className = `distro-image w-24 h-24 bg-gradient-to-br ${data.color} rounded-xl flex items-center justify-center text-white text-4xl flex-shrink-0`;
      }
      
      // Update feature list
      selectedList.innerHTML = '';
      data.bullets.forEach(bullet => {
        const li = document.createElement('li');
        li.className = 'feature-item';
        li.innerHTML = `
          <div class="feature-icon">
            <i class="fas fa-check"></i>
          </div>
          <span>${bullet}</span>
        `;
        selectedList.appendChild(li);
      });
      
      // Update usage information
      if (data.usage) {
        selectedUsageText.textContent = data.usage;
        selectedUsage.classList.remove('hidden');
      } else {
        selectedUsage.classList.add('hidden');
      }
      
      // Update resources
      if (data.resources) {
        officialSite.href = data.resources.official;
        downloadLink.href = data.resources.download;
        docsLink.href = data.resources.docs;
        selectedResources.classList.remove('hidden');
      } else {
        selectedResources.classList.add('hidden');
      }
      
      // Show details section
      selectedDetails.classList.remove('hidden');
      
      // Add animation to panel
      infoPanel.classList.add('updated');
      setTimeout(() => {
        infoPanel.classList.remove('updated');
      }, 600);
    }

    // Add click event to distro cards
    distroCards.forEach(card => {
      card.addEventListener('click', function() {
        // Remove active class from all cards
        distroCards.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked card
        this.classList.add('active');
        
        // Get distro key from data attribute
        const distroKey = this.dataset.distro;
        updateDistroInfo(distroKey);
        
        // Scroll info panel into view on mobile
        if (window.innerWidth < 1024) {
          infoPanel.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      });
      
      // Add hover effects
      card.addEventListener('mouseenter', function() {
        if (!this.classList.contains('active')) {
          this.style.transform = 'translateY(-8px)';
        }
      });
      
      card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
          this.style.transform = 'translateY(0)';
        }
      });
    });

    // Auto-select first distro on load
    if (distroCards.length > 0) {
      setTimeout(() => {
        distroCards[0].click();
      }, 1000);
    }
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 100;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
        
        // Update URL without page reload
        history.pushState(null, null, targetId);
      }
    });
  });
  
  // Add fade-in animation to sections on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);
  
  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
  
  // Add loading state management
  window.addEventListener('load', () => {
    document.body.classList.remove('loading');
  });
  
  // Keyboard navigation for distro items
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const activeCard = document.querySelector('.distro-card.active');
      if (!activeCard) return;
      
      const distroCards = Array.from(document.querySelectorAll('.distro-card'));
      const currentIndex = distroCards.indexOf(activeCard);
      
      let newIndex;
      if (e.key === 'ArrowRight') {
        newIndex = (currentIndex + 1) % distroCards.length;
      } else {
        newIndex = (currentIndex - 1 + distroCards.length) % distroCards.length;
      }
      
      distroCards[newIndex].click();
    }
  });

  // Initialize the distro grid
  initDistroGrid();
  
  console.log('Linuxpedia initialized successfully!');
});