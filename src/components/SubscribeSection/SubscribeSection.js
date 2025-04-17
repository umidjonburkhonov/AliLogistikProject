import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

import Shape from '../../images/s-shape.png';
import Shape1 from '../../images/arrow.svg';

const SubscribeSection = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!fullName) newErrors.fullName = 'Full Name is required';
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }
        return newErrors

    };

    const handelSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Form submitted successfully', { fullName, email });
            setFullName('');
            setEmail('');
            setErrors({});
        }
    };

    return (
        <section className="wpo-subscribe-section section-padding">
            <div className="s-shape">
                <img src={Shape} alt="" />
            </div>
            <div className="container">
                <SectionTitle subtitle={'ПОДПИШИТЕСЬ СЕЙЧАС'} title={'Подпишитесь на нашу рассылку, чтобы получать последние обновления и новости'} />

                <div className="wpo-subscribe-wrap">
                    <form onSubmit={handelSubmit}>
                        <div className="form-field">
                            <input className="form-control"
                                type="text"
                                placeholder="Your Full Name:"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)} />
                            {errors.fullName && <p className="error">{errors.fullName}</p>}
                        </div>
                        <div className="form-field">
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Enter email address:"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className="form-field s-btn">
                            <button className="theme-btn-s2" type="submit">ПОДПИШИТЕСЬ СЕЙЧАС <i><img
                                src={Shape1} alt="" /></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SubscribeSection;