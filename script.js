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
    
    // Configurar formulario con Web3Forms
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        console.log('✓ Formulario encontrado (Web3Forms)');
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
            
            // Web3Forms API - Enviar a fontalux.mantenimiento@gmail.com
            const formData = {
                access_key: "2b7b8c4a-1a5a-4f7c-8e3d-5c2a1b8f9d4e",
                name: nombre,
                email: email,
                message: mensaje,
                subject: `Nuevo mensaje de contacto de ${nombre}`,
                to_email: "fontalux.mantenimiento@gmail.com"
            };
            
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('¡Mensaje enviado correctamente! Te contactaremos pronto.');
                    contactForm.reset();
                    console.log('✓ Email enviado correctamente');
                } else {
                    alert('Error al enviar. Por favor intenta de nuevo.');
                    console.error('Error:', data);
                }
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            })
            .catch(error => {
                alert('Error al enviar. Por favor intenta de nuevo.');
                console.error('Error:', error);
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
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
