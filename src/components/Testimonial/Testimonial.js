import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from '../SectionTitle/SectionTitle';
import sImg1 from '../../images/testimonial/1.jpg'
import sImg2 from '../../images/testimonial/2.jpg'
import sImg3 from '../../images/testimonial/3.jpg'

import Img1 from '../../images/testimonial/img-1.jpg'
import Img2 from '../../images/testimonial/img-2.jpg'
import Img3 from '../../images/testimonial/img-3.jpg'
import Img4 from '../../images/testimonial/img-4.jpg'
import Img5 from '../../images/testimonial/img-5.jpg'
import Img6 from '../../images/testimonial/img-6.jpg'
import Img7 from '../../images/testimonial/img-7.jpg'
import Img8 from '../../images/testimonial/img-8.jpg'
import Img9 from '../../images/testimonial/img-9.jpg'
import Shape from '../../images/testimonial/shape.png'


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




const Testimonial = (props) => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                arrows: false,
                dots: true,
            }
        }

        ]
    };


    return (
        <section className="wpo-testimonial-section">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="wpo-testimonial-left">
                            <div className="wpo-testimonial-image-left">
                                <div className="image-1">
                                    <img src={Img1} alt="" />
                                </div>
                                <div className="image-2 floating-item">
                                    <img src={Img2} alt="" />
                                </div>
                                <div className="image-3">
                                    <img src={Img3} alt="" />
                                </div>
                                <div className="image-4 floating-item">
                                    <img src={Img4} alt="" />
                                </div>
                                <div className="image-5 floating-item">
                                    <img src={Img5} alt="" />
                                </div>
                                <div className="image-6">
                                    <img src={Img6} alt="" />
                                </div>
                                <div className="image-7 floating-item">
                                    <img src={Img7} alt="" />
                                </div>
                                <div className="image-8 floating-item">
                                    <img src={Img8} alt="" />
                                </div>
                                <div className="image-9">
                                    <img src={Img9} alt="" />
                                </div>
                            </div>
                            <div className="left-shape">
                                <img src={Shape} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12">
                        <div className="wpo-testimonial-right">
                            <SectionTitle subtitle={'HAPPY CUSTOMER'} title={'What clients say?'} />
                            <div className="wpo-testimonial-wrap">
                                <Slider {...settings}>
                                    {testimonials.map((testimonial, item) => (
                                        <div className="wpo-testimonial-slide" key={item}>
                                            <ul>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                            <p>{testimonial.Des}</p>
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
                                    ))}
                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;






