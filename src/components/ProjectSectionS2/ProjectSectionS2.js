import React from 'react';
import { Link } from 'react-router-dom';
import Projects from '../../api/projects';
import SectionTitle from '../SectionTitle/SectionTitle';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Shape from '../../images/project/shape2.png'

const ProjectSectionS2 = () => {
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
        <section className="wpo-project-section-s2 section-padding">
            <div className="container-fluid">
                <SectionTitle subtitle={'Our Projects'} title={'Complete Projects'} />
                <div className="row">
                    <Slider {...settings} >
                        {Projects.slice(4, 8).map((project, index) => (
                            <div className="wpo-project-item" key={index}>
                                <div className="wpo-project-img">
                                    <img src={project.pimg} alt="" />
                                    <div className="wpo-project-hidden-text">
                                        <div className="thumb"><span>{project.subtitle}</span></div>
                                        <h2>{project.title}</h2>
                                        <div className="invisible-text">
                                            <h4>{project.id}</h4>
                                        </div>
                                        <Link onClick={ClickHandler} to={`/project-single/${project.slug}`}>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="shape">
                <img src={Shape} alt="" />
            </div>
        </section>
    );
};

export default ProjectSectionS2;