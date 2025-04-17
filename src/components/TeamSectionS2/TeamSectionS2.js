import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import Shape from '../../images/team/star.svg'
import img1 from '../../images/team/img-1.jpg'
import img2 from '../../images/team/img-2.jpg'
import img3 from '../../images/team/img-3.jpg'
import img4 from '../../images/team/img-4.jpg'

const TeamData = [
    {
        id: '01',
        title: 'Nikita Fraley',
        subtitle: 'Team Manager',
        Imga: img1,
    },
    {
        id: '02',
        title: 'Ronald Trisna',
        subtitle: 'Cargo Supervisor',
        Imga: img2,
    },
    {
        id: '03',
        title: 'Sharri Trevino',
        subtitle: 'Senior Executive',
        Imga: img3,
    },
    {
        id: '04',
        title: 'Elza Bernal',
        subtitle: 'Marketing Manager',
        Imga: img4,
    }
]

const TeamSectionS2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <section className="wpo-team-section-s3 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-12">
                        <div className="wpo-section-title">
                            <span>TEAM MEMBERS</span>
                            <h2>Dedicated people always ready for our clients support.</h2>
                            <Link onClick={ClickHandler} className="theme-btn-s2" to="/service">All Services</Link>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-12">
                        <div className="wpo-team-wrap">
                            <div className="row">
                                {TeamData.slice(0, 3).map((team, index) => (
                                    <div className="col col-lg-4 col-sm-6 col-12" key={index}>
                                        <div className="wpo-team-item">
                                            <div className="wpo-team-img">
                                                <img src={team.Imga} alt="" />
                                                <div className={`social ${isActive ? 'active' : ''}`}>
                                                    <ul>
                                                        <li className="switch" onClick={handleToggle}><i><img src={Shape}
                                                            alt="" /></i></li>
                                                        <li className="on"><a href="#"><i className="ti-facebook"></i></a></li>
                                                        <li className="on"><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                                        <li className="on"><a href="#"><i className="ti-instagram"></i></a></li>
                                                        <li className="on"><a href="#"><i className="ti-skype"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="wpo-team-text">
                                                <h2>{team.title}</h2>
                                                <span>{team.subtitle}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TeamSectionS2;