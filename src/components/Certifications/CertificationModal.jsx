import React from 'react';
import styles from './CertificationModal.module.css';

function CertificationModal({certification, onClose}){
    if (!certification) return null;
    return (
        <div className={styles.modal}>
                <div className={styles.modalContent}>
                    
                
                    {/* Lado izquierdo - Imagen */}
                    <div className={styles.imageSection}>
                        <button className={styles.closeButton} onClick={onClose}><i className="bi bi-x"></i></button>
                        <img src={certification.image} alt={certification.title} />
                    </div>
                    
                    {/* Lado derecho - Textos */}
                    <div className={styles.textSection}>
                        <h3>{certification.title}</h3>
                        <p>{certification.description}</p>
                        <p className={styles.issuer}>{certification.issuer}</p>
                        {certification.hours && <p className={styles.hours}>{certification.hours}</p>}
                    </div>
            </div>
        </div>
    );
}

export default CertificationModal;
// This component displays a modal with detailed information about a certification.