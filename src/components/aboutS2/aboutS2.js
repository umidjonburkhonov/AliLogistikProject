import React from 'react';
import { Link } from 'react-router-dom';

import Ab2 from '../../images/about/img-3.jpg'
import Ab3 from '../../images/about/img-4.jpg'

const aboutS2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-about-section-s2 section-padding">
            <div className="container">
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                            <div className="wpo-about-content">
                                <div className="wpo-about-content-top">
                                    <h2>Why should choose our <span>Transfar</span> transport service?</h2>
                                    <p>It was popularised with the release sheets containing passages and more recently
                                        with desktop publishing software.</p>
                                </div>
                                <div className="wpo-about-check-wrap">
                                    <div className="wpo-about-check-item">
                                        <p>It was popularised with release sheet containing passages.</p>
                                    </div>
                                    <div className="wpo-about-check-item">
                                        <p>It was popularised with release sheet containing passages.</p>
                                    </div>
                                    <div className="wpo-about-check-item">
                                        <p>It was popularised with release sheet containing passages.</p>
                                    </div>
                                    <div className="wpo-about-check-item">
                                        <p>It was popularised with release sheet containing passages.</p>
                                    </div>
                                </div>
                                <Link onClick={ClickHandler} to="/service" className="theme-btn-s2">All Services</Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                            <div className="wpo-about-img ">
                                <div className="wpo-about-img-left">
                                    <img src={Ab2} alt="" />
                                </div>
                                <div className="about-img-inner">
                                    <img src={Ab3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default aboutS2;
