# 📅 TIMELINE Y ROADMAP DEL PROYECTO

**Proyecto:** Sistema Integral - Berní Técnico  
**Duración Total:** 3-4 meses  
**Inversión:** $2,000-2,500 inicial + $30-50/mes  

---

## 📊 Resumen Visual

```
SEMANA 1    SEMANA 2    SEMANA 3-4   MES 2       MES 3       MES 4
┌─────────┬──────────┬────────────┬──────────┬──────────┬──────────┐
│ Fase 1  │  Fase 1  │  Fase 2    │  Fase 2  │  Fase 3  │  Fase 3  │
│         │          │            │          │          │          │
│ WEB     │  WEB +   │  BACKEND   │ BACKEND  │  NAS     │ NAS +    │
│ básica  │ Email    │ +  Base D. │ +        │ Config   │ Portal   │
│ online  │          │            │ Calendar │          │ Clientes │
└─────────┴──────────┴────────────┴──────────┴──────────┴──────────┘
 1-7 días  8-14 días  15-30 días   30-60 días 60-90 días 90-120 días
```

---

## 🚀 FASE 1: PUBLICACIÓN INICIAL (Semanas 1-2)

### **Objetivo:** Página web online y funcional

```
SEMANA 1 (2-8 de enero)
├── Día 1-2
│   ├── [ ] Crear cuenta Netlify
│   ├── [ ] Personalizar datos de contacto (teléfono, email)
│   ├── [ ] Agregar favicon
│   ├── [ ] Optimizar metadatos SEO
│   └── [ ] Pruebas locales completas
│
├── Día 3-4
│   ├── [ ] Publicar en Netlify
│   ├── [ ] Verificar que todo funciona online
│   ├── [ ] Configurar dominio temporal
│   └── [ ] Primera ronda de testing
│
└── Día 5-7
    ├── [ ] Agregar más proyectos estáticos
    ├── [ ] Mejorar descripciones de servicios
    ├── [ ] Testing en móvil
    ├── [ ] Compartir URL con amigos/familia
    └── [ ] Recoger feedback

SEMANA 2 (9-15 de enero)
├── [ ] Integrar servicio de email (Formspree o EmailJS)
├── [ ] Hacer que formulario envíe emails REALES
├── [ ] Agregar validaciones de formulario
├── [ ] Testing del flujo completo
├── [ ] Mejorar UX/UI basado en feedback
├── [ ] Publicar versión mejorada
├── [ ] SEO básico (Google Search Console)
└── [ ] Primeros leads/contactos reales

ENTREGABLES:
✅ Página web online en Netlify
✅ Dominio temporal funcional (midominio.netlify.app)
✅ Formulario que ENVÍA emails reales
✅ Primeras visitas reales
✅ Feedback inicial de mercado
```

---

## 🔧 FASE 2: BACKEND E INTEGRACIÓN (Semanas 3-4 + Mes 2)

### **Objetivo:** Sistema dinámico con citas y calendario

