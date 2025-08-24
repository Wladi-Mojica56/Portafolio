import React from 'react';
import styles from './SobreMi.module.css';
import { name, textAbout } from './aboutData.js';



function SobreMi() {

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.containerLeft}>
                    <h1>{name}</h1>
                    <p>{textAbout}</p>
                </div>
                <div className={styles.containerRight}>
                    <img src="https://i.pinimg.com/736x/28/9c/14/289c14f7342171468efc1ea3d3d512dd.jpg" alt="foto perfil" className={styles.imgPerfil}/>
                </div>
            </div>
            
        </div>
    )
}

export default SobreMi;