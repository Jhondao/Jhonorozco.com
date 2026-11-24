import { BookText, Briefcase, Brush, Code2, Home, Inbox, Layers, Mail, Phone, Sparkles, UserRound, UsersRound, Wrench, Shield, Zap, HeadphonesIcon, TrendingUp, Award, Clock, Lightbulb, Users, Target, MessageSquare, MessageCircle, Network, RefreshCw, ShoppingCart } from "lucide-react";


export const itemsNavbar = [
    {
        id: 1,
        title: "Inicio",
        icon: <Home className="w-5 h-5 md:w-6 md:h-6" />,
        link: "/",
    },
    {
        id: 2,
        title: "Soluciones",
        icon: <Layers className="w-5 h-5 md:w-6 md:h-6" />,
        link: "/soluciones",
    },
    {
        id: 3,
        title: "Portafolio",
        icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6" />,
        link: "/#portfolio",
    },
    {
        id: 4,
        title: "Contacto",
        icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />,
        link: "/#contact",
    },
    {
        id: 5,
        title: "Sobre mi",
        icon: <UserRound className="w-5 h-5 md:w-6 md:h-6" />,
        link: "/sobre-mi",
    },
];

export const dataBeneficios = [
    {
        id: 1,
        title: "Calidad Garantizada",
        description: "Código limpio, escalable y siguiendo las mejores prácticas del desarrollo moderno",
        icon: Shield,
        color: "from-blue-500 to-blue-600"

    },
    {
        id: 2,
        title: "Desarrollo Rápido",
        description: "Entregas ágiles sin comprometer la calidad del producto final",
        icon: Zap,
        color: "from-blue-500 to-blue-600"
    },
    {
        id: 3,
        title: "Soporte 24/7",
        description: "Asistencia continua para resolver cualquier duda o inconveniente",
        icon: HeadphonesIcon,
        color: "from-blue-500 to-blue-600"

    },
    {
        id: 4,
        title: "SEO Optimizado",
        description: "Tu sitio web posicionado en los primeros resultados de búsqueda",
        icon: TrendingUp,
        color: "from-blue-500 to-blue-600"
    },
    {
        id: 5,
        title: "Diseño Premium",
        description: "Interfaces modernas que destacan y convierten visitantes en clientes",
        icon: Award,
        color: "from-blue-500 to-blue-600"
    },
    {
        id: 6,
        title: "Actualizaciones",
        description: "Mantenimiento continuo para mantener tu sitio siempre actualizado",
        icon: Clock,
        color: "from-blue-500 to-blue-600"
    }
];

export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.jpg",
    },
    {
        id: 2,
        url: "/slider-2.jpg",
    },
    {
        id: 3,
        url: "/slider-3.jpg",
    },
    {
        id: 4,
        url: "/slider-4.jpg",
    },
]

export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development 💻",
        experience: [
            {
                name: "HTML, CSS",
                subtitle: "Experimentado",
                value: 90,
            },
            {
                name: "JavaScript",
                subtitle: "Experimentado",
                value: 90,
            },
            {
                name: "React",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "Next.js",
                subtitle: "Experimentado",
                value: 70,
            },
            {
                name: "TypeScript",
                subtitle: "Experimentado",
                value: 75,
            },
            {
                name: "React Native",
                subtitle: "Intermedio",
                value: 70,
            },
            {
                name: "Tailwind CSS - Bootstrap",
                subtitle: "Experimentado",
                value: 60,
            },

            {
                name: "Diseño UI/UX",
                subtitle: "Experimentado",
                value: 90,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development  🥷",
        experience: [
            {
                name: "REST APIs",
                subtitle: "Experimentado",
                value: 85,
            },
            {
                name: "PHP",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "Laravel",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "Docker",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "MySQL",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "Supabase",
                subtitle: "Experimentado",
                value: 70,
            },
            {
                name: "WordPress - Drupal - Shopify",
                subtitle: "Experimentado",
                value: 90,
            },
        ],
    },
];

