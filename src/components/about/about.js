import React from 'react';
import { Link } from 'react-router-dom';



// image
import Ab from '../../images/about/img-1.jpg'
import Abd1 from '../../images/about/img-2.jpg'
import Abd2 from "../../images/about/img-7.jpg"

const about = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <div className="wpo-about-img-left">
                                    <img src={Ab} alt="" />
                                </div>
                                <div className="about-img-inner">
                                    {/* <div className="about-img-inner-text">
                                        <h2>38 <span>Years of <br /> experiecne.</span></h2>
                                        <p>It was popularised with the release sheets and more recently.</p>
                                    </div> */}
                                    <img src={Abd2} className='mb-3 about-7' alt="" />
                                    <img src={Abd1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                            <div className="wpo-about-content ">
                                <div className="wpo-about-content-top">
                                    <h2>О нас</h2>
                                    <p>ALI NAKLIYOT LOGISTIC LLC -это транспортная компания, которая  оказывает качественные   услуги  перевозок уже более 5 лет. Мы предлагаем качественную доставку грузов по оптимальным ценам по странам СНГ   и Прибалтики. </p>
                                </div>
                                <div className="wpo-about-content-progress">
                                    <div className="progress-inner">
                                        <div className="progress yellow">
                                            <span className="progress-left">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="progress-right">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <div className="progress-value">98%</div>
                                            <div className="progress-name"><span>Success</span></div>
                                        </div>
                                    </div>
                                    <p>При этом география нашей работы стабильно расширяется и мы рады работать для  вас.</p>
                                </div>
                                <div className="wpo-about-check-wrap">
                                    <div className="wpo-about-check-item">
                                        <p>К каждому клиенту компании,предусмотрен индивидуальный подход с учетом оптимизации расходов и предложением лучшего способа доставки грузов. Услуга компании «от двери до двери» говорит сама за себя включая полный спектр услуг предоставляемых с нашей стороны. </p>
                                    </div>
                                    <div className="wpo-about-check-item">
                                        <p>Развитие организации происходит за счет прибыли, без банковских ипотек и займов. Мы выполняем свои обязательства добросовестно перед клиентами а также перед своими подрядчиками, благодаря которым налажено доверительное сотрудничество длинною не в один год.</p>
                                    </div>
                                </div>
                                <Link onClick={ClickHandler} to="/service" className="theme-btn-s2">Все услуги</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default about;

