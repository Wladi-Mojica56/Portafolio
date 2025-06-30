import styles from './hero.module.css';
import imagen from '../../Imgs/arco-fondo-amarillo.jpg';

function Hero() {
    const name = "Wladimyr Mojica";
    const role = "Desarollador Frontend";
    const description = "No solo escribo código,\norquesto experiencias digitales\nque hacen que los usuarios no quieran cerrar la pestaña";

    return (
        <section className={styles.hero}>
            <div className={styles.leftContent}>
                <h1>{name}</h1>
                <h2>{role}</h2>
                <p>{description}</p>

                <div className={styles.buttonContainer}>
                    <button className={styles.downloadButton} onClick={() => window.open('/files/Boulevard-Despues-de-el.pdf', '_blank')}>
                        Descargar CV
                    </button>
                    <button className={styles.downloadButton} onClick={() => window.open('/path/to/cv-ats.pdf', '_blank')}>
                        Descargar CV ATS
                    </button>
                </div>
            </div>

            <div className={styles.rightContent}>
                <div className={styles.holographicContainer}>
                    {/*Fragmentos de Codigo */}
                    <div className={`${styles.codeFragment} ${styles.react} ${styles.fragment1}`}>
                        {"useState()"}
                    </div>

                    <div className={`${styles.codeFragment} ${styles.javascript} ${styles.fragment2}`}>
                        {"handleClick()"}
                    </div>

                    <div className={`${styles.codeFragment} ${styles.css} ${styles.fragment3}`}>
                        {"display: flex;"}
                    </div>

                    <div className={`${styles.codeFragment} ${styles.html} ${styles.fragment4}`}>
                        {"<div className>"}
                    </div>

                    <div className={`${styles.codeFragment} ${styles.react} ${styles.fragment5}`}>
                        {"fetchData()"}
                    </div>

                    <div className={`${styles.codeFragment} ${styles.typescript} ${styles.fragment6}`}>
                        {"interface Props"}
                    </div>

                    <div className={`${styles.codeFragment} ${styles.node} ${styles.fragment7}`}>
                        {"app.get('/api')"}
                    </div>

                    <div className={`${styles.codeFragment} ${styles.git} ${styles.fragment8}`}>
                        {"git commit"}
                    </div>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <img src={imagen} alt="imagen de prueba" className={styles.imagen} />
            </div>
        </section>
    );
}

export default Hero;