export const dataSoluciones = [
    {
        id: 1,
        slug: "integracion-de-sistemas",
        title: "Integración de Sistemas",
        icon: <Network />,
        description: "Conecto plataformas empresariales para facilitar el intercambio de información y reducir procesos manuales.",
        problema: "Muchas empresas usan varias plataformas (ERP, e-commerce, CRM) que no se comunican entre sí: la información se duplica, hay que digitarla manualmente de un sistema a otro y los errores de sincronización generan retrabajo.",
        solucion: "Diseño e implemento integraciones y APIs que conectan tus sistemas para que la información fluya entre ellos, con registro de transacciones y manejo de errores.",
        alcance: "Desde integraciones puntuales entre dos plataformas hasta middleware que centraliza la comunicación entre varios sistemas.",
        beneficio: "Menos trabajo manual, menos errores de digitación y mayor trazabilidad de lo que pasa entre tus plataformas.",
        features: [
            { name: "Integración ERP y e-commerce" },
            { name: "Desarrollo e integración de APIs REST" },
            { name: "Middleware" },
            { name: "Sincronización de información" },
            { name: "Registro y monitoreo de transacciones" },
            { name: "Gestión de errores y reintentos" },
        ],
    },
    {
        id: 2,
        slug: "automatizacion-de-procesos",
        title: "Automatización de Procesos",
        icon: <RefreshCw />,
        description: "Diseño flujos tecnológicos que permiten automatizar tareas repetitivas y optimizar procesos operativos.",
        problema: "Tareas repetitivas (generar reportes, enviar notificaciones, mover información entre herramientas) consumen tiempo de tu equipo que podría dedicarse a trabajo de mayor valor.",
        solucion: "Diseño flujos de automatización que conectan tus aplicaciones y ejecutan esas tareas por ti, usando herramientas como n8n y APIs de los servicios que ya usas.",
        alcance: "Desde una automatización simple hasta flujos que conectan varias herramientas y procesan información entre ellas.",
        beneficio: "Tu equipo deja de hacer tareas repetitivas a mano y tiene más tiempo para lo que realmente importa.",
        features: [
            { name: "Automatización de flujos" },
            { name: "Integración de aplicaciones" },
            { name: "Notificaciones automáticas" },
            { name: "Procesamiento de información" },
            { name: "Automatizaciones con n8n y servicios API" },
        ],
    },
    {
        id: 3,
        slug: "desarrollo-de-software",
        title: "Desarrollo de Software",
        icon: <Code2 />,
        description: "Desarrollo soluciones digitales adaptadas a las necesidades de cada organización.",
        problema: "A veces una herramienta genérica no se ajusta a cómo realmente trabaja tu empresa, o un sistema interno quedó obsoleto y frena la operación.",
        solucion: "Desarrollo aplicaciones web, sistemas internos y dashboards hechos a la medida de tu operación, o evoluciono lo que ya tienes.",
        alcance: "Desde una aplicación web puntual hasta un sistema interno completo con frontend, backend e integraciones.",
        beneficio: "Una herramienta que se ajusta a tu proceso real, no al revés.",
        features: [
            { name: "Aplicaciones web" },
            { name: "Sistemas internos" },
            { name: "Dashboards" },
            { name: "Desarrollo frontend y backend" },
            { name: "Integración de servicios" },
            { name: "Evolución de aplicaciones existentes" },
        ],
    },
    {
        id: 4,
        slug: "ecommerce-y-plataformas-digitales",
        title: "E-commerce y Plataformas Digitales",
        icon: <ShoppingCart />,
        description: "Implemento, optimizo y conecto plataformas de comercio electrónico con los procesos empresariales.",
        problema: "Tu tienda en línea no está conectada con el resto de tu operación (inventario, facturación, logística), o la plataforma actual ya no da abasto.",
        solucion: "Implemento, optimizo y conecto tiendas virtuales con tus procesos empresariales para que el e-commerce deje de ser una isla.",
        alcance: "Desde una tienda nueva en WooCommerce/WordPress hasta la integración de tu e-commerce actual con sistemas externos.",
        beneficio: "Una tienda que funciona como parte de tu operación, no como un proceso aparte que hay que conciliar a mano.",
        features: [
            { name: "Desarrollo de tiendas virtuales" },
            { name: "Integración de e-commerce con sistemas externos" },
            { name: "Optimización de plataformas" },
            { name: "WordPress y WooCommerce" },
            { name: "Arquitectura de soluciones digitales" },
        ],
    },
];


