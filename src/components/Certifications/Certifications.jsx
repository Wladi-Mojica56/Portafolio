import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { certificationsData } from './certificationsData';
import styles from './Certifications.module.css';
import CertificationModal from './CertificationModal';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { motion } from 'framer-motion';

function Certifications() {
    const [selectedCertification, setSelectedCertification] = useState(null);
    const navigate = useNavigate();

    const handleViewMore = (certification) => {
        setSelectedCertification(certification);
    };

    const closeModal = () => {
        setSelectedCertification(null);
    };

    const handleViewAllCertifications = () => {
        navigate('/certificaciones');
    }


    return (
        <section className={styles.certificationsSection} id="certifications">
            <h2>Certificaciones Destacadas</h2>
            <p className={styles.certDescription}>Reconocimientos a mi aprendizaje y actualización constante.</p>

            <Swiper
                modules={[Autoplay, Pagination, EffectCoverflow]}
                spaceBetween={30}
                centeredSlides
                effect="coverflow"
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 150,
                    modifier: 2,
                    slideShadows: false,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className={styles.certificationsSwiper}
            >
                {certificationsData.map((certification) => (
                    <SwiperSlide key={certification.id} className={styles.certSlide}>
                        <div className={styles.certCard}>
                            <img src={certification.image} alt={certification.title} />
                            <div className={styles.certInfo}>
                                <h3 className={styles.cardtitle}>{certification.title}</h3>
                                <p className={styles.issuer}>{certification.issuer}</p>
                                
                                
                                <motion.button
                                    className={styles.viewMoreButton}
                                    onClick={() => handleViewMore(certification)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                >
                                    Ver Detalles
                                </motion.button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            <motion.button
                className={styles.viewAllButton}
                onClick={handleViewAllCertifications}
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: 0 }}
                whileHover={{ rotate: 2, scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
                >
                Ver Todas las Certificaciones
            </motion.button>

                
            {selectedCertification && (
                <CertificationModal certification={selectedCertification} onClose={closeModal} />
            )}
        </section>
    );
}

export default Certifications;