import React from 'react';
import CountUp from 'react-countup';
import Shape from '../../images/funfact.png'

const FunFact = (props) => {

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            <div className="grid">
                                <div className="info">
                                    <h3><CountUp end={6823} enableScrollSpy /></h3>
                                    <p>довольный клиент</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><CountUp end={3670} enableScrollSpy /></h3>
                                    <p>Активные проекты</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><CountUp end={690} enableScrollSpy /></h3>
                                    <p>эксперты-члены</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><CountUp end={200} enableScrollSpy /></h3>
                                    <p>выигрывать награды</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <img src={Shape} alt="" />
            </div>
        </section>
    )

}

export default FunFact;




