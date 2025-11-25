document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Tutup menu mobile setelah klik
            nav.classList.remove('active');
        }
    });
});


// Menu Toggle untuk Mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Tutup menu saat klik di luar
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('active');
    }
});

// Smooth Scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Tutup menu mobile setelah klik
            nav.classList.remove('active');
        }
    });
});

// Form submission dengan AJAX
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.btn');
        const originalText = submitBtn.textContent;
        
        // Tampilkan loading
        submitBtn.innerHTML = '<span class="loading"></span> Mengirim...';
        submitBtn.disabled = true;
        
        try {
            const formData = new FormData(contactForm);
            
            const response = await fetch('send_email.php', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            // Hapus pesan sebelumnya jika ada
            const existingMessage = contactForm.querySelector('.success-message, .error-message');
            if (existingMessage) {
                existingMessage.remove();
            }
            
            if (result.success) {
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = result.message;
                contactForm.insertBefore(successMessage, contactForm.firstChild);
                contactForm.reset();
            } else {
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error-message';
                errorMessage.textContent = result.message;
                contactForm.insertBefore(errorMessage, contactForm.firstChild);
            }
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.';
            contactForm.insertBefore(errorMessage, contactForm.firstChild);
        } finally {
            // Kembalikan tombol ke keadaan semula
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}



// Animasi fade in saat scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Terapkan animasi ke elemen yang diinginkan
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .about-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Portfolio modal (opsional)
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        // Implementasi modal untuk portfolio item
        console.log('Portfolio item clicked');
    });
});


// Animasi fade in saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Fade in cards dengan delay
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Animasi untuk statistics
    const stats = document.querySelectorAll('.stat-item');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    stats.forEach(stat => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(30px)';
        stat.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(stat);
    });

    // Animasi banner
    const banner = document.querySelector('.innovation-banner');
    if (banner) {
        banner.style.opacity = '0';
        banner.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            banner.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            banner.style.opacity = '1';
            banner.style.transform = 'scale(1)';
        }, 400);
    }

    // Smooth scroll untuk navigasi (jika ada)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Hover effect untuk cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Counter animation untuk statistics
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Parallax effect untuk banner (optional)
window.addEventListener('scroll', function() {
    const banner = document.querySelector('.innovation-banner');
    if (banner) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        banner.style.transform = `translateY(${rate}px)`;
    }
});




//TENTANG THE IF//
// Animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // =============================
    // ANIMASI SECTION TITLE
    // =============================
    const sectionTitle = document.querySelector('.section-title');
    const sectionSubtitle = document.querySelector('.section-subtitle');
    
    if (sectionTitle) {
        sectionTitle.style.opacity = '0';
        sectionTitle.style.transform = 'translateY(-30px)';
        setTimeout(() => {
            sectionTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            sectionTitle.style.opacity = '1';
            sectionTitle.style.transform = 'translateY(0)';
        }, 100);
    }
    
    if (sectionSubtitle) {
        sectionSubtitle.style.opacity = '0';
        sectionSubtitle.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            sectionSubtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            sectionSubtitle.style.opacity = '1';
            sectionSubtitle.style.transform = 'translateY(0)';
        }, 250);
    }

    // =============================
    // ANIMASI LEFT CONTENT (Konsep & Genre)
    // =============================
    const conceptBox = document.querySelector('.concept-box');
    const genreBox = document.querySelector('.genre-box');
    
    if (conceptBox) {
        conceptBox.style.opacity = '0';
        conceptBox.style.transform = 'translateX(-30px)';
        setTimeout(() => {
            conceptBox.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            conceptBox.style.opacity = '1';
            conceptBox.style.transform = 'translateX(0)';
        }, 400);
    }
    
    if (genreBox) {
        genreBox.style.opacity = '0';
        genreBox.style.transform = 'translateX(-30px)';
        setTimeout(() => {
            genreBox.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            genreBox.style.opacity = '1';
            genreBox.style.transform = 'translateX(0)';
        }, 550);
    }

    // =============================
    // ANIMASI RIGHT CONTENT (Role Cards)
    // =============================
    const roleCards = document.querySelectorAll('.role-card');
    
    roleCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, 600 + (150 * index));
    });

    // =============================
    // INTERSECTION OBSERVER
    // =============================
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animasi khusus untuk icon
                const icon = entry.target.querySelector('.role-icon');
                if (icon) {
                    setTimeout(() => {
                        icon.style.transform = 'scale(1.1) rotate(5deg)';
                        setTimeout(() => {
                            icon.style.transform = 'scale(1) rotate(0deg)';
                        }, 300);
                    }, 200);
                }
            }
        });
    }, observerOptions);

    // Observe role cards
    roleCards.forEach(card => {
        observer.observe(card);
    });

    // Observe concept and genre boxes
    if (conceptBox) observer.observe(conceptBox);
    if (genreBox) observer.observe(genreBox);

    // =============================
    // SMOOTH SCROLL
    // =============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // =============================
    // HOVER EFFECTS ENHANCEMENT
    // =============================
    
    // Concept & Genre boxes hover
    const boxes = document.querySelectorAll('.concept-box, .genre-box');
    boxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Role cards hover with icon animation
    roleCards.forEach(card => {
        const icon = card.querySelector('.role-icon');
        
        card.addEventListener('mouseenter', function() {
            const isMobile = window.innerWidth <= 640;
            if (!isMobile) {
                this.style.transform = 'translateX(8px)';
            } else {
                this.style.transform = 'translateY(-5px)';
            }
            
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) translateY(0)';
            
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // =============================
    // PARALLAX EFFECT (SUBTLE)
    // =============================
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                
                // Parallax untuk boxes
                const allBoxes = document.querySelectorAll('.concept-box, .genre-box, .role-card');
                allBoxes.forEach((box, index) => {
                    const rect = box.getBoundingClientRect();
                    
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        const speed = 0.05 * (index % 2 === 0 ? 1 : -1);
                        const yPos = -(scrolled * speed);
                        box.style.transform = `translateY(${yPos}px)`;
                    }
                });
                
                ticking = false;
            });
            ticking = true;
        }
    });

    // =============================
    // RESPONSIVE ADJUSTMENTS
    // =============================
    function handleResponsive() {
        const isMobile = window.innerWidth <= 640;
        
        if (isMobile) {
            // Disable parallax on mobile
            const allBoxes = document.querySelectorAll('.concept-box, .genre-box, .role-card');
            allBoxes.forEach(box => {
                box.style.transform = 'translateY(0)';
            });
        }
    }

    window.addEventListener('resize', handleResponsive);
    handleResponsive();

    // =============================
    // LAZY LOADING OPTIMIZATION
    // =============================
    if ('IntersectionObserver' in window) {
        const lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                    lazyObserver.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '50px'
        });

        document.querySelectorAll('.concept-box, .genre-box, .role-card').forEach(element => {
            lazyObserver.observe(element);
        });
    }

    // =============================
    // ACCESSIBILITY ENHANCEMENTS
    // =============================
    
    // Add keyboard navigation support
    const interactiveElements = document.querySelectorAll('.concept-box, .genre-box, .role-card');
    interactiveElements.forEach(element => {
        element.setAttribute('tabindex', '0');
        
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #c17a45';
            this.style.outlineOffset = '4px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // =============================
    // CONSOLE LOG (DEVELOPMENT)
    // =============================
    console.log('✅ Tentang The IF section loaded successfully');
    console.log('📊 Role Cards:', roleCards.length);
    console.log('📦 Content Boxes:', boxes.length);
});

