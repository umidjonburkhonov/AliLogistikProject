import React from 'react';
import VideoModal from '../ModalVideo/VideoModal';
import Video2 from '../../images/v-shape.png'

const VideoSectionS2 = (props) => {
    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="wpo-video-item">
                    <div className="row">
                        <div className={`col-lg-12 col-md-12 col-12 ${props.Vbuttom}`}>
                            <div className="why-choose-wrap">
                                <div className="why-choose-left">
                                    <h2>Why choose Transfar services?</h2>
                                    <p>It was popularised with the release and sheets containing passages software.</p>
                                </div>
                                <div className="why-choose-right">
                                    <div className="wpo-choose-check-wrap">
                                        <div className="wpo-choose-check-item">
                                            <p>It was popularised with release sheet containing passages.</p>
                                        </div>
                                        <div className="wpo-choose-check-item">
                                            <p>It was popularised with release sheet containing passages.</p>
                                        </div>
                                        <div className="wpo-choose-check-item">
                                            <p>It was popularised with release sheet containing passages.</p>
                                        </div>
                                        <div className="wpo-choose-check-item">
                                            <p>It was popularised with release sheet containing passages.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="v-shape">
                                    <img src={Video2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={`col-lg-12 col-md-12 col-12 ${props.Vtop}`} >
                            <div className="wpo-video-icon ">
                                <VideoModal />
                            </div>
                            <div className="wpo-viedo-title">
                                <h2>Check our intro video and easy to get our services.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    );
};

export default VideoSectionS2;