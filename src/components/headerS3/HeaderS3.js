import React from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'



const HeaderS3 = (props) => {


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <header id="header">
            <div className={"" + props.hclass}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={props.Logo}
                                        alt="" /></Link>
                                </div>
                            </div>
                            <div className="col col-xl-5 col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="#">Home</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/home">Home style 1</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home-2">Home style 2</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home-3">Home style 3</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="#">Services</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/service">Service Style 1</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-s2">Service Style 2</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-s3">Service Style 3</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-single/Air-Transport">Air Transport</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-single/Road-Transport">Road Transport</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-single/Ocean-Transport2">Ocean Transport</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-single/Train-Transport3">Train Transport</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-single/Ocean-Transport2">Service Single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="#">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/tracking">Tracking</Link></li>
                                                <li><Link onClick={ClickHandler} to="/shop">Shop</Link></li>
                                                <li><Link onClick={ClickHandler} to="/shop-single/Fresh-key-Lime">Shop Single</Link></li>
                                                <li><Link onClick={ClickHandler} to="/cart">Cart</Link></li>
                                                <li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li>
                                                <li><Link onClick={ClickHandler} to="/404">404</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="#">Projects</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/project">Project Style 1</Link></li>
                                                <li><Link onClick={ClickHandler} to="/project-s2">Project Style 2</Link></li>
                                                <li><Link onClick={ClickHandler} to="/project-s3">Project Style 3</Link></li>
                                                <li><Link onClick={ClickHandler} to="/project-single/Special-Transport-Solutions5">Project Single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/#">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/blog">Blog right sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog fullwidth</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} to="#">Blog details</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} to="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Blog details right sidebar</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} to="/blog-single-left-sidebar/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Blog details left
                                                            sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/blog-single-fullwidth/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Blog details
                                                            fullwidth</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="contact-info">
                                        <div className="icon">
                                            <i className="fi flaticon-phone-call"></i>
                                        </div>
                                        <div className="info-text">
                                            <span>Call Us:</span>
                                            <p>00 567 458 796 47</p>
                                        </div>
                                    </div>
                                    <div className="contact-info">
                                        <div className="icon">
                                            <i className="fi flaticon-email"></i>
                                        </div>
                                        <div className="info-text">
                                            <span>E-mail Now:</span>
                                            <p>infoorgco@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="close-form">
                                        <Link onClick={ClickHandler} className="theme-btn" to="/tracking">Tracking now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}


export default HeaderS3;

















