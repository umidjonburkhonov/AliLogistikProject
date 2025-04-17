import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import blogs from '../../api/blogs'

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showError, setShowError] = useState(false);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        if (showError) {
            setShowError(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim() === '') {
            setShowError(true);
        } else {
            setShowError(false);
            console.log('Searching for:', searchTerm);
        }
    };



    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form
                        onSubmit={handleSubmit}>
                        <div>
                            <input
                                className="form-control"
                                type="text"
                                name="search"
                                value={searchTerm}
                                onChange={handleInputChange}
                                placeholder="Search..."
                            />
                            <button type="submit">
                                <i className="ti-search"></i>
                            </button>
                        </div>
                    </form>
                    {showError && <p style={{ color: 'red' }}>Please enter a search term.</p>}
                </div>
                <div className="widget category-widget">
                    <h3>All Services</h3>
                    <ul>
                        {blogs.slice(0, 4).map((blogItem, index) => (
                            <li key={index}><Link onClick={ClickHandler} to={`/blog-single/${blogItem.slug}`}>{blogItem.title}</Link></li>
                        ))}
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
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link to="#">Air Freight</Link></li>
                        <li><Link to="#">Road Transport</Link></li>
                        <li><Link to="#">Air Transport</Link></li>
                        <li><Link to="#">Train Transport</Link></li>
                        <li><Link to="#">Ocean Transport</Link></li>
                        <li><Link to="#">Logistics</Link></li>
                        <li><Link to="#">Packeging</Link></li>
                        <li><Link to="#">Land</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
