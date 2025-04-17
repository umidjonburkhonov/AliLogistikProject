import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from '../SectionTitle/SectionTitle';
import sImg1 from '../../images/testimonial/5.jpg'
import sImg2 from '../../images/testimonial/6.jpg'
import sImg3 from '../../images/testimonial/4.jpg'


const testimonials = [
    {
        id: '01',
        img: sImg1,
        Des: "It is long established fact that a reader will be distracted readable content of page when looking at its layout points using lorem ipsum is that it has a less normal distribution making look like readable.",
        title: 'Harry Abraham',
        sub: "UI/UX Designer",
    },
    {
        id: '02',
        img: sImg2,
        Des: "It is long established fact that a reader will be distracted readable content of page when looking at its layout points using lorem ipsum is that it has a less normal distribution making look like readable.",
        title: 'Jenelia Orkid',
        sub: "Fashion Designer",
    },
    {
        id: '03',
        img: sImg3,
        Des: "It is long established fact that a reader will be distracted readable content of page when looking at its layout points using lorem ipsum is that it has a less normal distribution making look like readable.",
        title: 'Cathi Falcon',
        sub: "CEO Barta",
    },





]

const TestimonialS3 = () => {

    const settings = {
        dots: false,
        autoplay: false,
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
        <section className="wpo-testimonial-section-s3 section-padding">
            <div className="container">
                <SectionTitle subtitle={'HAPPY CUSTOMER'} title={'What clients say?'} />
            </div>
            <div className="container-fluid">

            </div>
            <div className="row align-items-center">
                <div className="col-lg-12 col-md-12 col-12">
                    <div className="wpo-testimonial-right ">
                        <Slider {...settings} className='testimonial-active'>
                            {testimonials.map((testimonial, item) => (
                                <div className="wpo-testimonial-item" key={item}>
                                    <div className="wpo-testimonial-client-img">
                                        <img src={testimonial.img} alt="" />
                                    </div>
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
        </section>
    );
};

export default TestimonialS3;