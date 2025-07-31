import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Typewriter.module.css';

const Typewriter = ({ texts }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 150; // Velocidad de escritura
    const deletingSpeed = 50; // Velocidad de borrado
    const pauseTime = 1500; // Pausa al final de cada texto

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[textIndex];
            if (isDeleting) {
                setDisplayedText(currentText.substring(0, displayedText.length - 1));
                if (displayedText.length === 0) {
                    setIsDeleting(false);
                    setTextIndex((textIndex + 1) % texts.length);
                }
            } else {
                setDisplayedText(currentText.substring(0, displayedText.length + 1));
                if (displayedText.length === currentText.length) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, textIndex, texts]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.typewriterText}
        >
            <span>{displayedText}</span>
            <span className={styles.cursor}>    </span>
        </motion.div>
    );
};

export default Typewriter;