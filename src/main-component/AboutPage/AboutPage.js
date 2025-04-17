import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import VideoSection from '../../components/VideoSection/VideoSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import CtaSection from '../../components/CtaSection/CtaSection';
// import CalculationSection from '../../components/CalculationSection/CalculationSection';
// import PartnersSection from '../../components/PartnersSection/PartnersSection';
// import TeamSection from '../../components/TeamSection/TeamSection';
// import SubscribeSectionS2 from '../../components/SubscribeSectionS2/SubscribeSectionS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo6.png'
// import Shape from '../../images/d-boy.png'

const AboutPage = () => {
    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'О нас'} pagesub={'О нас'} />
            <About hclass={'wpo-about-section section-padding'} />
            <ServiceSection hclass={"wpo-service-area section-padding"} ServiceBtn={true} />
            <VideoSection />
            <ProjectSection hclass={'wpo-project-section section-padding'} SectionTitleShow={true} projectBtn={true} />
            <CtaSection />
            {/* <CalculationSection hclass={'wpo-calculation-section'} Boy={Shape} /> */}
            {/* <PartnersSection CollClass={'col col-xs-12'} /> */}
            {/* <TeamSection /> */}
            {/* <SubscribeSectionS2 /> */}
            <Footer hclass={'wpo-site-footer-s3'} NewsletterShow={false} InstagramShow={true} FooterShape={false} />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
