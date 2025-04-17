import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';
import Projects from '../../api/projects';

const ProjectSectionS3 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={`wpo-project-section-s3 section-padding ${props.Toppadding}`}>
            <div className="container">
                <SectionTitle subtitle={'Our Projects'} title={'Complete Projects'} />
                <div className="wpo-project-wrapper">
                    <div className="row">
                        {Projects.slice(8, 14).map((project, index) => (
                            <div className="col-lg-4 col-md-6 col-12" key={index}>
                            <div className="wpo-project-item">
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSectionS3;