import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'
import ContactMap from './ContactMap';


const Contactpage = () => {

    return (
        <div>
            <ContactMap />
            <section className="wpo-contact-pg-section section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="wpo-contact-form-area">
                                <div className="wpo-contact-title">
                                    <h2>Есть вопросы?</h2>
                                    <p>Давно известно, что при просмотре страницы внимание читателя будет отвлекаться на ее содержание.</p>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col col-lg-4">
                            <div className="office-info">
                                <div className="office-info-item">
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className="fi flaticon-phone-call"></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>Телефон:</h2>
                                        <p>+992927050021</p>
                                    </div>
                                </div>
                                <div className="office-info-item">
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className="fi flaticon-email-3"></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>E-mail:</h2>
                                        <p>alinaqliyot@mail.ru</p>
                                    </div>
                                </div>

                                <div className="office-info-item">
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className="fi flaticon-location-1"></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>Локация:</h2>
                                        <p>А.Нозиров 1, 735690 Б.Гафуров</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )


}

export default Contactpage;
