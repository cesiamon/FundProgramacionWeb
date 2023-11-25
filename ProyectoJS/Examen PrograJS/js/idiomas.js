

// link
const bandera = document.querySelectorAll('.bandera');
// const langEl = document.querySelector('.langWrap');

// Inicio
const inicio = document.querySelector('.inicio');


// Sección de Servicios
const servicios = document.querySelector('.servicios');
const sobreNosotros = document.querySelector('.sobreNosotros');
const galeria = document.querySelector('.galeria');
const contacto = document.querySelector('.contacto');
const cotizaPreciosHeader = document.querySelector('.cotizaPreciosHeader');
const AgendaCitaHeader = document.querySelector('.AgendaCitaHeader');
const headerParrafo = document.querySelector('.headerParrafo');
const HeaderAgendaButton = document.querySelector('.HeaderAgendaButton');

// Sección de Filosofía
const filosofiaH1 = document.querySelector('.filosofiaH1');
const filosofiaDescription = document.querySelector('.filosofiaDescription');
const filosofiaButton = document.querySelector('.filosofiaButton');

// Sección de Nuestros Resultados
const nuestrosResultadosCounter = document.querySelector('.nuestrosResultadosCounter');
const clientesSatisfechosCounter = document.querySelector('.clientesSatisfechosCounter');
const reconocimientosCounter = document.querySelector('.reconocimientosCounter');
const horasTrabajoCounter = document.querySelector('.horasTrabajoCounter');
const procedimientosCounter = document.querySelector('.procedimientosCounter');

// Sección de Servicios Dentales
const serviciosH1 = document.querySelector('.serviciosH1');
const generalH5 = document.querySelector('.generalH5');
const generalP = document.querySelector('.generalP');
const cosmeticoH5 = document.querySelector('.cosmeticoH5');
const cosmeticoP = document.querySelector('.cosmeticoP');
const preventivoH5 = document.querySelector('.preventivoH5');
const preventivoP = document.querySelector('.preventivoP');
const serviciosButton1 = document.querySelector('.serviciosButton1');
const serviciosButton2 = document.querySelector('.serviciosButton2');
const serviciosButton3 = document.querySelector('.serviciosButton3');

// Sección de Últimas Tecnologías
const UltimasTecH2 = document.querySelector('.UltimasTecH2');
const robotp = document.querySelector('.robotp');
const robotH4 = document.querySelector('.robotH4');
const CADH4 = document.querySelector('.CADH4');
const CADp = document.querySelector('.CADp');
const escanerH4 = document.querySelector('.escanerH4');
const escanerp = document.querySelector('.escanerp');
const axialH4 = document.querySelector('.axialH4');
const axialp = document.querySelector('.axialp');
const radiografiah4 = document.querySelector('.radiografiah4');
const radiografiap = document.querySelector('.radiografiap');
const piezasH4 = document.querySelector('.piezasH4');
const piezasp = document.querySelector('.piezasp');
const laserH4 = document.querySelector('.laserH4');
const laserp = document.querySelector('.laserp');
const ledH4 = document.querySelector('.ledH4');
const ledp = document.querySelector('.ledp');

// Sección de Financiamiento
const financiamientoH1 = document.querySelector('.financiamientoH1');
const financiamientoP1 = document.querySelector('.financiamientoP1');
const financiamientoP2 = document.querySelector('.financiamientoP2');
const financiamientoButton = document.querySelector('.financiamientoButton');

// Sección de Testimonios
const testimoniosH2 = document.querySelector('.testimoniosH2');
const testimoniosp = document.querySelector('.testimoniosp');

const testimonio1 = document.getElementById('testimonial1');
const quienEsTestimonio1 = document.querySelector('.quienEsTestimonio1');
const resenaTestimonio1 = document.querySelector('.resenaTestimonio1');

const quienEsTestimonio2 = document.querySelector('.quienEsTestimonio2');
const resenaTestimonio2 = document.querySelector('.resenaTestimonio2');

