// ===== FUNCIÓN PARA CAMBIAR ENTRE PESTAÑAS =====
function switchTab(tabName) {
    // Ocultar todas las pestañas
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Mostrar la pestaña seleccionada
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Actualizar estado de los botones de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-tab') === tabName) {
            link.classList.add('active');
        }
    });

    // Scroll hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== FUNCIÓN PARA CONFIGURAR CUANDO DOM CARGUE =====
function setupPageInteractions() {
    console.log('✓ DOM cargado - Configurando interacciones');
    
    // Configurar eventos de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    console.log('Botones encontrados:', navLinks.length);
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabName = this.getAttribute('data-tab');
            console.log('Click en:', tabName);
            switchTab(tabName);
        });
    });
    
    // Configurar formulario con FormSubmit
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        console.log('✓ Formulario encontrado (FormSubmit)');
        contactForm.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // FormSubmit maneja el envío automáticamente
            // Solo mostrar confirmación después
            setTimeout(() => {
                alert('¡Mensaje enviado correctamente! Te contactaremos pronto.');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Efectos de scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.card, .service-item, .project-card, .timeline-item').forEach(item => {
        item.style.opacity = '0.8';
        item.style.transform = 'translateY(20px)';
        observer.observe(item);
    });
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', setupPageInteractions);
