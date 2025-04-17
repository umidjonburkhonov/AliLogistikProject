import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import CalculationForm from './CalculationForm';


const CalculationSection = (props) => {

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="wpo-calculation-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <SectionTitle subtitle={'PRICE CALCULATION'} title={'Easy to check your product transportation price.'} />
                        </div>
                        <div className="col-lg-8 col-md-12 col-12">
                            <CalculationForm />
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-boy">
                <img src={props.Boy} alt="" />
            </div>
        </section>
    );
};

export default CalculationSection;