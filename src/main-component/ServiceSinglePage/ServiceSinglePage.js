import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import Services from '../../api/Services';
import ServiceSidebar from './sidebar'
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import SubscribeSectionS2 from '../../components/SubscribeSectionS2/SubscribeSectionS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logo.svg'
import VideoImg from '../../images/service-single/Videoimg.jpg'
import VideoModal from '../../components/ModalVideo/VideoModal';

const ServiceSinglePage = (props) => {
  

    const { slug } = useParams()
    const serviceDetails = Services.find(item => item.slug === slug)

    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={serviceDetails.title} pagesub={'Service Single'} />
            <div className="wpo-service-single-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-main-img">
                                        <img src={serviceDetails.simag} alt="" />
                                    </div>
                                    <div className="wpo-service-single-title">
                                        <h3>{serviceDetails.title}</h3>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                        the release of Letraset sheets containing Lorem Ipsum passages.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="why-choose-wrap">
                                        <div className="why-choose-left">
                                            <h2>How to get easy our road transportation service?</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since specimen book.</p>
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
                                            <img src="assets/images/v-shape.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Why choose this service?</h3>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <div className="service-video-wrap">
                                        <img src={VideoImg} alt="" />
                                        <VideoModal />
                                    </div>
                                </div>
                                <div className="wpo-service-single-item mb-0">
                                    <div className="wpo-service-single-title">
                                        <h3>Save your time and money.</h3>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <ServiceSidebar />
                        </div>
                    </div>
                </div>
            </div>
            <SubscribeSectionS2 />
            <Footer hclass={'wpo-site-footer-s3'} NewsletterShow={false} InstagramShow={true} FooterShape={false} />
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;



