# 🌳 Maderera Maderitas 🪵

![Maderera Maderitas - Logo](https://via.placeholder.com/150x80?text=Maderitas+Logo) ¡Bienvenido al repositorio de **Maderera Maderitas**! Este proyecto es un sitio web moderno y responsivo diseñado para una maderera, presentando sus productos (catálogo), información sobre la empresa (nosotros, nuestras maderas) y opciones de contacto.

## 🚀 Demo en Vivo

Puedes ver el proyecto desplegado y funcionando en:
[https://madereramaderitas.vercel.app/](https://madereramaderitas.vercel.app/) ## ✨ Características Principales

* **Diseño Responsivo:** Adaptado a cualquier tamaño de pantalla (escritorio, tabletas, móviles).
* **Carrusel de Imágenes Dinámico:** Una sección hero con un carrusel de imágenes para una presentación visual atractiva.
* **Catálogo de Productos Interactivo:** Visualización de productos con detalles accesibles mediante un modal al hacer clic.
* **Secciones Informativas:** "Sobre Nosotros" y "Nuestras Maderas" para brindar información relevante a los usuarios.
* **Formulario de Contacto:** Un formulario para que los clientes puedan enviar consultas directamente (implementado con EmailJS).
* **Ubicación Integrada:** Mapa de Google Maps para mostrar la ubicación de la maderera.
* **Integración con Redes Sociales:** Enlaces a las principales plataformas.
* **Botón Flotante de WhatsApp:** Acceso rápido a la comunicación directa con la maderera.
* **Política de Privacidad:** Sección dedicada a las políticas de privacidad, importante para la transparencia y cumplimiento normativo.
* **Código Organizado.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura y contenido del sitio web.
* **CSS3:** Estilos y diseño responsivo, incluyendo animaciones y transiciones.
* **JavaScript (Vanilla JS):** Interactividad del sitio, como el carrusel de imágenes, la funcionalidad del menú hamburguesa y los modales.
* **EmailJS:** Para el envío de correos electrónicos a través del formulario de contacto sin necesidad de un backend.
* **Google Maps Embed:** Integración del mapa de ubicación.
* **Font Awesome (opcional si usas íconos externos):** Para íconos sociales u otros elementos visuales.

## 📂 Estructura del Proyecto:
├── assets/
│   ├── css/          # Archivos CSS
│   │   └── style.css
│   ├── img/          # Imágenes del proyecto
│   └── js/           # Archivos JavaScript
│       └── script.js
├── index.html        # Página principal
├── politicas.html    # Página de Políticas de Privacidad
└── README.md         # Este archivo

## ⚙️ Configuración y Uso Local

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/LuMarka/MadereraMaderitas.git](https://github.com/LuMarka/MadereraMaderitas.git)
    ```
2.  **Navega al directorio del proyecto:**
    ```bash
    cd MadereraMaderitas
    ```
3.  **Abre `index.html` en tu navegador:**
    Simplemente haz doble clic en el archivo `index.html` en tu explorador de archivos, o ábrelo con tu navegador web preferido.

### Configuración de EmailJS (para el formulario de contacto)

Para que el formulario de contacto funcione correctamente, necesitarás configurar EmailJS:

1.  **Regístrate en [EmailJS](https://www.emailjs.com/)** si aún no tienes una cuenta.
2.  **Añade un nuevo servicio de correo electrónico** (ej. Gmail, Outlook, etc.).
3.  **Crea una nueva plantilla de correo electrónico** (`Email Templates`) que EmailJS utilizará para enviar los datos del formulario. Asegúrate de que los nombres de los campos en tu plantilla coincidan con los `name` de los inputs de tu formulario HTML (ej., `user_name`, `user_email`, `message`).
4.  **Copia tu `Service ID`, `Template ID` y `Public Key`**.
5.  **Abre `assets/js/script.js`** y busca la función de envío de correo. Deberás reemplazar los placeholders con tus credenciales:

    ```javascript
    // Ejemplo de cómo se vería la configuración en tu JS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_PUBLIC_KEY")
        .then(function(response) {
            // ...
        }, function(error) {
            // ...
        });
    ```
---

**© 2025 Maderera Maderitas.** Todos los derechos reservados.