// =============================
// UTILITY FUNCTIONS
// =============================

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to animate element on scroll
function animateOnScroll(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}


// Fitur Unggulan //
// Animasi untuk feature cards saat scroll
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card');
    
    // Intersection Observer untuk animasi scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        setTimeout(() => {
            observer.observe(card);
        }, index * 100);
    });
    
    // Efek hover pada icon
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Log saat halaman dimuat
    console.log('Fitur Unggulan - Halaman berhasil dimuat');
    console.log('Total feature cards:', cards.length);
});


//MISI HISTORI //
// Animasi untuk mission cards saat scroll
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.mission-card');
    const organisasiSection = document.querySelector('.organisasi-section');
    
    // Intersection Observer untuk animasi scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe mission cards dengan delay
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        setTimeout(() => {
            observer.observe(card);
        }, index * 150);
    });
    
    // Observe organisasi section
    if (organisasiSection) {
        organisasiSection.style.opacity = '0';
        setTimeout(() => {
            observer.observe(organisasiSection);
        }, cards.length * 150);
    }
    
    // Efek hover pada year badge
    const yearBadges = document.querySelectorAll('.year-badge');
    yearBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Parallax effect pada gambar mission saat hover
    cards.forEach(card => {
        const img = card.querySelector('.mission-image img');
        
        card.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.5s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1)';
        });
    });
    
    // Log informasi
    console.log('Tiga Misi Historis - Halaman berhasil dimuat');
    console.log('Total mission cards:', cards.length);
});// Animasi untuk mission cards saat scroll
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.mission-card');
    const organisasiSection = document.querySelector('.organisasi-section');
    
    // Intersection Observer untuk animasi scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe mission cards dengan delay
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        setTimeout(() => {
            observer.observe(card);
        }, index * 150);
    });
    
    // Observe organisasi section
    if (organisasiSection) {
        organisasiSection.style.opacity = '0';
        setTimeout(() => {
            observer.observe(organisasiSection);
        }, cards.length * 150);
    }
    
    // Efek hover pada year badge
    const yearBadges = document.querySelectorAll('.year-badge');
    yearBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Parallax effect pada gambar mission saat hover
    cards.forEach(card => {
        const img = card.querySelector('.mission-image img');
        
        card.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.5s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1)';
        });
    });
    
    // Log informasi
    console.log('Tiga Misi Historis - Halaman berhasil dimuat');
    console.log('Total mission cards:', cards.length);
});



// kosong sesuai permintaan
console.log("loaded");
