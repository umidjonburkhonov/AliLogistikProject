import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import SubscribeSection from '../../components/SubscribeSection/SubscribeSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'


const ServicePage = () => {
    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Services'} pagesub={'Service'} />
            <ServiceSectionS2 hclass={"wpo-service-area-s2 section-padding pb-120"} ServiceBtn={true} />
            <SubscribeSection />
            <Footer hclass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;
