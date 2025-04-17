import React, { useState } from 'react';

const countries = [
    'United Arab Emirates',
    'United Kingdom (UK)',
    'Ukraine',
    'United States (US)',
    'Uzbekistan',
    'Virgin Islands (British)',
    'United Arab Emirates',
    'United Kingdom (UK)',
    'Ukraine',
    'United States (US)',
    'Bangladesh',
    'Uzbekistan',
    'Virgin Islands (British)',
];

const CalculateShipping = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [countryListVisible, setCountryListVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('United Kingdom (UK)');

    const toggleFormVisibility = () => {
        setFormVisible(!formVisible);
    };

    const toggleCountryListVisibility = () => {
        setCountryListVisible(!countryListVisible);
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setCountryListVisible(false);
    };

    const filteredCountries = countries.filter(country =>
        country.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="calculate-shipping">
            <h4 className="calculate-shipping-label" onClick={toggleFormVisibility}>
                Calculate Shipping
                <i className="flaticon-next fi"></i>
            </h4>
            {formVisible && (
                <form action="#" className="calculate-shipping-form">
                    <div className="country-list">
                        <p className="country-list-label" onClick={toggleCountryListVisibility}>
                            {selectedCountry}
                            <i className="flaticon-next fi"></i>
                        </p>
                        {countryListVisible && (
                            <div className="countries-wrapper">
                                <div className="country-search">
                                    <input
                                        type="search"
                                        className="form-control"
                                        placeholder="Search.."
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                    />
                                    <button type="button">
                                        <i className="fi flaticon-search"></i>
                                    </button>
                                </div>
                                <ul>
                                    {filteredCountries.map((country, index) => (
                                        <li key={index} onClick={() => handleCountrySelect(country)}>
                                            {country}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="State / County" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Town / City" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Postcode / ZIP" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn theme-btn-s2">Update</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default CalculateShipping;

