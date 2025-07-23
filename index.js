// Este código se ejecuta una vez que todo el contenido del DOM (Document Object Model) ha sido cargado.
// Esto asegura que podemos acceder a todos los elementos HTML antes de intentar manipularlos.
document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica del Menú Hamburguesa ---
    // Seleccionamos el icono de hamburguesa y los enlaces de navegación.
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links'); // Asegúrate de que este selector coincida con tu HTML

    // Verificamos que ambos elementos existan antes de añadir los escuchadores de eventos.
    if (hamburger && navLinks) {
        // Al hacer clic en el icono de hamburguesa, alternamos la clase 'active' en los enlaces de navegación.
        // Esto controlará si el menú se muestra o se oculta (definido en tu CSS).
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active'); // Opcional: para animar el ícono de hamburguesa
        });

        // Cerramos el menú hamburguesa si el usuario hace clic en un enlace de navegación,
        // esto es útil especialmente en dispositivos móviles.
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Solo si el ancho de la ventana es menor o igual a 768px (típicamente móviles y tablets).
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active'); // Oculta el menú.
                    hamburger.classList.remove('active'); // Restaura el ícono de hamburguesa
                }
            });
        });
    }

    // --- Lógica del Carrusel (Hero Section) ---
    // Obtenemos el contenedor de imágenes del carrusel.
    const carouselImages = document.querySelector('.carousel-images');
    // Verificamos si existe para evitar errores.
    if (carouselImages) {
        // La animación del carrusel ya se maneja completamente con CSS (`@keyframes slide`).
        // Si necesitaras controlarlo con JS (ej. botones de siguiente/anterior), lo harías aquí.
        // Para tu caso, el CSS es suficiente y más performante.
    }

    // --- Datos de Productos (Simulación de una "Base de Datos") ---
    // Este array contiene la información detallada de cada producto.
    // Cada objeto en el array representa un producto con su ID, nombre, descripción, imagen y precio.
    const productsData = [
        {
            id: 'product1',
            name: 'Madera de Roble Premium',
            description: 'Roble europeo de la más alta calidad, ideal para muebles finos, pisos y acabados interiores. Su dureza y hermosa veta lo hacen perfecto para proyectos duraderos y estéticos.',
            image: './resources/imagen4.png',
            price: 'USD 50/pie cúbico'
        },
        {
            id: 'product2',
            name: 'Madera de Pino Nacional',
            description: 'Pino de primera calidad, versátil y fácil de trabajar, excelente para construcción ligera, molduras y proyectos de carpintería general.',
            image: './resources/imagen3.png',
            price: 'USD 20/pie cúbico'
        },
        {
            id: 'product3',
            name: 'Tablero Contrachapado de Abedul',
            description: 'Tablero de contrachapado de abedul de múltiples capas, robusto y estable. Ideal para gabinetes, estanterías y aplicaciones donde se requiere resistencia y un acabado liso y uniforme.',
            image: './resources/imagen3.png',
            price: 'USD 70/hoja'
        },
        {
            id: 'product4',
            name: 'Vigas de Algarrobo Rústico',
            description: 'Vigas de algarrobo macizo con un acabado rústico y natural, perfectas para estructuras decorativas, pérgolas o elementos arquitectónicos que busquen un toque auténtico y robusto.',
            image: './resources/imagen3.png',
            price: 'USD 80/metro lineal'
        },
        {
            id: 'product5',
            name: 'Listones de Cedro Aromático',
            description: 'Listones de cedro con su característico aroma y resistencia natural a insectos y humedad. Ideales para revestimientos de armarios, cajas de almacenamiento o decoraciones que busquen un ambiente fresco y protegido.',
            image: './resources/imagen3.png',
            price: 'USD 15/listón'
        },
        {
            id: 'product6',
            name: 'Deck de Eucalipto Grandis',
            description: 'Madera de eucalipto grandis tratada para exteriores, excelente para decks, pasarelas y bordes de piscina. Ofrece alta resistencia a la intemperie y un color atractivo que mejora con el tiempo.',
            image: './resources/imagen3.png',
            price: 'USD 35/m²'
        },
        {
            id: 'product7',
            name: 'Puertas de Fresno Macizo',
            description: 'Puertas interiores de fresno macizo con diseño moderno y líneas limpias. Ofrecen aislamiento acústico y térmico, y una durabilidad excepcional para un uso prolongado.',
            image: './resources/imagen3.png',
            price: 'USD 450/unidad'
        },
        {
            id: 'product8',
            name: 'Molduras Decorativas de Pino Finger Joint',
            description: 'Molduras pre-primadas de pino finger joint, listas para pintar y fáciles de instalar. Perfectas para embellecer techos, paredes y zócalos, aportando un acabado profesional y estético.',
            image: './resources/imagen3.png',
            price: 'USD 5/metro'
        },
        {
            id: 'product9',
            name: 'Tablones de Guatambú',
            description: 'Madera de guatambú, conocida por su color claro y veta sutil. Ideal para carpintería fina, instrumentos musicales y artesanías donde se busca un acabado limpio y delicado.',
            image: './resources/imagen3.png',
            price: 'USD 40/pie cúbico'
        },
        {
            id: 'product10',
            name: 'Postes Tratados para Exteriores',
            description: 'Postes de madera tratados con CCA para resistir la humedad, insectos y hongos. Indispensables para cercas, soportes de jardín, estructuras al aire libre y proyectos de paisajismo.',
            image: './resources/imagen3.png',
            price: 'USD 25/unidad'
        },
        {
            id: 'product11',
            name: 'Pisos Flotantes de Lenga',
            description: 'Pisos flotantes de lenga, una madera patagónica con hermosos tonos rojizos y gran calidez. Fácil instalación y gran resistencia al tránsito, ideal para interiores residenciales y comerciales.',
            image: './resources/imagen3.png',
            price: 'USD 60/m²'
        },
        {
            id: 'product12',
            name: 'Encofrados de Fenólico',
            description: 'Tableros fenólicos de alta resistencia y durabilidad, diseñados para encofrados de hormigón. Su superficie lisa y robustez permiten múltiples usos en obra, optimizando el rendimiento.',
            image: './resources/imagen3.png',
            price: 'USD 45/hoja'
        },
        {
            id: 'product13',
            name: 'Maderas Duras para Esculturas',
            description: 'Selección de maderas duras exóticas como lapacho o quebracho, perfectas para proyectos de escultura y torneado artístico. Poseen gran densidad, resistencia y belleza natural.',
            image: './resources/imagen3.png',
            price: 'USD 75/kg'
        },
        {
            id: 'product14',
            name: 'Paneles Acústicos de Viruta de Madera',
            description: 'Paneles fonoabsorbentes fabricados con virutas de madera prensada. Ideales para mejorar la acústica en estudios, oficinas o salas de estar, combinando funcionalidad y un diseño moderno.',
            image: './resources/imagen3.png',
            price: 'USD 90/panel'
        },
        {
            id: 'product15',
            name: 'Adhesivos para Madera Profesional',
            description: 'Gama de adhesivos de alta resistencia para madera, aptos para uso en carpintería fina, laminado y ensamblaje de estructuras. Ofrecen secado rápido y un agarre fuerte y duradero.',
            image: './resources/imagen3.png',
            price: 'USD 12/litro'
        },
        {
            id: 'product16',
            name: 'Barnices y Protectores UV',
            description: 'Línea de barnices y protectores con filtro UV para maderas interiores y exteriores. Protege eficazmente contra la humedad, hongos, insectos y decoloración, realzando la belleza natural de la madera.',
            image: './resources/imagen3.png',
            price: 'USD 30/litro'
        },
        {
            id: 'product17',
            name: 'Leña Seleccionada para Hogar',
            description: 'Leña seca de alta calidad, seleccionada para un encendido fácil y una combustión prolongada y eficiente. Ideal para chimeneas, estufas y asadores, garantizando calor y buen rendimiento.',
            image: './resources/imagen3.png',
            price: 'USD 100/m³'
        },
        {
            id: 'product18',
            name: 'Tablas de Algarrobo para Asado',
            description: 'Tablas de algarrobo macizo con canales para jugos, perfectas para presentar y cortar carnes asadas. Son resistentes, de fácil limpieza y añaden un toque rústico a tus reuniones.',
            image: './resources/imagen3.png',
            price: 'USD 25/unidad'
        },
        {
            id: 'product19',
            name: 'Madera para Artesanías y Maquetas',
            description: 'Variedad de pequeñas piezas de madera blanda y dura, ideal para proyectos de artesanía, modelismo y maquetas. Fácil de cortar, lijar y manipular para creaciones detalladas.',
            image: './resources/imagen3.png',
            price: 'USD 10/kit'
        },
        {
            id: 'product20',
            name: 'Servicio de Corte a Medida',
            description: 'Ofrecemos servicio de corte y cepillado de madera a medida según tus especificaciones. Garantizamos precisión y calidad para optimizar tu proyecto, reduciendo desperdicios y tiempo.',
            image: './resources/imagen3.png',
            price: 'Desde USD 5/corte'
        }
    ];

    // --- Lógica de Rellenado Dinámico de Tarjetas de Producto ---
    // Seleccionamos todas las tarjetas de producto en el catálogo.
    const catalogProductCards = document.querySelectorAll('.catalog-container .product-card');

    // Iteramos sobre cada tarjeta de producto.
    catalogProductCards.forEach(card => {
        // Obtenemos el 'data-id' de la tarjeta actual para vincularla con los datos del array 'productsData'.
        const productId = card.dataset.id;
        // Buscamos el producto correspondiente en nuestro array 'productsData'.
        const product = productsData.find(p => p.id === productId);

        // Si encontramos el producto en nuestros datos:
        if (product) {
            // Seleccionamos los elementos dentro de esta tarjeta específica.
            const productNameElement = card.querySelector('h3');
            const productDescriptionElement = card.querySelector('p');
            const productImageElement = card.querySelector('img');

            // Actualizamos el contenido de los elementos con la información del producto.
            if (productNameElement) {
                productNameElement.textContent = product.name; // Rellenamos el nombre del producto.
            }
            if (productDescriptionElement) {
                // Para la descripción en la tarjeta, es mejor mostrar un fragmento.
                // Usamos substring para mostrar los primeros 50 caracteres y añadimos "..."
                // Puedes ajustar el número de caracteres o incluso añadir un campo 'shortDescription' en 'productsData'.
                productDescriptionElement.textContent = product.description.substring(0, 50) + '...';
            }
            if (productImageElement) {
                productImageElement.src = product.image; // Actualizamos la imagen.
                productImageElement.alt = product.name; // Mejoramos la accesibilidad con el texto alternativo.
            }
        }
    });


    // --- Lógica del Modal de Producto ---
    // Obtenemos referencias a los elementos del modal en el DOM.
    const modal = document.getElementById('productModal');
    const closeButton = document.querySelector('.close-button');
    const modalProductName = document.getElementById('modalProductName');
    const modalProductDescription = document.getElementById('modalProductDescription');
    const modalProductImage = document.getElementById('modalProductImage');
    const modalProductPrice = document.getElementById('modalProductPrice');
    const modalContactButton = document.getElementById('modalContactButton');

    // Añadimos un escuchador de eventos a CADA tarjeta de producto para abrir el modal.
    // Usamos 'catalogProductCards' que ya contiene todas las tarjetas del catálogo.
    catalogProductCards.forEach((card) => {
        card.addEventListener('click', () => {
            const productId = card.dataset.id; // Obtenemos el ID del producto de la tarjeta clicada.
            const product = productsData.find(p => p.id === productId); // Buscamos los datos del producto.

            // Si encontramos el producto, rellenamos el modal con su información.
            if (product) {
                modalProductName.textContent = product.name;
                modalProductDescription.textContent = product.description;
                modalProductImage.src = product.image;
                modalProductImage.alt = product.name; // Accesibilidad
                modalProductPrice.textContent = product.price; // Mostramos el precio.

                // Configuramos el botón "Consultar" del modal para enviar un mensaje de WhatsApp
                // pre-rellenado con el nombre del producto.
                modalContactButton.onclick = () => {
                    // Asegúrate de usar el número de teléfono con el código de país.
                    // El texto del mensaje se codifica para URL.
                    window.location.href = `https://wa.me/+5492616984285?text=Hola,%20quisiera%20consultar%20sobre%20el%20producto:%20${encodeURIComponent(product.name)}.`;
                };

                // Mostramos el modal (cambiamos su estilo de 'display: none' a 'display: flex').
                modal.style.display = 'flex';
            }
        });
    });

    // Cerrar el modal al hacer clic en el botón de la "X".
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Ocultamos el modal.
    });

    // Cerrar el modal al hacer clic fuera de su contenido (en el fondo oscuro).
    window.addEventListener('click', (event) => {
        if (event.target === modal) { // Si el clic fue directamente sobre el modal (no su contenido).
            modal.style.display = 'none'; // Ocultamos el modal.
        }
    });

    // --- Lógica del Formulario de Contacto (EmailJS) ---
    // Obtenemos el botón de envío del formulario.
    // Asegúrate de que el ID del botón sea 'button' en tu HTML.
    const btn = document.getElementById('button');
    const contactForm = document.getElementById('contactForm');

    // Añadimos un escuchador de eventos para cuando el formulario de contacto sea enviado.
    if (contactForm && btn) { // Verificamos que los elementos existan
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitamos que el formulario se envíe de la manera tradicional (recargando la página).

            btn.value = 'Enviando...'; // Cambiamos el texto del botón para indicar que se está enviando.
            btn.disabled = true; // Deshabilitar el botón para evitar múltiples envíos

            // IDs de servicio y plantilla de EmailJS.
            const serviceID = 'service_ji1x7vk';
            const templateID_to_me = 'template_1jvjkal';
            const templateID_auto_reply = 'template_ed74urh';

            // Obtener los valores del formulario
            const form = this; // 'this' se refiere al formulario en este contexto
            const nombre = form.querySelector('[name="nombre"]').value;
            const email = form.querySelector('[name="email"]').value;
            const mensaje = form.querySelector('[name="mensaje"]').value;

            // Crear un objeto con los parámetros que quieres enviar a la plantilla que te llega a ti.
            // Asegúrate de que los nombres de las propiedades coincidan con los placeholders en tu plantilla.
            const templateParams_to_me = {
                to_name: 'Maderera Maderitas', // Aquí defines el nombre del destinatario (tú o tu empresa)
                nombre: nombre, // Este es el nombre del remitente del formulario
                email: email,    // Este es el email del remitente (para que lo tengas en tu mail)
                mensaje: mensaje // Este es el mensaje del remitente
            };

            // Parámetros para la plantilla de respuesta automática al cliente
            const params_auto_reply = {
                nombre: nombre, // Nombre del cliente
                email: email,    // Correo del cliente (destinatario de la respuesta automática)
                mensaje: mensaje // Mensaje del cliente
                // EmailJS se encargará de usar 'email' como el 'to' address automáticamente si lo configuras en la plantilla
            };

            // 1. Envía el correo a tu casilla
            emailjs.send(serviceID, templateID_to_me, templateParams_to_me)
                .then(() => {
                    // 2. Si el primer envío fue exitoso, envía la respuesta automática al cliente
                    return emailjs.send(serviceID, templateID_auto_reply, params_auto_reply);
                })
                .then(() => {
                    // Ambos envíos fueron exitosos
                    alert('¡Mensaje enviado con éxito! Recibirás una copia en tu correo.');
                    form.reset(); // Limpia el formulario
                    btn.value = "Enviar Mensaje";
                    btn.disabled = false; // Habilitar el botón de nuevo
                })
                .catch((err) => {
                    // Si alguno de los envíos falla
                    alert('¡Oops! Algo salió mal al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
                    console.error('EmailJS Error:', err); // Esto te dará más detalles en la consola del navegador.
                    btn.value = "Enviar Mensaje";
                    btn.disabled = false; // Habilitar el botón de nuevo
                });
        });
    }


    // --- Actualización automática del año en el copyright del footer ---
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

}); // Fin de DOMContentLoaded