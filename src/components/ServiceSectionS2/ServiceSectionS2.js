import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';
import Services from "../../api/Services";

const ServiceSectionS2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const { SectionTitleShow = true, ServiceBtn = false } = props
    return (
        <div className={"" + props.hclass}>
            <div className="container">
                {SectionTitleShow && (
                    <SectionTitle subtitle={'Our Services'} title={'Best solutions here'} />
                )}
                <div className="wpo-service-wrap">
                    <div className="row align-items-center">
                        {Services.slice(3, 7).map((service, item) => (
                            <div className="col-lg-6 col-md-12 col-12" key={item}>
                                <div className="wpo-service-item ">
                                    <div className="wpo-service-img">
                                        <img src={service.image} alt="" />
                                    </div>
                                    <div className="wpo-service-content">
                                        <span>{service.subtitle}</span>
                                        <h2>{service.title}</h2>
                                        <p>{service.description}</p>
                                        <Link to={`/service-single/${service.slug}`} onClick={ClickHandler}>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {ServiceBtn && (
                        <div className="service-btn">
                            <Link onClick={ClickHandler} className="theme-btn" to="/service">All Services</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceSectionS2;