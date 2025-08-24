import AluraLatam from './certificatesAll/Alura-oracle-frontend.jpg';
import Habilidades from './certificatesAll/Habilidades Digitales.jpg'; 
import ProgramacionNivelExplorador from './certificatesAll/Programacion-Nivel-Explorador.jpg';
import MisionTic from './certificatesAll/MisionTic.jpg';
import ResponsiveWebDesign from './certificatesAll/scrimba-coursera-responsive-web-design.jpg';
import CssFlexbox from './certificatesAll/scrimba-coursera-css-flexbox.jpg';
import CssAnimations from './certificatesAll/scrimba-coursera-css-animations.jpg';
import BootstrapWeb from './certificatesAll/educative-bootstrap.jpg';
import BootstrapWebDesign from './certificatesAll/scrimba-coursera-bootstrap.jpg';

// Certificados Cybersecurity

import cybersecurityGoogle from './certificatesAll/Ciberseguridad Coursera.jpg';
import cybersecurityTic from './certificatesAll/Ciberseguridad Generacion Tic.jpg';
import cyberhub from './certificatesAll/Ciberhub.jpg';
import fundamentos from './certificatesAll/Fundamentos de ciberseguridad.jpg';
import activos from './certificatesAll/Activos amenazas.jpg';
import conexion from './certificatesAll/Conexion y proteccion de redes.jpg';
import seguro from './certificatesAll/Ve a lo seguro Google.jpg';
import alarma from './certificatesAll/haz sonar la alarma.jpg';
import herramientas from './certificatesAll/Herramientas del oficio.jpg';
import automatizacion from './certificatesAll/Automatiza tareas.jpg';


