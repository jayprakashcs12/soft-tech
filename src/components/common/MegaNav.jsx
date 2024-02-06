import React, { useState } from "react";
import { Col, Container, Image, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MegaNav = (props) => {

    let logoImg = props.logoImg;

    const [dropShow, setDropShow] = useState(false);

    return (
        
        <>
            <div className="title-bar-div">
                <Container>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={8}>
                            <ul className="contact-details">
                                <li>
                                    <i className="bi bi-telephone pro-icon"></i> <a className="title-list" href="tel:+91 45 8213 6709">&nbsp; +91 45 8213 6709</a>
                                </li>
                                <li>
                                    <i className="bi bi-geo-alt pro-icon"></i> <span className="title-list"> 2<sup>nd</sup> Floor, Sabiya Complex, Dubagga, Lucknow, Uttar Pradesh - 226003 </span>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary pro-navbar" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <Image src={logoImg} className="logo-img" alt="software-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "#4E81D5" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="links nav-links">Home</NavLink>
                            <NavLink to="/about-us" style={({ isActive }) => ({ color: isActive ? "#4E81D5" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="links nav-links">About Us</NavLink>
                            <NavDropdown title="Our Services" id="basic-nav-dropdown" show={dropShow} onMouseEnter={() => setDropShow(true)} onMouseLeave={() => setDropShow(false)}>
                                <NavDropdown.Item>
                                    <NavLink to="/android-development" style={({ isActive }) => ({ color: isActive ? "#4E81D5" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="links nav-links">Android Development</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink to="/mern-development" style={({ isActive }) => ({ color: isActive ? "#4E81D5" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="links nav-links">MERN Development</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink to="/sql-development" style={({ isActive }) => ({ color: isActive ? "#4E81D5" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="links nav-links">SQL Development</NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavLink to="/career" style={({ isActive }) => ({ color: isActive ? "#4E81D5" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="links nav-links">Career</NavLink>
                            <NavLink to="/contact-us" style={({ isActive }) => ({ color: isActive ? "#4E81D5" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="links nav-links">Contact Us</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default MegaNav;