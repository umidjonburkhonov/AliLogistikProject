import React from "react";
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle/SectionTitle";
import Services from "../../api/Services";



const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { SectionTitleShow = true, ServiceBtn = false } = props

    return (
        <div className={"" + props.hclass}>
            <div className="container">
                {SectionTitleShow && (
                    <SectionTitle subtitle={'НАШИ УСЛУГИ'} title={'Лучшие решения здесь'} />
                )}
                <div className="wpo-service-wrap">
                    <div className="row align-items-center">
                        {Services.slice(0, 6).map((service, item) => (
                            <div className="col-lg-4 col-md-6 col-12" key={item}>
                                <div className="wpo-service-item mb-4">
                                    <div className="wpo-service-img">
                                        <img src={service.image} alt="" />
                                    </div>
                                    <div className="wpo-service-content">
                                        <span>{service.subtitle}</span>
                                        <h2>{service.title}</h2>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {ServiceBtn && (
                        <div className="service-btn">
                            <Link onClick={ClickHandler} className="theme-btn-s2" to="/service">Все услуги</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}

export default ServiceSection;



