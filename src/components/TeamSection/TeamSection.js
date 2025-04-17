import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/team/img-1.jpg'
import img2 from '../../images/team/img-2.jpg'
import img3 from '../../images/team/img-3.jpg'
import img4 from '../../images/team/img-4.jpg'
import SectionTitle from '../SectionTitle/SectionTitle';
const TeamData = [
    {
        id:'01',
        title:'Nikita Fraley',
        subtitle:'Team Manager',
        Imga:img1,
    },
    {
        id:'02',
        title:'Ronald Trisna',
        subtitle:'Cargo Supervisor',
        Imga:img2,
    },
    {
        id:'03',
        title:'Sharri Trevino',
        subtitle:'Senior Executive',
        Imga:img3,
    },
    {
        id:'04',
        title:'Elza Bernal',
        subtitle:'Marketing Manager',
        Imga:img4,
    }
]

const TeamSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="wpo-team-section section-padding">
            <div className="container">
                <SectionTitle subtitle={'TEAM MEMBERS'} title={'Our Team Member'} />
                <div className="wpo-team-wrap">
                    <div className="row">
                        {TeamData.slice(0,4).map((team,index) => (
                        <div className="col col-lg-3 col-sm-6 col-12" key={index}>
                            <div className="wpo-team-item ">
                                <div className="wpo-team-img">
                                    <img src={team.Imga} alt="" />
                                </div>
                                <div className="wpo-team-text">
                                    <div className="social">
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="#"><i className="ti-facebook"></i></Link></li>
                                            <li><Link onClick={ClickHandler} to="#"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link onClick={ClickHandler} to="#"><i className="ti-skype"></i></Link></li>
                                            <li><Link onClick={ClickHandler} to="#"><i className="ti-linkedin"></i></Link></li>
                                        </ul>
                                    </div>
                                    <h2>{team.title}</h2>
                                    <span>{team.subtitle}</span>
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

export default TeamSection;