import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];


export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+5 años de experiencia",
    },
    {
        id: 2,
        name: "Clientes",
        icon: <UsersRound />,
        description: "+25 clientes satisfechos",
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "+25 completados",
    },
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
        title: "Frontend Development  💄",
        experience: [
            {
                name: "HTML",
                subtitle: "Experimentado",
                value: 90,
            },
            {
                name: "CSS",
                subtitle: "Experimentado",
                value: 90,
            },
            {
                name: "JavaScript",
                subtitle: "Experimentado",
                value: 70,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "React",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "Bootstrap",
                subtitle: "Basic",
                value: 90,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development  🥷",
        experience: [
            {
                name: "Node JS",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "Python",
                subtitle: "Basic",
                value: 60,
            },
            {
                name: "MySQL",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "PHP",
                subtitle: "Experimentado",
                value: 90,
            },
            {
                name: "Drupal Twig",
                subtitle: "Experimentado",
                value: 70,
            },
            {
                name: "WordPress",
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
        title: "Ecohotel Las Mercedes - Pereira, Risaralda",
        image: "/img-ecohotel.png",
        urlGithub: "#!",
        urlDemo: "https://ecohotellasmercedes.com",
    },
    {
        id: 2,
        title: "TeamUp Integral Service - Miami, USA",
        image: "/img-teamupintegral.png",
        urlGithub: "#!",
        urlDemo: "https://teamupintegral.com/",
    },
    {
        id: 3,
        title: "Trascender Cooperativa - Cali, Valle del Cauca",
        image: "/img-trascender.png",
        urlGithub: "#!",
        urlDemo: "https://trascendercooperativa.com/",
    },
    {
        id: 4,
        title: "La Selecta Drogueria y Minimarket - Cali, Valle del Cauca",
        image: "/img-selecta.png",
        urlGithub: "#!",
        urlDemo: "https://www.laselecta.com.co/",
    },
    {
        id: 5,
        title: "Ecommerce Maximus Store - Cali, Valle del Cauca",
        image: "/img-maximusstore.png",
        urlGithub: "#!",
        urlDemo: "https://maximustore.com/",
    },
    {
        id: 6,
        title: "Ecommerce Fisio Implements - Cali, Valle del Cauca",
        image: "/img-fisioimplements.png",
        urlGithub: "#!",
        urlDemo: "https://fisioimplements.com/",
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

