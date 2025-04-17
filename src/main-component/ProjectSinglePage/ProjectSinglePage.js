import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Projects from '../../api/projects';
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import SubscribeSectionS2 from '../../components/SubscribeSectionS2/SubscribeSectionS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logo.svg'
import VideoImg from '../../images/project-single/video.jpg'
import VideoModal from '../../components/ModalVideo/VideoModal';

import Gimg1 from '../../images/project-single/img-2.jpg'
import Gimg2 from '../../images/project-single/img-3.jpg'
import Gimg3 from '../../images/project-single/img-4.jpg'

const ProjectSinglePage = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { slug } = useParams()
    const ProjectDetails = Projects.find(item => item.slug === slug)

    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={ProjectDetails.title} pagesub={'Project'} />
            <div className="wpo-project-single-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-project-single-wrap">
                                <div className="wpo-project-single-item">
                                    <div className="wpo-project-single-main-img">
                                        <img src={ProjectDetails.pSimg} alt="" />
                                    </div>
                                    <div className="sortable-gallery">
                                        <div className="row portfolio-grids gallery-container clearfix">
                                            <div className="col-lg-4 col-sm-4 col-4">
                                                <div className="img-holder">
                                                    <div className="fancybox">
                                                        <div className='img img-responsive'>
                                                            <Zoom>
                                                                <img src={Gimg1 ? Gimg1 : ''} alt="products" />
                                                            </Zoom>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-4 col-4">
                                                <div className="img-holder">
                                                    <div className="fancybox">
                                                        <div className='img img-responsive'>
                                                            <Zoom>
                                                                <img src={Gimg2 ? Gimg2 : ''} alt="products" />
                                                            </Zoom>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-4 col-4">
                                                <div className="img-holder">
                                                    <div className="fancybox">
                                                        <div className='img img-responsive'>
                                                            <Zoom>
                                                                <img src={Gimg3 ? Gimg3 : ''} alt="products" />
                                                            </Zoom>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpo-project-single-title">
                                        <h3>{ProjectDetails.title}</h3>
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
                                <div className="wpo-project-single-item">
                                    <div className="wpo-project-single-title">
                                        <h3>How to solve critical issues?</h3>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <div className="project-video-wrap">
                                        <img src={VideoImg} alt="" />
                                        <VideoModal />
                                    </div>
                                </div>
                                <div className="wpo-project-single-item mb-0">
                                    <div className="wpo-project-single-title">
                                        <h3>Project summery:</h3>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="blog-sidebar">
                                <div className="widget project-info">
                                    <h3>Project Info:</h3>
                                    <ul>
                                        <li>Project<span>Air Frieght</span></li>
                                        <li>Clients<span>David Arham</span></li>
                                        <li>Duration<span>03 Months</span></li>
                                        <li>Budget<span>$800.58</span></li>
                                        <li>Location<span>Nastek, USA.</span></li>
                                    </ul>
                                </div>
                                <div className="wpo-contact-widget widget">
                                    <h2>Contact us today for your transport service.</h2>
                                    <div className="call">
                                        <span>CALL US:</span>
                                        <h5>+00 568 975 38</h5>
                                    </div>
                                    <Link onClick={ClickHandler} className="theme-btn" to="/contact">GET A QUOTE</Link>
                                </div>
                            </div>
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
export default ProjectSinglePage;



