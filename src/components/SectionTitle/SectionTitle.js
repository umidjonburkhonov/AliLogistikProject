import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="wpo-section-title">
            <span>{subtitle}</span>
            <h2>{title}</h2>
        </div>
    );
};

export default SectionTitle;