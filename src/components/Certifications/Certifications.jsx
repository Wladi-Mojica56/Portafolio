import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { certificationsData } from './certificationsData';
import styles from './Certifications.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';

function Certifications() {
    return (
        <section className={styles.certificationsSection} id="certifications">
            <h2>Featured Certifications</h2>
            
            <Swiper
                modules={[Autoplay, Pagination, EffectCoverflow]}
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides
                loop
                effect="coverflow"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
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
                                <h3>{certification.title}</h3>
                                <p className={styles.issuer}>{certification.issuer}</p>
                                {certification.hours && <p className={styles.hours}>{certification.hours}</p>}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Certifications;