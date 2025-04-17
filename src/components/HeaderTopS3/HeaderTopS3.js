import React from 'react';

import Ster from '../../images/star.png'

const HeaderTopS3 = () => {
    return (
        <div className="topbar s3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-12">
                        <div className="topbar-welcome">
                            <p><i><img src={Ster} alt="" /></i> Welcome to transportation solutions
                                comapny <i><img src={Ster} alt="" /></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopS3;