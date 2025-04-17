// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
// import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";




const Header = (props) => {
    // const [menuActive, setMenuState] = useState(false);
    // const [cartActive, setcartState] = useState(false);

    // const SubmitHandler = (e) => {
    //     e.preventDefault()
    // }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    // const { carts } = props;

    return (
        <header id="header">
            <div className={"" + props.hclass}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-md-6 col-6 d-lg-none dl-block">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={props.Logo} alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/home">Главная</Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/about">О нас</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/service">Услуги</Link>

                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/project">Наши преимущества</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            {/* <Link onClick={ClickHandler} to="/blog">Новости </Link> */}
                                            {/* <ul className="sub-menu">
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
                                            </ul> */}
                                        </li>

                                        <li><Link onClick={ClickHandler} to="/contact">Контакт</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};


export default connect(mapStateToProps, { removeFromCart })(Header);














