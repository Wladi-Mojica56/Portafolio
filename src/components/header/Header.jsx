import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Navigation from '../header/navigation';

function Header() {
    const [logoText, setLogoText] = useState('WladCode');
    const menuItems = ['Inicio', 'Sobre Mi', 'Certificaciones', 'Proyectos'];
    const menuItemsMobile = ['Inicio', 'Sobre Mi', 'Certificaciones', 'Proyectos', 'Contacto'];

    
    ///Estudiar useEffect 


    useEffect(() => {
        // Función para actualizar el logoText basado en el ancho de la pantalla
        const updateLogoText = () => {
            if (window.innerWidth <= 480) {
                setLogoText('WC');
            } else {
                setLogoText('WladCode');
            }
        };
        
        // Ejecutar la función inicialmente
        updateLogoText();
        
        // Añadir un event listener para el evento resize
        window.addEventListener('resize', updateLogoText);
        
        // Limpiar el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('resize', updateLogoText);
        };
    }, []); // Array vacío significa que este efecto solo se ejecuta una vez al montar el componente
    

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <div className={`${styles.logo} ${styles['tracking-in-expand']}`}>
                    {logoText}
                </div>
            </div>

            <div className={styles.navigationContainer}>
                <Navigation menuItems={menuItems} menuItemsMobile={menuItemsMobile} />
            </div>

            <div className={styles.contactContainer}>
                <a href="#contact" className={styles.contact}>
                    <span className={styles.contactText}>Contacto</span>
                    <span className={styles['text-blur-out']}></span>
                </a>
            </div>
            
        </header>
    );
}

export default Header;