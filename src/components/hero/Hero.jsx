import styles from './hero.module.css';
import { motion } from 'framer-motion';
import {useState, useEffect} from 'react';
import {phrases} from './phrases';
import Typewriter from './typewriter';

function Hero() {
    const name = "Wladimyr Mojica";
    const role = "Desarollador Frontend";
    const [currentPhrase, setCurrentPhrase] = useState('');
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentPhrase((prev) => prev + phrases[index][charIndex]);
            setCharIndex((prev) => prev + 1);
        },100);


        if(charIndex === phrases[index].length){
            clearTimeout(timeout);
            setTimeout(() => {
                setCharIndex(0);
                setIndex((prev) => (prev + 1) % phrases.length);
                setCurrentPhrase('');
            },2000)
        }
        return () => clearTimeout(timeout);
    },[charIndex, index]);



    
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <motion.h1
                    initial={{opacity:0, x: -50}}
                    animate={{opacity:1, x: 0}}
                    transition={{duration: 3}}
                >
                    Hola! <br/> Soy <span className={styles.name}>{name}</span>
                </motion.h1>

                <motion.h2
                    className={styles.role}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    {role}
                </motion.h2>

                

                <Typewriter texts={phrases}/>




                <div className={styles.buttonContainer}>
                    <motion.button 
                        className={styles.downloadButton} 
                        aria-label="Download CV"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5}}
                        whileTap={{ scale: 0.9 }}
                    >
                        <i className="bi bi-download"></i> Descargar CV
                    </motion.button>
                    
                </div>
            </div>

            
        </section>
    );
}

export default Hero;