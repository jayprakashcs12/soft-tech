import React, { useLayoutEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import TitlePage from '../common/TitlePage';
import ProImage from "../../img/pages/android.jpg";

const Android = () => {

    useLayoutEffect(() => {
        document.title = "Android Development | SoftTech";
    });

    return (

        <React.Fragment>
            <TitlePage title="Android Development" />
            <Container>
                <Row>
                    <Col lg={6} className='pro-page text-page'>
                        <h2 className="about-head feature-head">Android Development</h2>
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
                    <Col lg={6} className='pro-page image-page'>
                        <Image src={ProImage} className='feature-img' />
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

export default Android;