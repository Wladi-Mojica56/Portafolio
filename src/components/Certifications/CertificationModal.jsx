import React from 'react';
import styles from './CertificationModal.module.css';

function CertificationModal({certification, onClose}){
    if (!certification) return null;
    
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                {/* Terminal Header - Window Controls */}
                <div className={styles.terminalHeader}>
                    <div className={styles.windowControls}>
                        <button className={`${styles.controlButton} ${styles.close}`} onClick={onClose}></button>
                        <button className={`${styles.controlButton} ${styles.minimize}`}></button>
                        <button className={`${styles.controlButton} ${styles.maximize}`}></button>
                    </div>
                    <div className={styles.terminalTitle}>
                        certification_details.json - Visual Studio Code
                    </div>
                    <button className={styles.closeButton} onClick={onClose}>
                        ✕
                    </button>
                </div>

                {/* Terminal Body - Split View */}
                <div className={styles.terminalBody}>
                    {/* Left Panel - Image Display */}
                    <div className={styles.imagePanel}>
                        <div className={styles.imagePanelHeader}>
                            📁 assets/certificates/
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={certification.image} alt={certification.title} />
                        </div>
                    </div>

                    {/* Right Panel - Code/Text Display */}
                    <div className={styles.codePanel}>
                        <div className={styles.codePanelHeader}>
                            <span>certification_details.json</span>
                        </div>
                        <div className={styles.codeContent}>
                            {/* Line Numbers */}
                            <div className={styles.lineNumbers}>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                                <div>6</div>
                                <div>7</div>
                                <div>8</div>
                                <div>9</div>
                                <div>10</div>
                                <div>11</div>
                                <div>12</div>
                                <div>13</div>
                                <div>14</div>
                                <div>15</div>
                            </div>

                            {/* Code Content */}
                            <div className={styles.textContent}>
                                <h3>{certification.title}<span className={styles.cursor}></span></h3>
                                
                                <p>{certification.description}</p>

                                <div className={`${styles.infoSection} ${styles.issuerInfo}`}>
                                    <span className={styles.label}>Institution:</span>
                                    <span className={styles.value}>{certification.issuer}</span>
                                </div>

                                {certification.hours && (
                                    <div className={`${styles.infoSection} ${styles.hoursInfo}`}>
                                        <span className={styles.label}>Duration:</span>
                                        <span className={styles.value}>{certification.hours}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CertificationModal;