const quienEsTestimonio3 = document.querySelector('.quienEsTestimonio3');
const resenaTestimonio3 = document.querySelector('.resenaTestimonio3');

const quienEsTestimonio4 = document.querySelector('.quienEsTestimonio4');
const resenaTestimonio4 = document.querySelector('.resenaTestimonio4');

const quienEsTestimonio5 = document.querySelector('.quienEsTestimonio5');
const resenaTestimonio5 = document.querySelector('.resenaTestimonio5');

const direccionp = document.querySelector('.direccionp');
const telp = document.querySelector('.telp');
const correop = document.querySelector('.correop');

bandera.forEach( r => {

    console.log('entre!!', r)

    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');


inicio.textContent = changeLanguage[attr].inicio;
        
servicios.textContent = changeLanguage[attr].servicios; 
sobreNosotros.textContent = changeLanguage[attr].sobreNosotros;
galeria.textContent = changeLanguage[attr].galeria;
contacto.textContent = changeLanguage[attr].contacto;
cotizaPreciosHeader.textContent = changeLanguage[attr].cotizaPreciosHeader;
AgendaCitaHeader.textContent = changeLanguage[attr].AgendaCitaHeader;
headerParrafo.textContent = changeLanguage[attr].headerParrafo;
HeaderAgendaButton.textContent = changeLanguage[attr].HeaderAgendaButton;

filosofiaH1.textContent = changeLanguage[attr].filosofiaH1;
filosofiaDescription.textContent = changeLanguage[attr].filosofiaDescription;
filosofiaButton.textContent = changeLanguage[attr].filosofiaButton;

nuestrosResultadosCounter.textContent = changeLanguage[attr].nuestrosResultadosCounter;
clientesSatisfechosCounter.textContent = changeLanguage[attr].clientesSatisfechosCounter;
reconocimientosCounter.textContent = changeLanguage[attr].reconocimientosCounter;
horasTrabajoCounter.textContent = changeLanguage[attr].horasTrabajoCounter;
procedimientosCounter.textContent = changeLanguage[attr].procedimientosCounter;

serviciosH1.textContent = changeLanguage[attr].serviciosH1;
generalH5.textContent = changeLanguage[attr].generalH5;
generalP.textContent = changeLanguage[attr].generalP;
cosmeticoH5.textContent = changeLanguage[attr].cosmeticoH5;
cosmeticoP.textContent = changeLanguage[attr].cosmeticoP;
preventivoH5.textContent = changeLanguage[attr].preventivoH5;
preventivoP.textContent = changeLanguage[attr].preventivoP;
serviciosButton1.textContent = changeLanguage[attr].serviciosButton1;
serviciosButton2.textContent = changeLanguage[attr].serviciosButton2;
serviciosButton3.textContent = changeLanguage[attr].serviciosButton3;

UltimasTecH2.textContent = changeLanguage[attr].UltimasTecH2;
robotp.textContent = changeLanguage[attr].robotp;
robotH4.textContent = changeLanguage[attr].robotH4;
CADH4.textContent = changeLanguage[attr].CADH4;
CADp.textContent = changeLanguage[attr].CADp;
escanerH4.textContent = changeLanguage[attr].escanerH4;
escanerp.textContent = changeLanguage[attr].escanerp;
axialH4.textContent = changeLanguage[attr].axialH4;
axialp.textContent = changeLanguage[attr].axialp;
radiografiah4.textContent = changeLanguage[attr].radiografiah4;
radiografiap.textContent = changeLanguage[attr].radiografiap;
piezasH4.textContent = changeLanguage[attr].piezasH4;
piezasp.textContent = changeLanguage[attr].piezasp;
laserH4.textContent = changeLanguage[attr].laserH4;
laserp.textContent = changeLanguage[attr].laserp;
ledH4.textContent = changeLanguage[attr].ledH4;
ledp.textContent = changeLanguage[attr].ledp;

financiamientoH1.textContent = changeLanguage[attr].financiamientoH1;
financiamientoP1.textContent = changeLanguage[attr].financiamientoP1;
financiamientoP2.textContent = changeLanguage[attr].financiamientoP2;
financiamientoButton.textContent = changeLanguage[attr].financiamientoButton;

testimoniosH2.textContent = changeLanguage[attr].testimoniosH2;
testimoniosp.textContent = changeLanguage[attr].testimoniosp;

quienEsTestimonio1.textContent = changeLanguage[attr].quienEsTestimonio1;
resenaTestimonio1.textContent = changeLanguage[attr].resenaTestimonio1;

quienEsTestimonio2.textContent = changeLanguage[attr].quienEsTestimonio2;
resenaTestimonio2.textContent = changeLanguage[attr].resenaTestimonio2;

quienEsTestimonio3.textContent = changeLanguage[attr].quienEsTestimonio3;
resenaTestimonio3.textContent = changeLanguage[attr].resenaTestimonio3;

quienEsTestimonio4.textContent = changeLanguage[attr].quienEsTestimonio4;
resenaTestimonio4.textContent = changeLanguage[attr].resenaTestimonio4;

quienEsTestimonio5.textContent = changeLanguage[attr].quienEsTestimonio5;
resenaTestimonio5.textContent = changeLanguage[attr].resenaTestimonio5;

direccionp.textContent = changeLanguage[attr].direccionp;
telp.textContent = changeLanguage[attr].telp;
correop.textContent = changeLanguage[attr].correop;

    });
});