```
SEMANA 3-4 (16-29 de enero)
├── Día 1-3: SETUP
│   ├── [ ] Instalar Node.js en NAS
│   ├── [ ] Instalar PostgreSQL en NAS
│   ├── [ ] Instalar Git en NAS
│   ├── [ ] Configurar acceso SSH
│   └── [ ] Crear estructura de carpetas
│
├── Día 4-7: BACKEND BÁSICO
│   ├── [ ] Crear API REST (Express.js)
│   ├── [ ] Conectar a base de datos
│   ├── [ ] Endpoints básicos:
│   │   ├── POST /api/contactos (recibir contactos)
│   │   ├── GET /api/citas (listar citas)
│   │   └── POST /api/citas (crear cita)
│   ├── [ ] JWT para autenticación
│   └── [ ] Testing con Postman
│
├── Día 8-10: INTEGRACIÓN CALENDARIO
│   ├── [ ] Obtener credentials Google Calendar
│   ├── [ ] Conectar API Google
│   ├── [ ] Sincronizar citas bidireccional
│   ├── [ ] Testing de conflictos horarios
│   └── [ ] Confirmación automática de citas
│
└── Día 11-14: NOTIFICACIONES
    ├── [ ] Integrar SendGrid
    ├── [ ] Emails automáticos (bienvenida, confirmación, recordatorio)
    ├── [ ] Configurar plantillas de email
    ├── [ ] Testing de entrega
    └── [ ] Logs de notificaciones

MES 2 (Febrero)
├── Semana 1:
│   ├── [ ] Agregar más campos a formulario
│   ├── [ ] Validaciones avanzadas
│   ├── [ ] Captcha anti-spam
│   ├── [ ] Rate limiting en API
│   └── [ ] Pruebas de carga
│
├── Semana 2:
│   ├── [ ] Dashboard básico (solo lectura)
│   ├── [ ] Ver contactos recibidos
│   ├── [ ] Ver citas agendadas
│   ├── [ ] Estadísticas básicas (visitantes, contactos)
│   └── [ ] Exportar datos (CSV/PDF)
│
├── Semana 3:
│   ├── [ ] Blog/Noticias (crear post)
│   ├── [ ] Editor simple de contenido
│   ├── [ ] Publicar/Despublicar posts
│   ├── [ ] Comentarios en posts (opcional)
│   └── [ ] Integración en página web
│
└── Semana 4:
    ├── [ ] Mejorar seguridad API
    ├── [ ] HTTPS en NAS (certificado Let's Encrypt)
    ├── [ ] Firewall configurado
    ├── [ ] Backup automático configurado
    ├── [ ] Monitoreo de salud del sistema
    └── [ ] Testing de seguridad (OWASP)

ENTREGABLES:
✅ Backend API completo funcionando
✅ Base de datos con todas las transacciones
✅ Calendario sincronizado con Google
✅ Notificaciones por email automáticas
✅ Dashboard básico
✅ Blog funcional
✅ Primera línea de defensa de seguridad
✅ Sistema de backup automático
```

---

## 🛠️ FASE 3: NAS Y PORTAL CLIENTES (Mes 3 + Mes 4)

### **Objetivo:** Infraestructura completa y áreas de clientes

