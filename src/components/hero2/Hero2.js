import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import hero4 from '../../images/slider/slide-4.jpg';
import hero5 from '../../images/slider/slide-5.jpg';
import hero6 from '../../images/slider/slide-6.jpg';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero2 = () => {
    return (
        <section className="wpo-hero-slider wpo-hero-slider-s2">
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero4})` }}>
                        <div className="gradient-overlay"></div>
                        <div className="container">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2><span>Trusted</span> transport <span>secured</span></h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Sheets containing passages more recently software.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns ">
                                    <Link onClick={ClickHandler} to="/service" className="theme-btn-s2">All Services</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero5})` }}>
                        <div className="gradient-overlay"></div>
                        <div className="container">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2><span>Trusted</span> transport <span>secured</span></h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Sheets containing passages more recently software.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns ">
                                    <Link onClick={ClickHandler} to="/service" className="theme-btn-s2">All Services</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero6})` }}>
                        <div className="gradient-overlay"></div>
                        <div className="container">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2><span>Trusted</span> transport <span>secured</span></h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Sheets containing passages more recently software.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns ">
                                    <Link onClick={ClickHandler} to="/service" className="theme-btn-s2">All Services</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        </section>
    );
};

export default Hero2;



