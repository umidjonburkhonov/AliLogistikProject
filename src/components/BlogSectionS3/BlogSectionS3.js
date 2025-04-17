import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';
import blogs from '../../api/blogs'
const BlogSectionS3 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="wpo-blog-section-s3 section-padding">
            <div className="container">
                <SectionTitle subtitle={'Latest News'} title={'Latest News & Article'} />
                <div className="wpo-blog-items">
                    <div className="row align-items-center">
                        {blogs.slice(7, 11).map((bloge, bkye) => (
                            <div className="col col-lg-6 col-md-12 col-12" key={bkye}>
                                <div className="wpo-blog-item" >
                                    <div className="wpo-blog-img">
                                        <img src={bloge.screens} alt="" />
                                            <span>Transport</span>
                                    </div>
                                    <div className="wpo-blog-content">
                                        <div className="wpo-blog-content-top">
                                            <h2><Link onClick={ClickHandler} to={`/blog-single/${bloge.slug}`}>{bloge.title}</Link>
                                            </h2>
                                            <ul>
                                                <li>02 Oct 2024</li>
                                                <li>By {bloge.author}</li>
                                            </ul>
                                            <Link className="b-btn" onClick={ClickHandler} to={`/blog-single/${bloge.slug}`}>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSectionS3;

