import { span } from 'motion/react-client';
import styles from './Projects.module.css'
import projectsData from './projectsData';
import {motion} from 'framer-motion';

function Projects(){

    return(
        <section className={styles.projectsSection} id="projects">
            <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>
            <p className={styles.sectionDescription}>Aquí encontrarás algunos de mis proyectos más destacados.</p>
            <div className={styles.projectsGrid}>
                {projectsData.map(project => (
                <div key={project.id} className={styles.projectCard}>
                    <img src={project.image} alt={project.title} />
                        <div className={styles.projectLinks}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className={styles.techTags}>
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className={styles.techTag}>{tech}</span>
                                ))}
                            </div>

                            <div className={styles.buttons}>
                                <motion.a
                                    href={project.liveUrl}
                                    className={styles.button}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                >
                                    Visualizar Proyecto
                                </motion.a>
                                <motion.a
                                    href={project.githubUrl}
                                    className={styles.button}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                >
                                    Repositorio Github
                                </motion.a>
                            </div>
                        </div>
                </div>
                ))}
            </div>
            <motion.button
                className={styles.viewAllButton}
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: 0 }}
                whileHover={{ rotate: 2, scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
            >
            Ver Todos los Proyectos
            </motion.button>
        </section>
    )


}

export default Projects;