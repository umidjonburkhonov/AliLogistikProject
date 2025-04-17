import React, { Fragment } from 'react';
import HeaderTopS3 from '../../components/HeaderTopS3/HeaderTopS3';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import Hero3 from '../../components/hero3/Hero3';
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import AboutS3 from '../../components/aboutS3/aboutS3';
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';
import FunFact from '../../components/FunFact/FunFact';
import TeamSectionS2 from '../../components/TeamSectionS2/TeamSectionS2';
import VideoSectionS2 from '../../components/VideoSectionS2/VideoSectionS2';
import ProjectSectionS3 from '../../components/ProjectSectionS3/ProjectSectionS3';
import CtaSection from '../../components/CtaSection/CtaSection';
import TestimonialS3 from '../../components/TestimonialS3/TestimonialS3.js';
import CalculationSection from '../../components/CalculationSection/CalculationSection';
import BlogSectionS3 from '../../components/BlogSectionS3/BlogSectionS3';
import SubscribeSectionS2 from '../../components/SubscribeSectionS2/SubscribeSectionS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'
import Shape from '../../images/d-boy2.png'
const HomePage = () => {
    return (
        <Fragment>
            <HeaderTopS3 />
            <NavbarS3 hclass={'wpo-site-header wpo-header-style-3'} Logo={Logo} />
            <Hero3 />
            <PartnersSection CollClass={'col col-lg-10 col-xs-12'} PatnarTitleShow={true} />
            <AboutS3 />
            <ServiceSectionS3 hclass={"wpo-service-area-s2 section-padding"} ServiceBtn={true} />
            <FunFact hclass={'wpo-fun-fact-section'} />
            <TeamSectionS2 />
            <VideoSectionS2 hclass={'wpo-video-section-s3'} Vbuttom={'order-2'} Vtop={'order-1'} />
            <ProjectSectionS3 />
            <CtaSection />
            <TestimonialS3 />
            <CalculationSection hclass={'wpo-calculation-section-s2'} Boy={Shape} />
            <BlogSectionS3 />
            <SubscribeSectionS2 />
            <Footer hclass={'wpo-site-footer-s3'} NewsletterShow={false} InstagramShow={true} FooterShape={false} />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;