```
MES 3 (Marzo)
├── SEMANA 1: COMPRA E INSTALACIÓN NAS
│   ├── [ ] Investigar modelos (Synology DS920+ / DS420+)
│   ├── [ ] Cotizar en 2-3 proveedores
│   ├── [ ] Comparar con presupuestos
│   ├── [ ] Compra de:
│   │   ├── NAS (4 bahías)
│   │   ├── 2x Discos 8TB (RAID 1)
│   │   ├── SAI/UPS 2000VA
│   │   └── Cables, conectores
│   ├── [ ] Recepción y desempaque
│   └── [ ] Instalación física
│
├── SEMANA 2: CONFIGURACIÓN NAS
│   ├── [ ] Instalación de discos en RAID 1
│   ├── [ ] Configuración DSM (Synology OS)
│   ├── [ ] Creación de volúmenes
│   ├── [ ] Estructura de carpetas:
│   │   ├── /clientes
│   │   ├── /proyectos
│   │   ├── /documentacion_tecnica
│   │   ├── /precios_tarifas
│   │   └── /backup
│   ├── [ ] Configuración de RAID
│   ├── [ ] Actualización de firmware
│   └── [ ] Primeras pruebas
│
├── SEMANA 3: SEGURIDAD Y RESPALDO
│   ├── [ ] Instalación SAI/UPS
│   ├── [ ] Configuración de apagado ordenado
│   ├── [ ] Firewall Synology
│   ├── [ ] Creación de usuarios:
│   │   ├── Admin (tú)
│   │   ├── Usuarios de clientes
│   │   └── Backup automático
│   ├── [ ] Permisos granulares
│   ├── [ ] Encriptación de carpetas
│   ├── [ ] Configuración VPN (OpenVPN)
│   ├── [ ] Certificado SSL (Let's Encrypt)
│   └── [ ] Testing de acceso remoto
│
└── SEMANA 4: BACKUP Y MONITOREO
    ├── [ ] Instalación Hyper Backup
    ├── [ ] Configuración de backup a AWS S3
    ├── [ ] Programación automática (3 AM diario)
    ├── [ ] Prueba de restauración
    ├── [ ] Configuración de alertas
    ├── [ ] Logs de auditoría
    ├── [ ] Script de verificación diaria
    └── [ ] Testing de recuperación ante desastre

MES 4 (Abril)
├── SEMANA 1: BACKEND - GESTIÓN DE ARCHIVOS
│   ├── [ ] Crear endpoints para archivos:
│   │   ├── POST /api/upload (subir archivo)
│   │   ├── GET /api/files (listar archivos)
│   │   ├── DELETE /api/files/:id (eliminar)
│   │   └── GET /api/download/:id (descargar)
│   ├── [ ] Validación de tipos de archivo
│   ├── [ ] Validación de tamaño máximo
│   ├── [ ] Integración con NAS local
│   ├── [ ] Metadata en base de datos
│   ├── [ ] Testing de carga/descarga
│   └── [ ] Logging de accesos
│
├── SEMANA 2: PORTAL DE CLIENTES (PARTE 1)
│   ├── [ ] Página de login segura
│   ├── [ ] Recuperación de contraseña
│   ├── [ ] 2FA opcional
│   ├── [ ] Dashboard personal:
│   │   ├── Ver proyectos propios
│   │   ├── Ver documentos compartidos
│   │   ├── Historial de trabajos
│   │   └── Citas agendadas
│   ├── [ ] Área de descarga de documentos
│   ├── [ ] Historial de descargas
│   ├── [ ] Auditoría completa
│   └── [ ] Testing con clientes reales
│
├── SEMANA 3: PORTAL DE CLIENTES (PARTE 2)
│   ├── [ ] Chat o formulario de contacto directo
│   ├── [ ] Solicitud de presupuestos
│   ├── [ ] Seguimiento de estado (En espera/Presupuestado/Aceptado/En obra/Completado)
│   ├── [ ] Notificaciones de cambio de estado
│   ├── [ ] Galería de fotos del proyecto
│   ├── [ ] Descarga de factura (si existe)
│   ├── [ ] Perfil del cliente (editable)
│   ├── [ ] Testing completo E2E
│   └── [ ] Capacitación de clientes
│
└── SEMANA 4: ADMIN + FINALIZACIÓN
    ├── [ ] Panel de administración completo:
    │   ├── Gestión de usuarios
    │   ├── Gestión de clientes
    │   ├── Gestión de proyectos
    │   ├── Gestión de archivos
    │   ├── Ver logs/auditoría
    │   ├── Estadísticas avanzadas
    │   ├── Exportar reportes
    │   └── Configuración del sistema
    ├── [ ] App móvil básica:
    │   ├── Notificaciones push
    │   ├── Ver citas
    │   ├── Ver contactos recibidos
    │   ├── Chat con clientes
    │   └── Acceso a documentos
    ├── [ ] Testing de carga completo
    ├── [ ] Optimización de performance
    ├── [ ] Documentación de usuario
    ├── [ ] Soporte técnico básico
    ├── [ ] Go-live final
    ├── [ ] Capacitación personal
    └── [ ] Evaluación de mejoras futuras

ENTREGABLES:
✅ NAS completamente operativa y segura
✅ Portal privado de clientes
✅ Sistema de gestión de archivos
✅ Área descarga segura para clientes
✅ Panel de administración
✅ App móvil básica
✅ Backup automático a cloud
✅ Sistema completamente auditado
✅ Documentación completa
✅ Sistema listo para producción
```

---

## 📋 Dependencias y Prerequisitos

### **Semana 1:**
```
✅ Acceso a Netlify (crear cuenta)
✅ Acceso a email verificado
✅ Navegador moderno
✅ 2-3 horas de tiempo
```

### **Semana 2-4:**
```
✅ Completar Semana 1
✅ Cuenta en SendGrid (gratis)
✅ Cuenta en Google Cloud (para Calendar API)
✅ Postman instalado (para testing)
✅ 4-6 horas/semana de tiempo
```

### **Mes 2:**
```
✅ Completar Semana 2-4
✅ NAS en forma (instalada pero no necesita estar lista)
✅ 6-8 horas/semana de tiempo
✅ Posible: desarrollador freelance (si no quieres hacerlo tú)
```

### **Mes 3:**
```
✅ Completar Mes 2
✅ Presupuesto para NAS ($1,200-1,500)
✅ Presupuesto para SAI ($200-300)
✅ Espacio físico en oficina
✅ 8-10 horas/semana de tiempo
```

### **Mes 4:**
```
✅ NAS instalada y operativa
✅ Backup a cloud configurado
✅ 8-10 horas/semana de tiempo
✅ Posible: freelancer para app móvil
```

---

## 💰 PRESUPUESTO DESGLOSADO

