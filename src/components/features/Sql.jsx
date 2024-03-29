import React, { useLayoutEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import ProImage from "../../img/pages/sql.jpg";
import TitlePage from '../common/TitlePage';

const Sql = () => {

    useLayoutEffect(() => {
        document.title = "SQL Development | SoftTech";
    });

    return (
        
        <React.Fragment>
            <TitlePage title="SQL Development" />
            <Container className='pro-page feature-page'>
                <Row>
                    <Col lg={6}>
                        <h2 className="about-head feature-head">SQL Development</h2>
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
                    <Col lg={6}>
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

export default Sql;