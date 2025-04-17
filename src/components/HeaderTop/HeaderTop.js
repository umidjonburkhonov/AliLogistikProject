import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo6.png'

const HeaderTop = () => {
    return (
        <div className="topbar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-12 d-lg-block d-none">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-9 col-12">
                        <div className="contyact-info-wrap">
                            <div className="contact-info">
                                <div className="icon">
                                    <i className="fi flaticon-phone-call"></i>
                                </div>
                                <div className="info-text">
                                    <span>Телефон:</span>
                                    <p>+992927050021</p>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="icon">
                                    <i className="fi flaticon-email"></i>
                                </div>
                                <div className="info-text">
                                    <span>E-mail</span>
                                    <p>alinaqliyot@mail.ru</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;