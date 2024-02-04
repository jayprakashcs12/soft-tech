import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <React.Fragment>
            <div className='main-footer'>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <h2 className="foot-text">About Us</h2>
                            <p className='footer-para'>
                                At Software, we understand the value of your current application investments. 
                                That's why we provide tailored solutions to ensure a smooth transition, allowing you to leverage and enhance your existing applications within more modern, sophisticated systems. 
                                Our commitment is to empower your business with the latest technologies, optimizing efficiency and driving innovation.
                            </p>
                        </Col>
                        <Col lg={3}>
                            <h2 className="foot-text">Quick Links</h2>
                            <ul className='footer-unorder'>
                                <li className='footer-order'>
                                    <Link className='footer-link' to="/android-development">Android Development</Link>
                                </li>
                                <li className='footer-order'>
                                    <Link className='footer-link' to="/mern-development">MERN Development</Link>
                                </li>
                                <li className='footer-order'>
                                    <Link className='footer-link' to="/sql-development">SQL Development</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={3}>
                            <h2 className="foot-text">Quick Links</h2>
                            <ul className='footer-unorder'>
                                <li className='footer-order'>
                                    <Link className='footer-link' to="/about-us">About Us</Link>
                                </li>
                                <li className='footer-order'>
                                    <Link className='footer-link' to="/contact-us">Contact Us</Link>
                                </li>
                                <li className='footer-order'>
                                    <Link className='footer-link' to="/career">Career</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={3}>
                            <h2 className="foot-text">How To Reach</h2>
                            <ul className='footer-unorder'>
                                <li className='footer-order'>
                                    <i className="bi bi-building-fill footer-icon"></i> 2<sup>nd</sup> Floor, Jagai Purwa, Dak Bangla, J K Puri, Kanpur, Uttar Pradesh - 208007
                                </li>
                                <li className="footer-order">
                                    <i className="bi bi-telephone footer-icon"></i><a className='foot-anchor' href="tel:+91 45 8213 6709">&nbsp; +91 45 8213 6709</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className='second-footer'>
                        <Col lg={6}>
                            <p className="copyright text-left">
                                Software Pvt Ltd © 2024. &nbsp; | &nbsp; All Rights Reserved.
                            </p>
                        </Col>
                        <Col lg={6}>
                            <p className="copyright-hyperlink-div">
                                <Link className="copyright-link" to="/privacy-policy"> Privacy Policy </Link> &nbsp; | &nbsp; <Link className="copyright-link" to="/terms-consitions"> Terms &amp; Conditions </Link>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Footer;
