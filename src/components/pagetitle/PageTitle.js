import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = (props) => {
    return (
        <div className="wpo-page-title">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            <ol>
                                <li><Link to="/home">Главная</Link></li>
                                <li>{props.pagesub}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vector-1"></div>
            <div className="vector-2"></div>
            <div className="vector-3"></div>
            <div className="vector-4"></div>
            <div className="vector-5"></div>
            <div className="vector-6"></div>
            <div className="vector-7"></div>
            <div className="vector-8"></div>
        </div>
    )
}

export default PageTitle;

