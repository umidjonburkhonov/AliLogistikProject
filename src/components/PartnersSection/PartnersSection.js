import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pimg1 from '../../images/partner/1.png';
import Pimg2 from '../../images/partner/2.png';
import Pimg3 from '../../images/partner/3.png';
import Pimg4 from '../../images/partner/4.png';
import Pimg5 from '../../images/partner/5.png';

const PartnersSection = (props) => {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            }

        ]
    };

    const {PatnarTitleShow = false} = props

    return (
        <section className="partners-section section-padding">
            <h2 className="hidden">Partners</h2>
            <div className="container">
                <div className="row align-items-center">
                    {PatnarTitleShow && (
                        <div className="col-lg-2 col-12">
                            <h3>Worldwide <br/>
                                <span>10,000+</span> Trusted
                                partners.
                            </h3>
                        </div>
                    )}
                    <div className={"" +props.CollClass}>
                        <div className="partner-grids partners-slider">
                            <Slider {...settings}>
                                <div className="grid">
                                    <img src={Pimg1} alt="" />
                                </div>
                                <div className="grid">
                                    <img src={Pimg2} alt="" />
                                </div>
                                <div className="grid">
                                    <img src={Pimg3} alt="" />
                                </div>
                                <div className="grid">
                                    <img src={Pimg4} alt="" />
                                </div>
                                <div className="grid">
                                    <img src={Pimg5} alt="" />
                                </div>
                                <div className="grid">
                                    <img src={Pimg3} alt="" />
                                </div>
                                <div className="grid">
                                    <img src={Pimg1} alt="" />
                                </div>
                                <div className="grid">
                                    <img src={Pimg2} alt="" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;