```
FASE 1: PUBLICACIÓN
├── Dominio temporal        $0      (gratis en Netlify)
├── Hosting (Netlify)       $0      (gratis para HTML puro)
├── Email (SendGrid)        $0      (100 gratis/día)
└── SUBTOTAL FASE 1         $0
    (Ahorro: Tu tiempo = inversión)

FASE 2: BACKEND
├── Servidor en NAS         $0      (reutilizas mismo hardware)
├── Base de datos           $0      (PostgreSQL gratis)
├── Google Calendar API     $0      (gratis)
├── SendGrid completo       $0-15   (o pago por volumen después)
├── Certificados SSL        $0      (Let's Encrypt)
└── SUBTOTAL FASE 2         $0-15
    (Backend es software = bajo costo)

FASE 3: INFRAESTRUCTURA NAS
├── NAS Synology DS920+     $600    (4 bahías)
├── 2x Disco 8TB (RAID 1)   $700    (redundancia)
├── SAI/UPS 2000VA          $250    (protección contra cortes)
├── Cables/Instalación      $50
├── AWS S3 Backup           $30/mes (100 GB backup mensual)
└── SUBTOTAL FASE 3         $1,630 + $30/mes

MANTENIMIENTO MENSUAL
├── Dominio propio (futuro) $10/año (~$1/mes)
├── AWS S3 Backup           $30/mes
├── SendGrid (si alto vol.) $20-50/mes
├── Internet (ya tienes)    $0
├── Otros servicios         $0
└── TOTAL MENSUAL           $31-50/mes

INVERSIÓN TOTAL
├── Inicial                 $1,630
├── Primeros 3 meses       $1,630 + ($33 × 3) = $1,729
├── Primer año             $1,630 + ($40 × 12) = $2,110
└── Escalable a 2+ años
```

---

## 🎯 Hitos Clave

```
✅ DÍA 2 ENERO    : Página web online en Netlify
✅ DÍA 8 ENERO    : Formulario enviando emails reales
✅ DÍA 15 ENERO   : Primeros clientes contactando
✅ DÍA 30 ENERO   : Backend y calendario funcionando
✅ DÍA 45 FEBRERO  : Blog y dashboard operativos
✅ DÍA 60 MARZO   : NAS instalada y funcionando
✅ DÍA 90 ABRIL   : Portal de clientes completo
✅ DÍA 120 MAYO   : Sistema en producción completo
```

---

## 📊 Métricas de Éxito

```
SEMANA 1-2:
├── Página online ✅
├── +50 visitantes ✅
├── +5 contactos ✅
└── Feedback positivo ✅

MES 1:
├── +500 visitantes ✅
├── +20 contactos ✅
├── +3 citas/presupuestos ✅
└── 0 tiempos de inactividad ✅

MES 2-3:
├── +2,000 visitantes ✅
├── +100 contactos ✅
├── +15 presupuestos ✅
├── +50% conversión ✅
├── Sistema sin fallos ✅
└── NAS operativa ✅

MES 4+:
├── Sistema estable 99.9% uptime ✅
├── Portal clientes con +30 usuarios ✅
├── Backup automático verificado ✅
├── Seguridad validada ✅
└── Listo para escalabilidad ✅
```

---

## ⚠️ Riesgos y Mitigación

```
RIESGO: Falta de experiencia técnica
MITRACIÓN: Documentación paso a paso + soporte consultor

RIESGO: Retrasos en desarrollo
MITIGACIÓN: Fases paralelas, freelancers si es necesario

RIESGO: Datos perdidos antes de NAS
MITIGACIÓN: Backup manual semanal a Google Drive (mes 1-2)

RIESGO: NAS falla antes de backup cloud
MITIGACIÓN: RAID 1 protege, AWS S3 como 2º nivel

RIESGO: Cambios de proveedor (SendGrid, AWS)
MITIGACIÓN: Usar APIs estándar, fácil de cambiar

RIESGO: Seguridad comprometida
MITIGACIÓN: Auditoría externa en mes 4, certificaciones SSL
```

---

## 📞 Soporte Recomendado

```
FASES 1-2: Yo te guío (chat/documentación)
FASE 3: Técnico Synology (instalación NAS)
FASE 4: Freelancer backend (si lo necesitas)
SIEMPRE: Comunidades online (Stack Overflow, Reddit)
```

---

**Este roadmap es ambicioso pero realizable. Cada fase agrega valor inmediato.**

Documento actualizado: 2 de enero de 2026
