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
        title: "Implementación de CMS WoordPress / Drupal",
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
        title: "Ecommerce Fisio Implements - Cali, Valle del Cauca",
        image: "/img-fisioimplements.png",
        urlGithub: "#!",
        urlDemo: "https://fisioimplements.com/",
    },
    {
        id: 5,
        title: "Ecommerce Maximus Store - Cali, Valle del Cauca",
        image: "/img-maximusstore.png",
        urlGithub: "#!",
        urlDemo: "https://maximustore.co/",
    },
    {
        id: 6,
        title: "Ecommerce Annemattress - Miami, Usa",
        image: "/img-annematress.png",
        urlGithub: "#!",
        urlDemo: "https://annemattress.com/",
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Patricia Mejia - Trascender Cooperativa",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at tincidunt leo, et eleifend augue. Curabitur a massa molestie, volutpat neque ac, faucibus ligula.",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 2,
        name: "Eybar - CEO Fisio Implements",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at tincidunt leo, et eleifend augue. Curabitur a massa molestie, volutpat neque ac, faucibus ligula.",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 3,
        name: "Diego Osorio - CEO Maximus Store",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at tincidunt leo, et eleifend augue. Curabitur a massa molestie, volutpat neque ac, faucibus ligula.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 4,
        name: "Milton Alegría",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at tincidunt leo, et eleifend augue. Curabitur a massa molestie, volutpat neque ac, faucibus ligula.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 5,
        name: "Johana Orozco, CEO Team up Integral Services",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at tincidunt leo, et eleifend augue. Curabitur a massa molestie, volutpat neque ac, faucibus ligula.",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 6,
        name: "Axel Moncada",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at tincidunt leo, et eleifend augue. Curabitur a massa molestie, volutpat neque ac, faucibus ligula.",
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

