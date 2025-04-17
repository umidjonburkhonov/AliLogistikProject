import React from "react";
import { Link } from "react-router-dom";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const CtaSection = (props) => {
    return (
        <section className="wpo-cta-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="wpo-cta-text">
                            <span> ЗАКАЗ ЧЕРЕЗ СОЦСЕТИ</span>
                            <p>Мы идем в ногу со временем и предлагаем вам удобный способ заказать наши услуги через социальные сети.
                                Теперь вы можете легко и быстро оформить заказ на доставку, хранение или любую другую услугу, просто написав нам в мессенджерах популярных соцсетей. Наши менеджеры оперативно ответят на ваши запросы, помогут выбрать оптимальное решение и предоставят всю необходимую информацию. Благодаря этому вы можете решать все транспортные задачи, не выходя из дома или офиса. Подписывайтесь на наши страницы в соцсетях, чтобы быть в курсе всех новостей и акций! </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="wpo-cta-btn">
                            <Link onClick={ClickHandler} className="theme-btn-s2" to="/contact">ПРИСОЕДИНЯЙТЕСЬ К НАМ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CtaSection;


