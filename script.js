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
    
    // Configurar formulario con Simple Email
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        console.log('✓ Formulario encontrado');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = this.querySelector('input[name="nombre"]').value.trim();
            const email = this.querySelector('input[name="email"]').value.trim();
            const mensaje = this.querySelector('textarea[name="mensaje"]').value.trim();
            
            if (!nombre || !email || !mensaje) {
                alert('Por favor completa todos los campos');
                return;
            }
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Abrir cliente de email con mailto
            const subject = `Nuevo mensaje de contacto de ${nombre}`;
            const body = `Nombre: ${nombre}\nEmail: ${email}\nMensaje:\n${mensaje}`;
            const mailtoLink = `mailto:fontalux.mantenimiento@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Copiar a portapapeles para comodidad
            const fullMessage = `DE: ${email}\n\n${mensaje}`;
            navigator.clipboard.writeText(fullMessage).then(() => {
                alert('¡Abriendo tu cliente de email!\n\nSi no se abre automáticamente, copia este texto y envía un email a:\nfontalux.mantenimiento@gmail.com');
                window.location.href = mailtoLink;
                
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1000);
            });
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
