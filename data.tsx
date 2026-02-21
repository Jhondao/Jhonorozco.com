import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench, Shield, Zap, HeadphonesIcon, TrendingUp, Award, Clock, Lightbulb, Users, Target, MessageSquare } from "lucide-react";


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 3,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 4,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
    {
        id: 5,
        title: "Sobre mi",
        icon: <UserRound size={20} />,
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

export const dataServices = [
    {
        id: 1,
        title: "Soluciones Web personalizados",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Diseño web personalizado",
            },
            {
                name: "Desarrollo de sitios web personalizados",
            },
            {
                name: "Diseño y desarrollo responsive",
            },
            {
                name: "Optimización SEO",
            },
            {
                name: "Desarrollo de aplicaciones web",
            },
            {
                name: "Gestión de contenido",
            },
            {
                name: "Capacitación para gestión del contenido",
            },
            {
                name: "Mantenimiento y soporte continuo",
            },
        ],
    },
    {
        id: 2,
        title: "Implementación de CMS WordPress / Drupal",
        icon: <BellPlus />,
        features: [
            {
                name: "Instalación y configuración del CMS",
            },
            {
                name: "Desarrollo y personalización de temas",
            },
            {
                name: "Optimización SEO para motores de búsqueda",
            },
            {
                name: "Migración de contenido desde otras plataformas",
            },
            {
                name: "Capacitación para gestión del contenido",
            },
            {
                name: "Soporte técnico y mantenimiento continuo",
            }
        ],
    },
    {
        id: 3,
        title: "Soluciones E-commerce",
        icon: <Brush />,
        features: [
            {
                name: "Desarrollo de tiendas online a medida",
            },
            {
                name: "Diseño adaptable y optimizado para móviles",
            },
            {
                name: "Integración de pasarelas de pago seguras",
            },
            {
                name: "Optimización SEO para e-commerce",
            },
            {
                name: "Gestión eficiente de inventario y productos",
            },
            {
                name: "Automatización de envíos y logística",
            },
            {
                name: "Soporte y mantenimiento continuo",
            },
        ],
    },
];

export const dataPortfolio = [

    {
        id: 1,
        title: "Fonjaveriana - Cali, Valle del Cauca",
        image: "/image-fonjaveriana.png",
        urlGithub: "#!",
        urlDemo: "https://fonjaveriana.javerianacali.edu.co/",
    },
    {
        id: 2,
        title: "Gocleaning - USA",
        image: "/img-gohcleaning.png",
        urlGithub: "#!",
        urlDemo: "https://gohcleaning.com/",
    },
    {
        id: 3,
        title: "Keelcur - Candelaria, Valle del Cauca",
        image: "/img-keelcur.png",
        urlGithub: "#!",
        urlDemo: "https://keelcur.com/",
    },
    {
        id: 4,
        title: "TeamUp Integral Service - Miami, USA",
        image: "/img-teamupintegral.png",
        urlGithub: "#!",
        urlDemo: "https://teamupintegral.com/",
    },

    {
        id: 5,
        title: "Ecommerce Fisio Implements - Cali, Valle del Cauca",
        image: "/img-fisioimplements.png",
        urlGithub: "#!",
        urlDemo: "https://fisioimplements.com/",
    },
    {
        id: 6,
        title: "Ecommerce Maximus Store - Cali, Valle del Cauca",
        image: "/img-maximusstore.png",
        urlGithub: "#!",
        urlDemo: "https://maximustore.com/",
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
        answer: "Me especializo en desarrollo web full-stack (específicamente React/Next.js), diseño de interfaces (UI/UX) y soluciones de e-commerce personalizadas. También brindo soporte en SEO y mantenimiento técnico."
    },
    {
        id: 2,
        question: "¿Cuánto tiempo toma entregar un sitio web?",
        answer: "El tiempo varía según la complejidad. Una landing page puede estar lista en 1 semana, mientras que una plataforma personalizada o e-commerce puede tomar de 3 a 6 semanas."
    },
    {
        id: 3,
        question: "¿Ofreces mantenimiento después del lanzamiento?",
        answer: "¡Claro que sí! Ofrezco planes de mantenimiento mensual que incluyen actualizaciones de seguridad, optimización de velocidad y ajustes menores de contenido."
    },
    {
        id: 4,
        question: "¿Cómo es el proceso de pago?",
        answer: "Generalmente manejo un anticipo del 50% para iniciar el proyecto y el 50% restante al finalizar y antes del despliegue final. Acepto diversos métodos de pago locales e internacionales."
    }
];

export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+57 3166293520",
        link: "tel:+573166293520",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/jhondao",
        link: "github.com/jhondao",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "jhondao.desarrollo@hotmail.com",
        link: "mailto:jhondao.desarrollo@hotmail.com25",
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
        icon: <Home size={20} />,
        link: "/",
    },
    {
        id: 2,
        title: "Sobre Mí",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Habilidades",
        icon: <BellPlus size={20} />,
        link: "#soft-skills",
    },
    {
        id: 4,
        title: "Experiencia",
        icon: <Code2 size={20} />,
        link: "#experience",
    },
    {
        id: 5,
        title: "Educación",
        icon: <BookText size={20} />,
        link: "#educacion",
    },
    {
        id: 6,
        title: "Contacto",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataEducacion = [
    {
        id: 1,
        title: "Ingeniería de Sistemas",
        institution: "UNAD",
        period: "2023 - 2026",
        description: "Formación integral en desarrollo de software, bases de datos, arquitectura de sistemas y gestión de proyectos tecnológicos."
    },
    {
        id: 2,
        title: "Tecnologo ADSI",
        institution: "SENA",
        period: "2016 - 2018",
        description: "Formación integral en desarrollo de software, bases de datos, arquitectura de sistemas y gestión de proyectos tecnológicos."
    },
    {
        id: 3,
        title: "Diseño UI/UX",
        institution: "Udemy",
        period: "2025 - 2026",
        description: "Certificación en diseño de interfaces de usuario y experiencia de usuario, prototipado y testing de usabilidad."
    }
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
        url: "https://en-ruta-app-gamma.vercel.app/"
    },
];

