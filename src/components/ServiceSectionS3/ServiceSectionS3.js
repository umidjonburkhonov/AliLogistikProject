import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';
import Services from "../../api/Services";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceSectionS3 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                }
            }

        ]
    };

    return (
        <div className="wpo-service-area-s3 section-padding">
            <div className="container">
                <SectionTitle subtitle={'Our Services'} title={'Best solutions here'} />
                <div className="wpo-service-wrap">
                    <div className="service-active">
                        <Slider {...settings}>
                            {Services.slice(7, 11).map((service, item) => (
                                <div className="col-lg-6 col-md-12 col-12" key={item}>
                                    <div className="wpo-service-item ">
                                        <div className="wpo-service-img">
                                            <img src={service.image} alt="" />
                                        </div>
                                        <div className="wpo-service-content">
                                            <div className="icon">
                                                <i className={service.icon}></i>
                                            </div>
                                            <h2>{service.title}</h2>
                                            <p>{service.description}</p>
                                            <Link to={`/service-single/${service.slug}`} onClick={ClickHandler}>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSectionS3;