export const dataPortfolio = [

    {
        id: 1,
        title: "The Emotions Lab - Malta, República de Malta",
        image: "/img-theemotionslab.png",
        urlGithub: "#!",
        urlDemo: "https://theemotionslabmalta.com/",
        category: "Desarrollo Web",
    },
    {
        id: 2,
        title: "Fonjaveriana - Cali, Valle del Cauca",
        image: "/image-fonjaveriana.png",
        urlGithub: "#!",
        urlDemo: "https://fonjaveriana.javerianacali.edu.co/",
        category: "Desarrollo Web",
    },
    {
        id: 3,
        title: "Gocleaning - USA",
        image: "/img-gohcleaning.png",
        urlGithub: "#!",
        urlDemo: "https://gohcleaning.com/",
        category: "Desarrollo Web",
    },
    {
        id: 4,
        title: "Keelcur - Candelaria, Valle del Cauca",
        image: "/img-keelcur.png",
        urlGithub: "#!",
        urlDemo: "https://keelcur.com/",
        category: "Desarrollo Web",
    },
    {
        id: 5,
        title: "TeamUp Integral Service - Miami, USA",
        image: "/img-teamupintegral.png",
        urlGithub: "#!",
        urlDemo: "https://teamupintegral.com/",
        category: "Desarrollo Web",
    },

];

export const dataTestimonials = [
    {
        id: 1,
        name: "Eybar - CEO Fisio Implements",
        description:
            "Desde que lanzamos nuestro sitio web desarrollado por Jhon Orozco, hemos experimentado un crecimiento impresionante en nuestras ventas. La tienda virtual de Fisio Implements no solo es visualmente atractiva, sino que también ofrece una navegación fluida y una experiencia de compra sencilla para nuestros clientes. Sin duda, contar con un sitio web bien diseñado ha sido clave para nuestro éxito en el comercio digital.",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 2,
        name: "Ecohotel Las Mercedes",
        description:
            "El desarrollo de nuestra página web con Jhon Orozco ha sido un gran acierto para Eco Hotel Las Mercedes. Ahora nuestros clientes pueden explorar fácilmente nuestros servicios, conocer nuestras experiencias eco-turísticas y hacer reservas de manera rápida y eficiente. La web es intuitiva, visualmente atractiva y completamente optimizada, lo que ha aumentado nuestra visibilidad y la cantidad de reservas. Sin duda, ha sido una inversión que ha impulsado nuestro crecimiento y nos ha permitido conectar mejor con quienes buscan una experiencia única en la naturaleza.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 3,
        name: "Johana Orozco, CEO Team up Integral Services",
        description:
            "Jhon Dayron realizó un muy buen trabajo al crear y lanzar la página web para nuestro proyecto www.teamupintegral.com en todo el proceso destacó su profesionalismo desde la presentación de la propuesta acorde a nuestras solicitudes hasta la retroalimentación y capacitación que nos brindó para entender el producto. Fue paciente con nuestros requerimientos y además nos proporcionó información y valiosas recomendaciones. Definitivamente buscaremos de su asistencia para proyectos futuros",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 4,
        name: "Patricia Mejia - Trascender Cooperativa",
        description:
            "La experiencia con el servicio brindado por Jhon fue excelente, destacamos la calidad, la agilidad y la puntualidad en la entrega del proyecto. La página web de Trascender cooperativa ahora es más llamativa y funcional. Definitivamente recomiendo su servicio",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 5,
        name: "Diego Osorio - CEO Maximus Store",
        description:
            "Quiero darle mi agradecimiento y recomendación al Sr Jhon Dayron por su profesionalismos y dedicación para crear la página Web de mi negocio y mantener activa y en movimiento la publicidad en las redes sociales, mil gracias y muchos éxitos! ",
        imageUrl: "/profile-3.jpeg",
    },
];

