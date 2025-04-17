import React, { Fragment } from 'react';
import HeaderTopS2 from '../../components/HeaderTopS2/HeaderTopS2';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import Hero2 from '../../components/hero2/Hero2';
import AboutS2 from '../../components/aboutS2/aboutS2';
import FunFact from '../../components/FunFact/FunFact';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import VideoSectionS2 from '../../components/VideoSectionS2/VideoSectionS2';
import TeamSection from '../../components/TeamSection/TeamSection';
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import CtaSection from '../../components/CtaSection/CtaSection';
import TestimonialS2 from '../../components/TestimonialS2/TestimonialS2';
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import CalculationSection from '../../components/CalculationSection/CalculationSection';
import BlogSectionS2 from '../../components/BlogSectionS2/BlogSectionS2';
import SubscribeSection from '../../components/SubscribeSection/SubscribeSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'
import Shape from '../../images/d-boy.png'

const HomePage2 = () => {
    return (
        <Fragment>
            <HeaderTopS2 />
            <NavbarS2 hclass={'wpo-header-style-2'} Logo={Logo} />
            <Hero2 />
            <AboutS2  />
            <FunFact hclass={'wpo-fun-fact-section-s2'} />
            <ServiceSectionS2 hclass={"wpo-service-area-s2 section-padding"} ServiceBtn={true} />
            <VideoSectionS2 hclass={'wpo-video-section-s2'}/>
            <TeamSection />
            <ProjectSectionS2 />
            <CtaSection />
            <TestimonialS2 />
            <PartnersSection  CollClass={'col col-xs-12'} />
            <CalculationSection hclass={'wpo-calculation-section'} Boy={Shape}/>
            <BlogSectionS2 />
            <SubscribeSection />
            <Footer hclass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;