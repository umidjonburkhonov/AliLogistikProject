import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from '../SectionTitle/SectionTitle';
import sImg1 from '../../images/testimonial/1.jpg'
import sImg2 from '../../images/testimonial/2.jpg'
import sImg3 from '../../images/testimonial/3.jpg'


const testimonials = [
    {
        id: '01',
        img: sImg1,
        Des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more- or - less normal distribution making it look like readable a reader will be distracted by the readable content.",
        title: 'Harry Abraham',
        sub: "UI/UX Designer",
    },
    {
        id: '02',
        img: sImg2,
        Des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more- or - less normal distribution making it look like readable a reader will be distracted by the readable content.",
        title: 'Jenelia Orkid',
        sub: "Fashion Designer",
    },
    {
        id: '03',
        img: sImg3,
        Des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more- or - less normal distribution making it look like readable a reader will be distracted by the readable content.",
        title: 'Cathi Falcon',
        sub: "CEO Barta",
    },





]

const TestimonialS2 = () => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
            }
        }

        ]
    };

    return (
        <section className="wpo-testimonial-section-s2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="wpo-testimonial-right">
                            <SectionTitle subtitle={'HAPPY CUSTOMER'} title={'What clients say?'} />
                            <div className="testimonial-active">
                                <Slider {...settings}>
                                    {testimonials.map((testimonial, item) => (
                                        <div className="wpo-testimonial-item" key={item}>
                                            <div className="wpo-testimonial-slide">
                                                <div className="wpo-testimonial-slide-inner">
                                                    <ul>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                    </ul>
                                                    <p>{testimonial.Des}</p>
                                                </div>
                                                <div className="wpo-testimonial-client">
                                                    <div className="wpo-testimonial-client-img">
                                                        <img src={testimonial.img} alt="" />
                                                    </div>
                                                    <div className="wpo-testimonial-client-text">
                                                        <h4>{testimonial.title}</h4>
                                                        <span>{testimonial.sub}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialS2;