export const dataProcess = [
    {
        id: 1,
        title: "Descubrimiento",
        description: "Entiendo tus necesidades, objetivos y audiencia para trazar el camino al éxito.",
        icon: <Lightbulb />,
        color: "from-blue-600 to-cyan-500",
        delay: 100
    },
    {
        id: 2,
        title: "Diseño y Estrategia",
        description: "Creo una experiencia visual única y funcional alineada con tu identidad de marca.",
        icon: <Brush />,
        color: "from-blue-600 to-cyan-500",
        delay: 200
    },
    {
        id: 3,
        title: "Desarrollo",
        description: "Transformo el diseño en una solución robusta y escalable utilizando tecnología de punta.",
        icon: <Code2 />,
        color: "from-blue-600 to-cyan-500",
        delay: 300
    },
    {
        id: 4,
        title: "Lanzamiento y Soporte",
        description: "Despliegue final y acompañamiento continuo para asegurar el rendimiento óptimo.",
        icon: <Zap />,
        color: "from-blue-600 to-cyan-500",
        delay: 400
    }
];

export const dataFaq = [
    {
        id: 1,
        question: "¿Qué servicios ofreces exactamente?",
        answer: "Integro sistemas (ERP, e-commerce, APIs), automatizo procesos operativos y desarrollo software a medida, además de soluciones de e-commerce. También brindo soporte en SEO y mantenimiento técnico."
    },
    {
        id: 2,
        question: "¿Necesito cambiar mi sistema actual para integrarlo?",
        answer: "No necesariamente. La mayoría de integraciones se construyen sobre las APIs que ya expone tu sistema actual, sin reemplazarlo. Evaluamos juntos qué tan viable es tu caso en una primera conversación."
    },
    {
        id: 3,
        question: "¿Cuánto tiempo toma un proyecto?",
        answer: "Varía según la complejidad. Una automatización o integración puntual puede tomar de 2 a 4 semanas, mientras que una plataforma personalizada o e-commerce puede tomar de 3 a 6 semanas."
    },
    {
        id: 4,
        question: "¿Ofreces mantenimiento después del lanzamiento?",
        answer: "¡Claro que sí! Ofrezco planes de mantenimiento mensual que incluyen actualizaciones de seguridad, optimización de velocidad y ajustes menores de contenido."
    },
    {
        id: 5,
        question: "¿Cómo es el proceso de pago?",
        answer: "Generalmente manejo un anticipo del 50% para iniciar el proyecto y el 50% restante al finalizar y antes del despliegue final. Acepto diversos métodos de pago locales e internacionales."
    }
];

export const dataContact = [
    {
        id: 1,
        title: "WhatsApp",
        subtitle: "+57 316 629 3520",
        link: "https://wa.me/573166293520?text=Hola%20Jhon%2C%20quiero%20cotizar%20un%20proyecto",
        icon: <MessageCircle />,
    },
    {
        id: 2,
        title: "Teléfono",
        subtitle: "+57 3166293520",
        link: "tel:+573166293520",
        icon: <Phone />,
    },
    {
        id: 3,
        title: "Github",
        subtitle: "github.com/jhondao",
        link: "https://github.com/jhondao",
        icon: <Code2 />,
    },
    {
        id: 4,
        title: "Email",
        subtitle: "jhondao.desarrollo@hotmail.com",
        link: "mailto:jhondao.desarrollo@hotmail.com",
        icon: <Inbox />,
    },
];


// Informacion para la pagina sobre-mi

export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+7 años de experiencia",
    },
    {
        id: 2,
        name: "Clientes",
        icon: <UsersRound />,
        description: "+30 clientes satisfechos",
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "+30 completados",
    },
];

