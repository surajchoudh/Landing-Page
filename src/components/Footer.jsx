import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Contact Us</h4>
                        <p>Address: U block Street No-50/16, Gurgaon, India</p>
                        <p>Email: surajchoudhary604@gmail.com</p>
                        <p>Phone: +6395170331</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            {/* Add more links as needed */}
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Newsletter</h4>
                        <p>Subscribe to our newsletter for updates.</p>
                        <form>
                            <input type="email" placeholder="Your Email" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="row social-icons">
                    <div className="col-md-12">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>

                    </div>
                </div>
            </div>
            <div className="bottom-bar">
                <p>&copy; 2023 Your Website. All Rights Reserved.</p>
            </div>
        </footer>
    );
};


export default Footer;
