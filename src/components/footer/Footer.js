import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo4.png'
import Services from '../../api/Services'
/* image */
import Img1 from '../../images/instragram/1.jpg'
import Img2 from '../../images/instragram/2.jpg'
import Img3 from '../../images/instragram/3.jpg'
import Img4 from '../../images/instragram/4.jpg'
import Img5 from '../../images/instragram/5.jpg'
import Img6 from '../../images/instragram/6.jpg'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setError('');
            console.log('Email is valid:', email);
        } else {
            setError('Please enter a valid email address.');
        }
    };

    const { upperContactArea = false, InstagramShow = false, NewsletterShow = true, FooterShape = true } = props

    return (
        <footer className={'' + props.hclass}>
            {upperContactArea && (
                <div className="upper-contact-area">
                    <div className="container">
                        <div className="row">
                            <div className="col col-xs-12">
                                <div className="contact-grids">
                                    <div className="grid">
                                        <div className="icon">
                                            <i className="fi flaticon-location-1"></i>
                                        </div>
                                        <div className="details">
                                            <h5>Локация:</h5>
                                            <p>А.Нозиров 1, 735690 Б.Гафуров</p>
                                        </div>
                                    </div>
                                    <div className="grid">
                                        <div className="icon">
                                            <i className="fi flaticon-email"></i>
                                        </div>
                                        <div className="details">
                                            <h5>Email:</h5>
                                            <p>alinaqliyot@mail.ru</p>
                                        </div>
                                    </div>
                                    <div className="grid">
                                        <div className="icon">
                                            <i className="fi flaticon-phone-call"></i>
                                        </div>
                                        <div className="details">
                                            <h5>Телефон:</h5>
                                            <p>+992927050021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={logo} alt='' />
                                </div>
                                <p>ALI NAKLIYOT LOGISTIC LLC - Транспортно-экспедиторское обслуживание грузоперевозок всеми видами транспорта в странах СНГ и дальнего зарубежья</p>
                                <div className="social-icons">
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="#"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="#"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="#"><i className="ti-linkedin"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="#"><i className="ti-pinterest"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="#"><i className="ti-vimeo-alt"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-2 col-md-6 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Навигация</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/about">О нас</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Контакт</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service">Услуги</Link></li>
                                    <li>  <Link onClick={ClickHandler} to="/project">Наши преимущества</Link></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget link-widget service-link-widget">
                                <div className="widget-title">
                                    <h3>Все услуги</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 4).map((fservic, index) => (
                                        <li key={index}><Link onClick={ClickHandler} to={`/service-single/${fservic.slug}`}>{fservic.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {NewsletterShow && (
                            <div className="col col-lg-3 col-md-6 col-12">
                                <div className="widget newsletter-widget">
                                    <div className="widget-title">
                                        <h3>Новости объявления</h3>
                                    </div>
                                    <p>Узнайте последние новости и важные объявления нашей организации. Подпишитесь на этот раздел, чтобы быть в курсе новых событий, продуктов и услуг.</p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="input-1">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email Address *"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
                                        <div className="submit clearfix">
                                            <button type="submit">
                                                <i className="ti-email"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                        {InstagramShow &&
                            (
                                <div className="col col-lg-3 col-md-6 col-12">
                                    <div className="widget instagram">
                                        <div className="widget-title">
                                            <h3>Наша Галерея</h3>
                                        </div>
                                        <ul className="d-flex">
                                            <li><img src={Img1}
                                                alt="" /></li>
                                            <li><img src={Img2}
                                                alt="" /></li>
                                            <li><img src={Img3}
                                                alt="" /></li>
                                            <li><img src={Img4}
                                                alt="" /></li>
                                            <li><img src={Img5}
                                                alt="" /></li>
                                            <li><img src={Img6}
                                                alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                {FooterShape && (
                    <div>
                        <div className="vector-1"></div>
                        <div className="vector-2"></div>
                        <div className="vector-3"></div>
                        <div className="vector-4"></div>
                        <div className="vector-5"></div>
                        <div className="vector-6"></div>
                        <div className="vector-7"></div>
                        <div className="vector-8"></div>
                    </div>
                )}
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12  col-12">
                            <p className="copyright">Авторские права &copy;<span>2025</span>
                                <span className="copyright-icon">|</span> Все права защищены.
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-12  col-12">
                            {/* <p className="link"><Link onClick={ClickHandler} to="/blog">Term and Service</Link> <span>||</span> <Link onClick={ClickHandler} to="/blog">Privacy Policy</Link></p> */}
                        </div>
                    </div>
                </div>
            </div>

        </footer >
    )
}

export default Footer;