let changeLanguage = {
    "english": {
        "inicio": "Home",
        "servicios": "Services",
        "sobreNosotros": "About Us",
        "galeria": "Gallery",
        "contacto": "Contact",
        "cotizaPreciosHeader": "Quote Prices",
        "AgendaCitaHeader": "Book Now",
        "headerParrafo": "Personalized High-tech Dental Services",
        "HeaderAgendaButton": "Book Now",
        "filosofiaH1": "Our Philosophy",
        "filosofiaDescription": "Helping patients achieve dental health and beautiful smiles is a privilege and a responsibility. For over 20 years, my team and I have proudly provided the best dental experience in the Rogue Valley. Our comfort-focused approach is designed to meet the needs of you and your entire family.",
        "filosofiaButton": "Read more",
        "nuestrosResultadosCounter": "Our Results",
        "clientesSatisfechosCounter": "Satisfied Clients",
        "reconocimientosCounter": "Recognitions and Certifications",
        "horasTrabajoCounter": "Work Hours",
        "procedimientosCounter": "Total Procedures",
        "serviciosH1": "Services",
        "generalH5": "General",
        "generalP": "Discover our full range of general dental services designed to keep your smile healthy.",
        "cosmeticoH5": "Cosmetic",
        "cosmeticoP": "Transform your smile with our quality cosmetic dental services. Explore options to enhance dental aesthetics.",
        "preventivoH5": "Preventive",
        "preventivoP": "Prioritize your oral health with our preventive dental services. Learn how to keep your smile radiant in the long run.",
        "serviciosButton1": "Read more",
        "serviciosButton2": "Read more",
        "serviciosButton3": "Read more",
        "UltimasTecH2": "Explore our Cutting-Edge Market Technologies",
        "robotp": "Automation, Optimization, CAD-CAM system, orthodontic robot.",
        "robotH4": "Robotic Technology",
        "CADH4": "CAD-CAM Technology",
        "CADp": "In Dentistry specifically, it produces prosthetics, including crowns, veneers, onlays, fixed and removable prostheses, orthodontic devices, crowns on implants, among others.",
        "escanerH4": "Intraoral Scanner",
        "escanerp": "The intraoral scanner is one of the technologies in Dentistry that is portable and allows the Dentist to take three-dimensional optical impressions of the patient's mouth.",
        "axialH4": "Computed Tomography (CT)",
        "axialp": "Its three-dimensionality and precision allow determining with accuracy the space available to place the implant.",
        "radiografiah4": "Digital Radiography",
        "radiografiap": "Our digital radiography equipment allows obtaining an image with lower radiation exposure for the patient than with conventional techniques.",
        "piezasH4": "Handpieces",
        "piezasp": "The effectiveness of cutting is really a balance between speed and torque applied to the bur.",
        "laserH4": "Laser Treatments",
        "laserp": "The laser is another widely known technology in Dentistry, effective in cutting and treating soft tissues in your mouth.",
        "ledH4": "High-Power LED",
        "ledp": "High-power lamps, in the hands of a well-trained professional, enhance everyday dental practice.",
        "financiamientoH1": "Plans and Financing Options for New Patients",
        "financiamientoP1": "Our friendly staff will explain what to expect, provide you with payment and financing options, and answer all your questions.",
        "financiamientoP2": "Our entire team is committed to helping you prevent dental problems and achieve a healthy, beautiful, and confident smile.",
        "financiamientoButton": "Contact us",
        "testimoniosH2": "Testimonials",
        "testimoniosp": "Our clients adore us! Read what they have to say:",

        "quienEsTestimonio1": "Regular Customer",
        "resenaTestimonio1": "My smile completely changed at DentalCare. Exceptional attention, amazing results. Thank you for taking such good care of me!",

        "quienEsTestimonio2": "Dent Co. Founder",
        "resenaTestimonio2": "DentalCare made overcoming my fear easy. Personalized attention, efficient treatment. My oral health has never been better.",
        
        "quienEsTestimonio3": "Maximax CEO",
        "resenaTestimonio3": "My smile completely changed at DentalCare. Exceptional attention, amazing results. Thank you for taking such good care of me!",
        
        "quienEsTestimonio4": "Regular Customer",
        "resenaTestimonio4": "DentalCare made overcoming my fear easy. Personalized attention, efficient treatment. My oral health has never been better.",
        
        "quienEsTestimonio5": "Maximax CEO",
        "resenaTestimonio5": "My smile completely changed at DentalCare. Exceptional attention, amazing results. Thank you for taking such good care of me!",

        "direccionp": "Address: San Pedro, Montes de Oca, 300 meters south of Central Park.",
        "telp": "Phone: +123 456 789",
        "correop": "Email: info@dentalcare.com",
    },
    "spanish": {
        "inicio": "Inicio",
        "servicios": "Servicios",
        "sobreNosotros": "Sobre Nosotros",
        "galeria": "Galería",
        "contacto": "Contacto",
        "cotizaPreciosHeader": "Cotiza Precios",
        "AgendaCitaHeader": "Agenda Cita",
        "headerParrafo": "Servicio personalizado de alta tecnología",
        "HeaderAgendaButton": "Agenda tu cita",
        "filosofiaH1": "Nuestra Filosofía",
        "filosofiaDescription": "\"Ayudar a los pacientes a lograr la salud dental y sonrisas hermosas es un privilegio y una responsabilidad. Durante más de 20 años, mi equipo y yo hemos brindado con orgullo la mejor experiencia dental en el Valle Rogue. Nuestro enfoque centrado en la comodidad está diseñado para satisfacer las necesidades tuyas y de toda tu familia.\"",
        "filosofiaButton": "Leer más",
        "nuestrosResultadosCounter": "Nuestros Resultados",
        "clientesSatisfechosCounter": "Clientes Satisfechos",
        "reconocimientosCounter": "Reconocimientos y Certificaciones",
        "horasTrabajoCounter": "Horas de Trabajo",
        "procedimientosCounter": "Procedimientos Totales",
        "serviciosH1": "Servicios",
        "generalH5": "General",
        "generalP": "Descubre nuestra gama completa de servicios dentales generales diseñados para mantener tu sonrisa saludable.",
        "cosmeticoH5": "Cosmético",
        "cosmeticoP": "Transforma tu sonrisa con nuestros servicios dentales cosméticos de calidad. Explora opciones para mejorar la estética dental.",
        "preventivoH5": "Preventivo",
        "preventivoP": "Prioriza tu salud bucal con nuestros servicios dentales preventivos. Aprende cómo mantener tu sonrisa radiante a largo plazo.",
        "serviciosButton1": "Leer más",
        "serviciosButton2": "Leer más",
        "serviciosButton3": "Leer más",
        "UltimasTecH2": "Descubre las últimas tecnologías del mercado",
        "robotp": "Automatización, Optimización, Sistema CAD-CAM, robot ortodóntico.",
        "robotH4": "Tecnología Robótica",
        "CADH4": "Tecnología CAD-CAM",
        "CADp": "En Odontología específicamente, produce prótesis, incluyendo coronas, carillas, onlays, prótesis fijas y removibles, dispositivos ortodónticos, coronas sobre implantes, entre otros.",
        "escanerH4": "Escáner Intraoral",
        "escanerp": "El escáner intraoral es una de las tecnologías en Odontología que es portátil y permite al dentista tomar impresiones ópticas tridimensionales de la boca del paciente.",
        "axialH4": "Tomografía Computarizada (TC)",
        "axialp": "Su tridimensionalidad y precisión permiten determinar con precisión el espacio disponible para colocar el implante.",
        "radiografiah4": "Radiografía Digital",
        "radiografiap": "Nuestro equipo de radiografía digital permite obtener una imagen con una menor exposición a la radiación para el paciente que con técnicas convencionales.",
        "piezasH4": "Piezas de Mano",
        "piezasp": "La eficacia del corte es realmente un equilibrio entre la velocidad y el par aplicado a la fresa.",
        "laserH4": "Tratamientos con Láser",
        "laserp": "El láser es otra tecnología ampliamente conocida en Odontología, efectiva para cortar y tratar tejidos blandos en tu boca.",
        "ledH4": "LED de Alta Potencia",
        "ledp": "Las lámparas de alta potencia, en manos de un profesional bien capacitado, mejoran la práctica dental cotidiana.",
        "financiamientoH1": "Planes y Financiamiento para Nuevos Pacientes",
        "financiamientoP1": "Nuestro amable personal le explicará qué esperar, le proporcionará opciones de pago y financiamiento y responderá a todas sus preguntas.",
        "financiamientoP2": "Todo nuestro equipo está comprometido en ayudarte a prevenir problemas dentales y lograr una sonrisa saludable, hermosa y segura.",
        "financiamientoButton": "Contáctanos",

        "testimoniosH2": "Testimonials",
        "testimoniosp": "¡Nuestros clientes nos adoran! Lee lo que tienen que decir:",


        "quienEsTestimonio1": "Cliente regular.",
        "resenaTestimonio1": "Mi sonrisa cambió por completo en DentalCare. Atención excepcional, resultados asombrosos. ¡Gracias por cuidar tan bien de mí!",

        "quienEsTestimonio2": "Dent Co. Founder",
        "resenaTestimonio2": "DentalCare hizo que superar mi miedo fuera fácil. Atención personalizada, tratamiento eficiente. Mi salud bucal nunca ha sido mejor.",
        
        "quienEsTestimonio3": "Maximax CEO",
        "resenaTestimonio3": "Mi sonrisa cambió por completo en DentalCare. Atención excepcional, resultados asombrosos. ¡Gracias por cuidar tan bien de mí!",
        
        "quienEsTestimonio4": "Regular Customer",
        "resenaTestimonio4": "DentalCare hizo que superar mi miedo fuera fácil. Atención personalizada, tratamiento eficiente. Mi salud bucal nunca ha sido mejor.",
        
        "quienEsTestimonio5": "Maximax CEO",
        "resenaTestimonio5": "DentalCare va más allá. Profesionalismo, tecnología avanzada. Mi confianza en la odontología se disparó. ¡Altamente recomendado!",

        "direccionp": "Dirección: San Pedro, Montes de Oca, 300 metros sur del parque Central.",
        "telp": "Teléfono: +123 456 789",
        "correop": "Correo Electrónico: info@dentalcare.com",
    }

}