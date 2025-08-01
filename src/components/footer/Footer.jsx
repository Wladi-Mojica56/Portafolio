import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import quotes from './quotes';
import {AnimatePresence, motion} from 'framer-motion';

function Footer() {
    const [quote, setQuote] = useState('');

    function getRandomQuote() {
        const index = Math.floor(Math.random() * quotes.length);
        return quotes[index];
    }

    useEffect(() => {
        setQuote(getRandomQuote());
        const interval = setInterval(() => {
            setQuote(getRandomQuote());
        }, 10000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <footer className={styles.footer}>


                <AnimatePresence mode="wait">
                    <motion.p 
                    key={quote}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className={styles.quote}
                    >{quote}
                    </motion.p>
                </AnimatePresence>



                <div className={styles.socialContainer}>
                    <a 
                        href="https://github.com/yourusername"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                        aria-label="GitHub"
                    >
                        <i className="bi bi-github"></i>
                    </a>
                    <a 
                        href="https://linkedin.com/in/yourusername"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                        aria-label="LinkedIn"
                    >
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a 
                        href="mailto:your.email@example.com"
                        className={styles.socialIcon}
                        aria-label="Email"
                    >
                        <i className="bi bi-envelope-fill"></i>
                    </a>
                </div>

                <h3>Conéctate Conmigo</h3>
                <p>
                    Estoy abierto a oportunidades, colaboraciones y para hablar sobre proyectos frontend. ¡No dudes en contactarme!
                </p>
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} WladCode. Todos los derechos reservados.
                </p>
            </footer>



        </div>
    );
}

export default Footer;