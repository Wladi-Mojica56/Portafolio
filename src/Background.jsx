import React, { useEffect } from 'react';
import styles from './Background.module.css';

const Background = () => {
    useEffect(() => {
        // Cargar particles.js dinámicamente
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
        script.onload = () => {
            // Configuración de particles.js
            const particlesConfig = {
                particles: {
                    number: { value: 70, density: { enable: true, value_area: 1800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.8, random: false },
                    size: { value: 4, random: true },
                    line_linked: {
                        enable: true,
                        distance: 180,
                        color: "#888888",
                        opacity: 0.7,
                        width: 1.5
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    }
                }
            };

            // Inicializar particles.js
            if (window.particlesJS) {
                window.particlesJS('particles-js', particlesConfig);
            }
        };
        
        document.head.appendChild(script);

        // Cleanup: remover el script cuando el componente se desmonte
        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []);

    return <div id="particles-js" className={styles.particlesContainer}></div>;
};

export default Background;