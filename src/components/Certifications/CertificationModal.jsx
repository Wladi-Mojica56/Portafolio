import React from 'react';
import styles from './CertificationModal.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 40 }
};

function CertificationModal({certification, onClose}){
    if (!certification) return null;
    return (
        <AnimatePresence>
            <motion.div
                className={styles.modal}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                transition={{ duration: 0.35, type: "spring", stiffness: 180 }}
            >
                <div className={styles.modalContent}>
                    
                
                    {/* Lado izquierdo - Imagen */}
                    <div className={styles.imageSection}>
                        <button className={styles.closeButton} onClick={onClose}><i className="bi bi-x"></i></button>
                        <img src={certification.image} alt={certification.title} />
                    </div>
                    
                    {/* Lado derecho - Textos */}
                    <div className={styles.textSection}>
                        <p className={styles.issuer}>{certification.issuer}</p>
                        <h3>{certification.title}</h3>
                        <p className={styles.description}>{certification.description}   </p>
                        {certification.hours && <p className={styles.hours}>{certification.hours}</p>}
                    </div>
            </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default CertificationModal;
// This component displays a modal with detailed information about a certification.