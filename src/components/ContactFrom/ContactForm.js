import React, { useState, useEffect } from 'react';


const ContactForm = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        note: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = 'Name is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!values.phone) {
            errors.phone = 'Phone is required';
        }
        if (!values.subject) {
            errors.subject = 'Subject is required';
        }
        if (!values.note) {
            errors.note = 'Message is required';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };

    const handleFormSubmission = async () => {
        setIsLoading(true);
        setIsError(false);
        setIsSuccess(false);

        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
            setFormValues({
                name: '',
                email: '',
                phone: '',
                subject: '',
                note: ''
            });
        }, 2000);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            handleFormSubmission().catch(() => setIsError(true));
            setIsSubmitting(false);
        }
    }, [formErrors, isSubmitting]);

    return (
        <form method="post" className="contact-validation-active" onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                    name="name"
                    id="name"
                    placeholder="Ваше имя*"
                    value={formValues.name}
                    onChange={handleChange}
                />
                {formErrors.name && <span className="invalid-feedback">{formErrors.name}</span>}
            </div>
            <div>
                <input
                    type="email"
                    className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                    name="email"
                    id="email"
                    placeholder="Ваш адрес электронной почты*"
                    value={formValues.email}
                    onChange={handleChange}
                />
                {formErrors.email && <span className="invalid-feedback">{formErrors.email}</span>}
            </div>
            <div>
                <input
                    type="text"
                    className={`form-control ${formErrors.phone ? 'is-invalid' : ''}`}
                    name="phone"
                    id="phone"
                    placeholder="Ваш телефон*"
                    value={formValues.phone}
                    onChange={handleChange}
                />
                {formErrors.phone && <span className="invalid-feedback">{formErrors.phone}</span>}
            </div>
            {/* <div>
                <select
                    name="subject"
                    className={`form-control ${formErrors.subject ? 'is-invalid' : ''}`}
                    value={formValues.subject}
                    onChange={handleChange}
                >
                    <option disabled="disabled" value="">Subject</option>
                    <option>Road Freight</option>
                    <option>Ocean Freight</option>
                    <option>Air Freight</option>
                    <option>Train Freight</option>
                </select>
                {formErrors.subject && <span className="invalid-feedback">{formErrors.subject}</span>}
            </div> */}
            <div className="fullwidth">
                <textarea
                    className={`form-control ${formErrors.note ? 'is-invalid' : ''}`}
                    name="note"
                    id="note"
                    placeholder="Сообщение..."
                    value={formValues.note}
                    onChange={handleChange}
                ></textarea>
                {formErrors.note && <span className="invalid-feedback">{formErrors.note}</span>}
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn" disabled={isLoading}>
                    {isLoading ? 'Отправка...' : 'Свяжитесь с нами'}
                </button>
            </div>
            <div className="clearfix error-handling-messages">
                {isSuccess && <div id="success">Thank you</div>}
                {isError && <div id="error">Error occurred while sending email. Please try again later.</div>}
            </div>
        </form>
    );
}

export default ContactForm;
