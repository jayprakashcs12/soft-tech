import React, { useLayoutEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import TitlePage from "../common/TitlePage";
import FormPage from "../common/FormPage";

const Contact = () => {

    useLayoutEffect(() => {
        document.title = "Contact Us | SoftTech";
    });

    const contactPages = [
        {
            location: 'LakeView Apartments',
            city: 'Bangalore',
            state: 'Karnataka',
            zip: '560025',
            className: 'location-card'
        },
        {
            location: 'OceanView Heights',
            city: 'Mumbai',
            state: 'Maharashtra',
            zip: '400001',
            className: 'time-card'
        },
        {
            location: 'MarinaView Vista',
            city: 'Chennai',
            state: 'Tamil Nadu',
            zip: '600001',
            className: 'contact-card'
        }
    ];

    const ContactPage = ({ location, city, state, zip, className }) => (
        <Col lg={4} className={`contact-page-card ${className}`}>
            <div className="contact_module_head">
                <h4 className="contact-heading"> Branch </h4>
            </div>
            <div className="contact_module_body">
                <p className="contact-body">
                    {location}, <br /> {city}, {state} - {zip}
                </p>
            </div>
        </Col>
    );

    return (
        
        <React.Fragment>
            <TitlePage title="Contact Us" />
            <Container className='web-container'>
                <h2 className="pro-head"> Other Office Location </h2>
                <Row className="contact-location-row pro-container-div">
                    {contactPages.map((contactPage, index) => (
                        <ContactPage key={index} {...contactPage} />
                    ))}
                </Row>
                <Row className='contact-form-row '>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <div className="get-details-div contact-pro-label">
                            <h2 className="get-head">
                                Get in Touch
                            </h2>
                            <p className="get-text">
                                Have questions, need assistance, or just want to connect? We're here to help! Fill out the form
                                below or reach out to us directly. Let's start your journey together!
                            </p>
                        </div>
                        <div className="contact-form-div" style={{color:"#fff"}}>
                            <FormPage />
                        </div>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </Container>
            <div className="mapouter1" style={{padding:"25px 0 0 0"}}>
                <iframe title="Google Map" id="gmap_canvas1" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.8813903704936!2d80.38057177595947!3d26.427303930781356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c40df301ea069%3A0xbef21045e48bad5f!2sJagai%20Purwa%2C%20J%20K%20Puri%2C%20Kanpur%2C%20Uttar%20Pradesh%20208007!5e0!3m2!1sen!2sin!4v1706183334195!5m2!1sen!2sin"
                ></iframe>
            </div>
        </React.Fragment>
    )
}

export default Contact