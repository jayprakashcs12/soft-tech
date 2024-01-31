import React, { useLayoutEffect } from 'react'
import TitlePage from '../common/TitlePage';
import { Col, Container, Image, Row } from 'react-bootstrap';
import AboutImg1 from "../../img/about/about-us-001.jpg";
import AboutImg2 from "../../img/about/about-us-002.jpg";

const About = () => {

    useLayoutEffect(() => {
        document.title = "About Us | Software";
    })

    return (
        <React.Fragment>
            <TitlePage title="About Us" />
            <Container>
                <Row className='pro-page'>
                    <Col lg={6} className='about-div'>
                        <div className="image-div">
                            <Image src={AboutImg1} className='about-img about-img1' />
                        </div>
                    </Col>
                    <Col lg={6} className='about-div'>
                        <h2 className="about-head"> Who are We ? </h2>
                        <p className="about-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dignissimos vitae ex ipsa ratione
                            tempora voluptatem sit perspiciatis reprehenderit? Officia, excepturi vel accusamus ipsa
                            necessitatibus dolore quae reiciendis minima aspernatur.
                        </p>
                        <p className="about-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dignissimos vitae ex ipsa ratione
                            tempora voluptatem sit perspiciatis reprehenderit? Officia, excepturi vel accusamus ipsa
                            necessitatibus dolore quae reiciendis minima aspernatur.
                        </p>
                        <p className="about-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dignissimos vitae ex ipsa ratione
                            tempora voluptatem sit perspiciatis reprehenderit? Officia, excepturi vel accusamus ipsa
                            necessitatibus dolore quae reiciendis minima aspernatur.
                        </p>
                    </Col>

                    <p className="about-text text-div">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dignissimos vitae ex ipsa ratione
                        tempora voluptatem sit perspiciatis reprehenderit? Officia, excepturi vel accusamus ipsa
                        necessitatibus dolore quae reiciendis minima aspernatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.  
                    </p>

                    <p className="about-text text-div">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dignissimos vitae ex ipsa ratione
                        tempora voluptatem sit perspiciatis reprehenderit? Officia, excepturi vel accusamus ipsa
                        necessitatibus dolore quae reiciendis minima aspernatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.  
                    </p>

                </Row>

                <Row className='pro-page1'>
                    <Col lg={6} className='why-div'>
                        <h2 className="why-head"> Why Select Us ? </h2>
                        <p className="why-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dignissimos vitae ex ipsa ratione
                            tempora voluptatem sit perspiciatis reprehenderit? Officia, excepturi vel accusamus ipsa
                            necessitatibus dolore quae reiciendis minima aspernatur.
                        </p>
                        <p className="why-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dignissimos vitae ex ipsa ratione
                            tempora voluptatem sit perspiciatis reprehenderit? Officia, excepturi vel accusamus ipsa
                            necessitatibus dolore quae reiciendis minima aspernatur.
                        </p>
                        <p className="why-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dignissimos vitae ex ipsa ratione
                            tempora voluptatem sit perspiciatis reprehenderit? Officia, excepturi vel accusamus ipsa
                            necessitatibus dolore quae reiciendis minima aspernatur.
                        </p>
                    </Col>
                    <Col lg={6} className='why-div'>
                        <div className="image-div">
                            <Image src={AboutImg2} className='why-img why-img1' />
                        </div>
                    </Col>

                    <p className="about-text text-div">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dignissimos vitae ex ipsa ratione
                        tempora voluptatem sit perspiciatis reprehenderit? Officia, excepturi vel accusamus ipsa
                        necessitatibus dolore quae reiciendis minima aspernatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.  
                    </p>

                    <p className="about-text text-div">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dignissimos vitae ex ipsa ratione
                        tempora voluptatem sit perspiciatis reprehenderit? Officia, excepturi vel accusamus ipsa
                        necessitatibus dolore quae reiciendis minima aspernatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.  
                    </p>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default About;