import React from 'react';
import { Link } from 'react-router-dom';

import About5 from '../../images/about/img-5.jpg'
import About6 from '../../images/about/img-6.jpg'
import Icon from '../../images/about/Icon.svg'

function aboutS3() {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const progressData = [
        { title: 'Air Freight', width: '80%', value: 80 },
        { title: 'Road Freight', width: '90%', value: 90 },
    ];


    return (
        <section className="wpo-about-section-s3 section-padding">
            <div className="container">
                <div className="wpo-about-section-wrapper">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <div className="wpo-about-img-left">
                                    <img src={About5} alt="" />
                                </div>
                                <div className="about-img-inner">
                                    <img src={About6} alt="" />
                                </div>
                                <div className="about-logo">
                                    <i><img src={Icon} alt="" /></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                            <div className="wpo-about-content">
                                <div className="wpo-about-content-top">
                                    <h2>Why should choose our <span>Transfar</span> transport service?</h2>
                                    <p>It was popularised with the release sheets containing passages and more recently
                                        with desktop publishing software.</p>
                                </div>
                                <div className="wpo-progress-items">
                                    {progressData.map((item, index) => (
                                        <div className="wpo-progress-single" key={index}>
                                            <h5 className="progress-title">{item.title}</h5>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: item.width }}
                                                    aria-valuenow={item.value}
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                            <span className="progress-number">{item.value}%</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="wpo-about-check-wrap">
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
                    </div>
                </div>
            </div>
        </section>
    );
}

export default aboutS3;