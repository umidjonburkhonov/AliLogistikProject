import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogs from '../../api/blogs'
import SectionTitle from '../SectionTitle/SectionTitle';

const BlogSectionS2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        centerMode: true,
        centerPadding: "0",
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
                arrows: false,
                dots: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        }
        ]
    };

    return (
        <section className="wpo-blog-section-s2 section-padding">
            <div className="container">
                <SectionTitle subtitle={'Latest News'} title={'Latest News & Article'} />
                <div className="wpo-blog-items">
                    <div className="blog-slide-active">
                        <Slider {...settings}>
                            {blogs.slice(3, 7).map((bloge, bkye) => (
                                <div className="wpo-blog-item" key={bkye}>
                                    <div className="wpo-blog-img">
                                        <img src={bloge.screens} alt="" />
                                    </div>
                                    <div className="wpo-blog-content">
                                        <div className="wpo-blog-content-top">
                                            <span>Transport</span>
                                            <h2><Link onClick={ClickHandler} to={`/blog-single/${bloge.slug}`}>{bloge.title}</Link>
                                            </h2>
                                            <p>{bloge.description}</p>
                                            <ul>
                                                <li>02 Oct 2024</li>
                                                <li>By Kiara Cradock</li>
                                            </ul>
                                            <Link className="b-btn" onClick={ClickHandler} to={`/blog-single/${bloge.slug}`}>Read More</Link>
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

export default BlogSectionS2;