import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogSingle from '../../components/BlogDetails/BlogSingle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import Navbar from '../../components/Navbar/Navbar';
import SubscribeSectionS2 from '../../components/SubscribeSectionS2/SubscribeSectionS2';
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo.svg'

const BlogDetailsLeftSiide = () => {

    const { slug } = useParams()
    const BlogDetails = blogs.find(item => item.slug === slug)
    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog Single'} />
            <BlogSingle blLeft={'order-lg-1'} blRight={'order-lg-2'} />
            <SubscribeSectionS2 />
            <Footer hclass={'wpo-site-footer-s3'} NewsletterShow={false} InstagramShow={true} FooterShape={false} />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetailsLeftSiide;