export const CertificationsAllData = [
    {
        id: 1,
        title: 'Formación Alura Latam',
        issuer: 'Alura Latam',
        image: AluraLatam,
        Date: '2025',
        verificationLink: 'https://app.aluracursos.com/user/wladimyr-mojica/fullCertificate/c6bb033935eeffbaba8082825a301e93',
        description: 'En Alura Latam adquirí una sólida base en desarrollo web y programación, fortaleciendo mis habilidades técnicas a través de proyectos prácticos y cursos especializados.',
        category: 'programacion'
    },
    {
        id: 2,
        title: 'Habilidades Digitales',
        issuer: 'Universidad de Antioquia',
        image: Habilidades,
        Date: '2023',
        verificationLink: '',
        description: 'Esta certificación me permitió desarrollar competencias clave en el uso de herramientas digitales, mejorando mi productividad y adaptabilidad en entornos tecnológicos.',
        category: 'undefined'
    },
    {
        id: 3,
        title: 'Programacion Nivel Explorador',
        issuer: 'Universidad Sergio Arboleda-Talento Tech',
        image: ProgramacionNivelExplorador,
        Date: '2024',
        verificationLink: '',
        description: 'Durante este curso, fortalecí mis conocimientos en programación, aprendiendo conceptos fundamentales y aplicando lógica de programación en proyectos iniciales.',
        category: 'programacion'
    },
    {
        id: 4,
        title: 'Programación Mision Tic',
        issuer: 'Universidad Tecnológica de Bolívar',
        image: MisionTic,
        Date: '2022',        
        verificationLink: 'https://certificados.utb.edu.co/ords/r/utb/certificados/verificacion?codigo=E3A0C5418F731EEFE0531D04A8C0BF3B&session=509060777470427',
        description: 'En Misión TIC fortalecí mis conocimientos en desarrollo de software, trabajando en equipo y resolviendo retos de programación reales.',
        category: 'programacion'
    },
    {
        id: 5,
        title: 'Responsive Web Design',
        issuer: 'Scrimba & Coursera',
        image: ResponsiveWebDesign,
        Date: '2024',
        verificationLink: 'https://www.coursera.org/account/accomplishments/verify/ONW9JCJHJBMY',
        description: 'Aprendí a crear sitios web adaptables a cualquier dispositivo, aplicando principios de diseño responsivo y mejores prácticas de usabilidad.',
        category: 'programacion'
    },
    {
        id: 6,
        title: 'Css Flexbox',
        issuer: 'Scrimba & Coursera',
        image: CssFlexbox,
        Date: '2024',
        verificationLink: 'https://www.coursera.org/account/accomplishments/verify/UEKYFFOTLIS7',
        description: 'Dominar Flexbox me permitió estructurar y alinear elementos de manera eficiente en interfaces web modernas.',
        category: 'programacion'
    },
    {
        id: 7,
        title: 'Css Animations',
        issuer: 'scrimba & Coursera',
        image:CssAnimations, 
        Date: '2024',
        verificationLink: 'https://www.coursera.org/account/accomplishments/verify/HD4KJC1YVPEF',
        description: 'Con esta certificación, aprendí a crear animaciones atractivas y dinámicas usando CSS, mejorando la experiencia visual de mis proyectos.',
        category: 'programacion'
    },
    {
        id: 8,
        title: 'Modern Web Design With Bootstrap',
        issuer: 'Educative',
        image: BootstrapWeb,
        Date: '2025',
        verificationLink: 'https://www.educative.io/verify-certificate/XYzZ7gYr4B0Sq9W6L1lNQyI71r08m6KYjtL',
        description: 'Me capacité en el uso de Bootstrap para desarrollar sitios web modernos, responsivos y visualmente atractivos de manera eficiente.',
        category: 'programacion'
    },
    {
        id: 9,
        title: 'Bootstrap Web Design',
        issuer: 'Scrimba & Coursera',
        image: BootstrapWebDesign,
        Date: '2025',
        verificationLink: 'https://www.coursera.org/account/accomplishments/verify/VRPZ5YTIHUD0',
        description: 'Aprendí a utilizar Bootstrap para agilizar el desarrollo de interfaces web, aplicando componentes y utilidades del framework.',
        category: 'programacion'
    },
    {
        id: 10,
        title: 'Cybersecurity Google',
        issuer: 'Coursera & Google',
        image: cybersecurityGoogle,
        Date: '2025',
        verificationLink: 'https://www.coursera.org/account/accomplishments/professional-cert/OMD0W1TNYN3C',
        description: 'Obtuve una visión integral de la ciberseguridad, comprendiendo amenazas, vulnerabilidades y estrategias de protección en entornos digitales.',
        category: 'ciberseguridad'
    },
    {
        id: 11,
        title: 'Cybersecurity Generacion Tic',
        issuer: 'Generacion Tic',
        image: cybersecurityTic,
        Date: '2024',
        verificationLink: 'undefined',
        description: 'Me formé en los fundamentos de la ciberseguridad, aprendiendo a identificar riesgos y aplicar buenas prácticas para proteger la información.',
        category: 'ciberseguridad'
    },
    {
        id: 12,
        title: 'Cyber Estudiante',
        issuer: 'Cyberbit & Bulwark',
        image: cyberhub,
        Date: '2023',
        verificationLink: 'undefined',
        description: 'Participé en simulaciones prácticas de ciberseguridad, enfrentando escenarios reales y mejorando mis habilidades de respuesta ante incidentes.',
        category: 'ciberseguridad'
    },
    {
        id: 13,
        title: 'Fundamentos de Ciberseguridad',
        issuer: 'Coursera & Google',
        image: fundamentos,
        Date: '2024',
        verificationLink: 'https://coursera.org/verify/3G54TCH643QH',
        description: 'Adquirí conocimientos esenciales sobre ciberseguridad, incluyendo conceptos clave y el panorama actual de amenazas digitales.',
        category: 'ciberseguridad'
    },
    {
        id: 14,
        title: 'Activos, amenazas y vulnerabilidades',
        issuer: 'Coursera & Google',
        image: activos,
        Date: '2024',
        verificationLink: 'https://coursera.org/verify/GAZC75QSPFED',
        description: 'Aprendí a identificar y clasificar activos, amenazas y vulnerabilidades, fundamentales para la gestión de la seguridad informática.',
        category: 'ciberseguridad'
    },
    {
        id: 15,
        title: 'Conexión y protección: Redes y seguridad de redes',
        issuer: 'Coursera & Google',
        image: conexion,        
        Date: '2024',
        verificationLink: 'https://coursera.org/verify/SFJWUVXMAUWD',
        description: 'Me capacité en el diseño y protección de redes, comprendiendo los principios de seguridad y las mejores prácticas para su resguardo.',
        category: 'ciberseguridad'
    },
    {
        id: 16,
        title: 'Ve a lo seguro: Gestiona los riesgos de seguridad',
        issuer: 'Coursera & Google',
        image: seguro,
        Date: '2024',
        verificationLink: 'https://coursera.org/verify/WXPVB3ZH5GZ5',
        description: 'Desarrollé habilidades para identificar, evaluar y gestionar riesgos de seguridad, aplicando metodologías reconocidas en la industria.',
        category: 'ciberseguridad'
    },
    {
        id: 17,
        title: 'Haz sonar la alarma: Detección y respuesta',
        issuer: 'Coursera & Google',
        image: alarma,
        Date: '2024',        
        verificationLink: 'https://coursera.org/verify/QUXT9QNDD37S',
        description: 'Aprendí a detectar incidentes de seguridad y a responder de manera efectiva, minimizando el impacto de amenazas en los sistemas.',
        category: 'ciberseguridad'
    },
    {
        id: 18,
        title: 'Herramientas del oficio: Linux y SQL',
        issuer: 'Coursera & Google',
        image: herramientas,
        Date: '2024',
        verificationLink: 'https://coursera.org/verify/J37KPE94DX99',
        description: 'Me familiaricé con el uso de Linux y SQL, herramientas esenciales para la administración y análisis de sistemas en ciberseguridad.',
        category: 'ciberseguridad'
    },
    {
        id: 19,
        title: 'Automatiza las tareas de ciberseguridad con Python',
        issuer: 'Coursera & Google',
        image: automatizacion,
        Date: '2024',
        verificationLink: 'https://coursera.org/verify/KFUBZDMBGGEL',
        description: 'Aprendí a automatizar tareas de ciberseguridad utilizando Python, optimizando procesos y mejorando la eficiencia en la gestión de la seguridad.',
        category: 'ciberseguridad'
    }
]