export const itemsNavbarAboutMe = [
    {
        id: 1,
        title: "Home",
        icon: <Home className="w-5 h-5 md:w-6 md:h-6" />,
        link: "/",
    },
    {
        id: 2,
        title: "Sobre Mí",
        icon: <UserRound className="w-5 h-5 md:w-6 md:h-6" />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Experiencia",
        icon: <Code2 className="w-5 h-5 md:w-6 md:h-6" />,
        link: "#experience",
    },
    {
        id: 4,
        title: "Habilidades",
        icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />,
        link: "#soft-skills",
    },
    {
        id: 5,
        title: "Educación",
        icon: <BookText className="w-5 h-5 md:w-6 md:h-6" />,
        link: "#educacion",
    },
    {
        id: 6,
        title: "Contacto",
        icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />,
        link: "#contact",
    },
];

export const dataEducacion = [
    {
        id: 1,
        title: "Especialización en Seguridad Informática",
        institution: "UNAD",
        period: "2026 - 2027 (en curso)",
        description: "Especialización enfocada en identificación y remediación de vulnerabilidades, seguridad de aplicaciones y servicios digitales."
    },
    {
        id: 2,
        title: "Ingeniería de Sistemas",
        institution: "UNAD",
        period: "2023 - 2027 (grado esperado)",
        description: "Formación integral en desarrollo de software, bases de datos, arquitectura de sistemas y gestión de proyectos tecnológicos."
    },
    {
        id: 3,
        title: "Tecnologo ADSI",
        institution: "SENA",
        period: "2016 - 2018",
        description: "Formación integral en desarrollo de software, bases de datos, arquitectura de sistemas y gestión de proyectos tecnológicos."
    },
    {
        id: 4,
        title: "Diseño UI/UX",
        institution: "Udemy",
        period: "2025 - 2026",
        description: "Certificación en diseño de interfaces de usuario y experiencia de usuario, prototipado y testing de usabilidad."
    }
];

export const dataWorkExperience = [
    {
        id: 1,
        role: "Analista de Soluciones de Negocio",
        company: "Comfandi",
        period: "Octubre 2026 - Actualidad",
        bullets: [
            "Validación de integraciones entre sistemas mediante análisis de solicitudes, respuestas, payloads y comportamiento de APIs.",
            "Análisis y seguimiento de incidentes en plataformas de e-commerce, servicios e integraciones.",
            "Levantamiento de requerimientos funcionales y técnicos para soluciones digitales y de comercio electrónico.",
            "Trabajo bajo Scrum con equipos de tecnología y proveedores, gestionando historias de usuario en Jira.",
        ],
    },
    {
        id: 2,
        role: "Analista del Ecosistema Digital",
        company: "Pontificia Universidad Javeriana de Cali",
        period: "Mayo 2025 - Octubre 2026",
        bullets: [
            "Desarrollo, mantenimiento y estabilización de aplicaciones móviles institucionales con React Native.",
            "Integración y consumo de APIs REST para sincronizar información entre plataformas.",
            "Desarrollo e implementación de mejoras sobre portales institucionales basados en Drupal.",
            "Administración técnica de SharePoint Online y soporte a usuarios.",
        ],
        highlights: [
            "Lideró la actualización tecnológica de la app móvil institucional, mejorando compatibilidad con versiones recientes de Android e iOS.",
            "Desarrolló la aplicación móvil Campus Javeriana Cali en React Native (Expo).",
            "Participó en la identificación y remediación de vulnerabilidades en aplicaciones y servicios digitales.",
        ],
    },
    {
        id: 3,
        role: "Desarrollador Web",
        company: "Pontificia Universidad Javeriana de Cali",
        period: "Octubre 2021 - Mayo 2025",
        bullets: [
            "Desarrollo y mantenimiento de sitios institucionales utilizando Drupal y WordPress.",
            "Implementación de nuevas funcionalidades con HTML, CSS, JavaScript y PHP.",
            "Desarrollo de componentes y personalización de temas en Drupal.",
            "Optimización SEO y de rendimiento de sitios web.",
        ],
    },
    {
        id: 4,
        role: "Web Master",
        company: "América de Cali",
        period: "Marzo 2021 - Octubre 2021",
        bullets: [
            "Desarrollo de nuevas funcionalidades utilizando PHP, JavaScript y WooCommerce.",
            "Personalización de WooCommerce e integración con SIESA.",
            "Implementación de mejoras UX/UI y optimización del portal institucional.",
        ],
    },
    {
        id: 5,
        role: "Desarrollador Web",
        company: "Teatro Esquina Latina",
        period: "Febrero 2018 - Marzo 2021",
        bullets: [
            "Desarrollo y mantenimiento de plataformas y sitios web institucionales.",
            "Mejoras funcionales y de experiencia de usuario en los canales digitales.",
            "Implementación de un nuevo sitio web para fortalecer la presencia digital de la organización.",
        ],
    },
    {
        id: 6,
        role: "Desarrollador Freelance",
        company: "jhonorozco.com",
        period: "Febrero 2018 - Actualidad",
        bullets: [
            "Desarrollo de aplicaciones y sitios web utilizando React, Next.js y WordPress.",
            "Desarrollo de tiendas virtuales con WooCommerce e integración de APIs REST y servicios de terceros.",
            "Optimización SEO, rendimiento web y administración de infraestructura y despliegues.",
        ],
    },
];

