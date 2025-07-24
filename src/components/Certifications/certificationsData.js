import aluraImage from "/certificatesImages/Alura-oracle-frontend.jpg";
import ResponsiveWeb from "/certificatesImages/scrimba-coursera-responsive-web-design.jpg";
import CssFlexbox from "/certificatesImages/scrimba-coursera-css-flexbox.jpg";
import BootstrapWeb from "/certificatesImages/educative-bootstrap.jpg";
import CssAnimations from "/certificatesImages/scrimba-coursera-css-animations.jpg";

export const certificationsData = [
    //Certificates for Hero Section
    {
        id: 1,
        title: "Desarrollo Web Alura-Oracle",
        image: aluraImage,
        issuer: "Alura-latam & Oracle",
        hours: "327 horas",
        category: "Desarrollo Web",
        description: "Programa de formación frontend donde dominé HTML5, CSS3 y JavaScript. Desarrollé proyectos reales implementando arquitecturas modernas con React y buenas prácticas de desarrollo que potenciaron mi capacidad para crear interfaces atractivas y funcionales."
    },
    {
        id: 2,
        title: "Responsive Web Design",
        image: ResponsiveWeb,
        issuer: "Scrimba & Coursera",
        hours: undefined,
        category: "Desarrollo Web",
        description: "Enfoque en diseño web adaptativo donde aprendí a crear interfaces que funcionan perfectamente en cualquier dispositivo. Implementé técnicas avanzadas de CSS Grid, Flexbox y Media Queries para garantizar experiencias de usuario óptimas independientemente del tamaño de pantalla."
    },
    {
        id: 3,
        title: "Css Flexbox",
        image:CssFlexbox,
        issuer: "Scrimba & Coursera",
        hours: undefined,
        category: "Desarrollo Web",
        description: "Dominio del sistema de layout Flexbox para crear diseños web dinámicos y responsivos. Aprendí a implementar estructuras complejas de manera eficiente, optimizando el flujo de trabajo y mejorando significativamente la experiencia de usuario en mis proyectos."
    },
    {
        id: 4,
        title: "Bootstrap Web Design",
        image: BootstrapWeb,
        issuer: "Educative",
        hours: undefined,
        category: "Desarrollo Web",
        description: "Formación enfocada en el framework Bootstrap para desarrollo web ágil y profesional. Implementé componentes, personalización de temas y optimización del sistema de grid para crear interfaces modernas y consistentes en el desarollo."
    },
    {
        id: 5,
        title: "Css Animations",
        image: CssAnimations,
        issuer: "Scrimba & Coursera",
        hours: undefined,
        category: "Desarrollo Web",
        description: "Enfoque en animaciones CSS avanzadas para elevar la interactividad de interfaces web. Obtuve conocimientos en keyframes, transiciones, transformaciones y técnicas de optimización para crear experiencias visuales atractivas que mejoran significativamente el engagement de los usuarios."
    }
]