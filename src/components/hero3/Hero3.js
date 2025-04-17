import React from 'react';
import { Link } from 'react-router-dom';
import Slider1 from '../../images/slider/s1.jpg'
import Slider2 from '../../images/slider/s2.jpg'
import Slider3 from '../../images/slider/s3.jpg'
import Shape from '../../images/slider/o-shape.png'
function Hero3() {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="static-hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="slide-title ">
                            <h2>Trusted transport company.</h2>
                        </div>
                        <div className="slide-text">
                            <p>Sheets containing passages more recently software.</p>
                        </div>
                        <div className="clearfix"></div>
                        <div className="slide-btns ">
                            <Link onClick={ClickHandler} to="/service" className="theme-btn">All Services</Link>
                        </div>
                        <div className="hero-right-wrap">
                            <div className="hero-left-img ">
                                <span><img src={Slider1} alt="" /></span>
                                <span><img src={Slider2} alt="" /></span>
                            </div>
                            <div className="hero-right-img ">
                                <img src={Slider3} alt="" />
                            </div>
                            <div className="o-shape floating-item"><img src={Shape} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero3;