import React, { useState } from 'react';
import Shape from '../../images/s-shape.png'
import SectionTitle from '../SectionTitle/SectionTitle';

const SubscribeSectionS2 = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setError('');
            setSubmitted(true);
        } else {
            setError('Please enter a valid email address.');
            setSubmitted(false);
        }
    };
    return (
        <section className="wpo-subscribe-section-s2 section-padding">
            <div className="container">
                <div className="wpo-subscribe-main">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <SectionTitle subtitle={'ПОДПИШИТЕСЬ СЕЙЧАС'} title={'Подпишитесь на нашу рассылку, чтобы получать последние обновления и новости'} />
                        </div>
                        <div className="col-lg-8">
                            <div className="wpo-subscribe-wrap">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-field">
                                        <input
                                            className="form-control"
                                            type="email"
                                            placeholder="Enter email address:"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {error && <p>{error}</p>}
                                    </div>
                                    <div className="form-field s-btn">
                                        <button className="theme-btn" type="submit">
                                            ПОДПИШИТЕСЬ СЕЙЧАС
                                        </button>
                                    </div>
                                    {submitted}
                                </form>
                                <div className="s-shape">
                                    <img src={Shape} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="s-shape">
                <img src={Shape} alt="" />
            </div>
        </section>
    );
};

export default SubscribeSectionS2;