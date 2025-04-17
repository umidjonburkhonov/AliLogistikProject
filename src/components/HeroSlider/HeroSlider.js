import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-3.jpg'
import hero3 from '../../images/slider/slide-2.jpg'

const HeroSlider = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="wpo-hero-slider wpo-hero-slider-s1" >
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
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                        <div className="gradient-overlay"></div>
                        <div className="vector-1"></div>
                        <div className="vector-2"></div>
                        <div className="vector-3"></div>
                        <div className="vector-4"></div>
                        <div className="vector-5"></div>
                        <div className="vector-6"></div>
                        <div className="vector-7"></div>
                        <div className="vector-8"></div>
                        <div className="container">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>ALI NAKLIYOT LOGISTIC LLC – ваш надёжный партнёр Ali Naqliyot</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Транспортно-экспедиторское обслуживание грузоперевозок всеми видами транспорта в странах СНГ и дальнего зарубежья</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns">
                                    <Link onClick={ClickHandler} to="/service" className="theme-btn-s2">Все услуги</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="gradient-overlay"></div>
                        <div className="vector-1"></div>
                        <div className="vector-2"></div>
                        <div className="vector-3"></div>
                        <div className="vector-4"></div>
                        <div className="vector-5"></div>
                        <div className="vector-6"></div>
                        <div className="vector-7"></div>
                        <div className="vector-8"></div>
                        <div className="container">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>ALI NAKLIYOT LOGISTIC LLC – ваш надёжный партнёр Ali Naqliyot</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Транспортно-экспедиторское обслуживание грузоперевозок всеми видами транспорта в странах СНГ и дальнего зарубежья</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns">
                                    <Link onClick={ClickHandler} to="/service" className="theme-btn-s2">Все услуги</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                        <div className="gradient-overlay"></div>
                        <div className="vector-1"></div>
                        <div className="vector-2"></div>
                        <div className="vector-3"></div>
                        <div className="vector-4"></div>
                        <div className="vector-5"></div>
                        <div className="vector-6"></div>
                        <div className="vector-7"></div>
                        <div className="vector-8"></div>
                        <div className="container">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>ALI NAKLIYOT LOGISTIC LLC – ваш надёжный партнёр Ali Naqliyot</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Транспортно-экспедиторское обслуживание грузоперевозок всеми видами транспорта в странах СНГ и дальнего зарубежья</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns">
                                    <Link onClick={ClickHandler} to="/service" className="theme-btn-s2">Все услуги</Link>
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

export default HeroSlider;






