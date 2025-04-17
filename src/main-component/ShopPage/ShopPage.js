import React, { Fragment, useState } from 'react';
import { connect } from "react-redux";
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import { addToCart } from "../../store/actions/action";
import ShopProduct from '../../components/ShopProduct';
import api from "../../api";
import SubscribeSectionS2 from '../../components/SubscribeSectionS2/SubscribeSectionS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logo-2.svg';



const ShopPage = ({ addToCart }) => {


    const productsArray = api();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    const totalProducts = productsArray.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    };
    const currentProducts = productsArray.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };


    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Shop'} pagesub={'Shop'} />
            <section className="wpo-shop-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ShopProduct
                                addToCartProduct={addToCartProduct}
                                products={currentProducts}
                            />
                            <div className="pagination-wrapper pagination-wrapper-center">
                                <ul className="pg-pagination">
                                    <li>
                                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} aria-label="Previous">
                                            <i className="ti-angle-left"></i>
                                        </button>
                                    </li>
                                    {[...Array(totalPages)].map((_, index) => (
                                        <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                                            <button onClick={() => handlePageChange(index + 1)}>
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}
                                    <li>
                                        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Next">
                                            <i className="ti-angle-right"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SubscribeSectionS2 />
            <Footer hclass={'wpo-site-footer-s3'} NewsletterShow={false} InstagramShow={true} FooterShape={false} />
            <Scrollbar />
        </Fragment>
    )
};

export default connect(null, { addToCart })(ShopPage);