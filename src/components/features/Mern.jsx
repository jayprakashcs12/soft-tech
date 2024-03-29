import React, { useLayoutEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import TitlePage from '../common/TitlePage';
import ProImage from "../../img/pages/mern.jpg";

const Mern = () => {

    useLayoutEffect(() => {
        document.title = "MERN Development | SoftTech";
    });

    return (

        <React.Fragment>
            <TitlePage title="MERN Development" />
            <Container>
                <Row>
                    <Col lg={6} className='pro-page image-page'>
                        <Image src={ProImage} className='feature-img' />
                    </Col>
                    <Col lg={6} className='pro-page text-page1'>
                        <h2 className="about-head feature-head1">MERN Development</h2>
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
                        <p className="about-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dignissimos vitae ex ipsa ratione
                            tempora voluptatem sit perspiciatis reprehenderit? 
                        </p>
                    </Col>

                    <p className="about-text text-div1">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dignissimos vitae ex ipsa ratione
                        tempora voluptatem sit perspiciatis reprehenderit? Officia, excepturi vel accusamus ipsa
                        necessitatibus dolore quae reiciendis minima aspernatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.  
                    </p>

                    <p className="about-text text-div2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dignissimos vitae ex ipsa ratione
                        tempora voluptatem sit perspiciatis reprehenderit? Officia, excepturi vel accusamus ipsa
                        necessitatibus dolore quae reiciendis minima aspernatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.  
                    </p>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Mern;