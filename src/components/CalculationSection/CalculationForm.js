import React, { useState } from 'react';
import Icon  from '../../images/arrow.svg'

const CalculationForm = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        deliverCity: '',
        departureCity: '',
        freightType: '',
        incoterms: '',
        weight: '',
        express: '',
    });

    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = 'Full Name';
        if (!formData.email) {
            newErrors.email = 'Email Address';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.phone) newErrors.phone = 'Phone Number';
        if (!formData.deliverCity) newErrors.deliverCity = 'Deliver City';
        if (!formData.departureCity) newErrors.departureCity = 'Departure City';
        if (!formData.freightType) newErrors.freightType = 'Freight Type';
        if (!formData.incoterms) newErrors.incoterms = 'Required';
        if (!formData.weight) newErrors.weight = 'Incoterms';
        if (!formData.express) newErrors.express = 'Express';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form data:', formData);
            setSubmitStatus('success');
        } else {
            setSubmitStatus('error');
        }
    };
    const {SectionTitleShow = false} = props;

    return (
        <div className="wpo-contact-form-area">
            {SectionTitleShow && (
                    <div className="wpo-section-title">
                        <span>PRICE CALCULATION</span>
                        <h2>Easy to check your product transportation price.</h2>
                    </div>
            )}
            <form onSubmit={handleSubmit} className="contact-validation-active">
                <div className="personal-info">
                    <h5>PERSONAL INFO:</h5>
                    <div className="row">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Your Name*"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <div className="error">{errors.name}</div>}
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Your Email*"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <div className="error">{errors.phone}</div>}
                        </div>
                    </div>
                </div>
                <div className="shipt-info">
                    <h5>SHIPMENT INFO:</h5>
                    <div className="row">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <input
                                type="text"
                                className="form-control"
                                name="deliverCity"
                                placeholder="Deliver City"
                                value={formData.deliverCity}
                                onChange={handleChange}
                            />
                            {errors.deliverCity && (
                                <div className="error">{errors.deliverCity}</div>
                            )}
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <input
                                type="text"
                                className="form-control"
                                name="departureCity"
                                placeholder="Departure City"
                                value={formData.departureCity}
                                onChange={handleChange}
                            />
                            {errors.departureCity && (
                                <div className="error">{errors.departureCity}</div>
                            )}
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <select
                                name="freightType"
                                className="form-control"
                                value={formData.freightType}
                                onChange={handleChange}
                            >
                                <option disabled="disabled" value="">
                                    Freight Type
                                </option>
                                <option>Air Freight</option>
                                <option>Road Freight</option>
                                <option>Ocean Freight</option>
                                <option>Train Freight</option>
                            </select>
                            {errors.freightType && (
                                <div className="error">{errors.freightType}</div>
                            )}
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <select
                                name="incoterms"
                                className="form-control"
                                value={formData.incoterms}
                                onChange={handleChange}
                            >
                                <option disabled="disabled" value="">
                                    Incoterms
                                </option>
                                <option>EXW</option>
                                <option>FCA</option>
                                <option>CPT</option>
                                <option>CIP</option>
                                <option>DAP</option>
                                <option>DPU</option>
                                <option>DDP</option>
                            </select>
                            {errors.incoterms && (
                                <div className="error">{errors.incoterms}</div>
                            )}
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <input
                                type="text"
                                className="form-control"
                                name="weight"
                                placeholder="Weight"
                                value={formData.weight}
                                onChange={handleChange}
                            />
                            {errors.weight && <div className="error">{errors.weight}</div>}
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <select
                                name="express"
                                className="form-control"
                                value={formData.express}
                                onChange={handleChange}
                            >
                                <option disabled="disabled" value="">
                                    Express
                                </option>
                                <option>Express 1</option>
                                <option>Express 2</option>
                                <option>Express 3</option>
                            </select>
                            {errors.express && <div className="error">{errors.express}</div>}
                        </div>
                    </div>
                </div>
                <div className="submit-area">
                    <button type="submit" className="theme-btn">
                        GET A QUOTE <i>
                            <img src={Icon} alt="" />
                        </i>
                    </button>
                    <div id="c-loader">
                        <i className="ti-reload"></i>
                    </div>
                </div>
                <div className="clearfix error-handling-messages">
                    {submitStatus === 'success' && <div id="c-success">Thank you</div>}
                    {submitStatus === 'error' && (
                        <div id="c-error">
                            Error occurred while sending email. Please try again later.
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default CalculationForm;
