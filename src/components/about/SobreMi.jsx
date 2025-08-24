import React from 'react';
import styles from './SobreMi.module.css';
import { name, textAbout } from './aboutData.js';



function SobreMi() {

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.containerLeft}>
                    <h1>En Mantenimiento</h1>
                    <p>Volveremos en Breve</p>
                </div>
                
            </div>
            
        </div>
    )
}

export default SobreMi;