export const dataSoftSkills = [
    {
        id: 1,
        title: "Resolución de Problemas",
        description: "Capacidad para analizar situaciones complejas y encontrar soluciones efectivas y creativas.",
        icon: Lightbulb,
        color: "from-blue-500 to-cyan-600"
    },
    {
        id: 2,
        title: "Trabajo en Equipo",
        description: "Colaboración efectiva con equipos multidisciplinarios para alcanzar objetivos comunes.",
        icon: Users,
        color: "from-blue-500 to-cyan-600"
    },
    {
        id: 3,
        title: "Orientación a Resultados",
        description: "Enfoque en la entrega de proyectos de calidad cumpliendo plazos y expectativas.",
        icon: Target,
        color: "from-blue-500 to-cyan-600"

    },
    {
        id: 4,
        title: "Comunicación Efectiva",
        description: "Habilidad para transmitir ideas técnicas de forma clara tanto a equipos técnicos como no técnicos.",
        icon: MessageSquare,
        color: "from-blue-500 to-cyan-600"

    },
    {
        id: 5,
        title: "Gestión del Tiempo",
        description: "Organización y priorización eficiente de tareas para maximizar la productividad.",
        icon: Clock,
        color: "from-blue-500 to-cyan-600"

    },
    {
        id: 6,
        title: "Adaptabilidad",
        description: "Flexibilidad para aprender nuevas tecnologías y adaptarse a cambios en proyectos.",
        icon: Zap,
        color: "from-blue-500 to-cyan-600"
    }
];

export const dataProyects = [
    {
        id: 1,
        title: "EnRuta",
        description:
            "Aplicación móvil diseñada para ayudar a los transportadores de carga a gestionar sus gastos de manera eficiente. Permite registrar y categorizar gastos, generar informes financieros y optimizar la administración del negocio de transporte.",
        image: "/img-proyecto-enruta.png",
        tecnologies: ["NextJs", "Supabase", "Tailwind CSS", "Typescript", "Vercel", "Figma", "Shadcn UI"],
        url: "https://en-ruta-app-gamma.vercel.app/",
        category: "Aplicaciones y Soluciones Tecnológicas",
    },
    {
        id: 2,
        title: "AquiAyudamosVE",
        description:
            "Plataforma para coordinar albergues, centros de acopio y necesidades comunitarias en cualquier lugar de Colombia, creada como respuesta al terremoto de agosto de 2026 en Cali. Cualquiera puede reportar o pedir ayuda sin crear cuenta; la propia comunidad confirma la información y un sistema de reputación prioriza lo más confiable en un mapa en tiempo real.",
        image: "/img-proyecto-aquiayudamosve.png",
        tecnologies: ["React", "TypeScript", "Node.js", "Express", "Prisma", "MySQL", "Tailwind CSS"],
        url: "https://aquiayudamosve.co/",
        category: "Plataformas Digitales",
    },
];

