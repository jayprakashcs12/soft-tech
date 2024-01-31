import React, { useLayoutEffect } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import AboutImg1 from "../../img/about/about-us-001.jpg";
import AboutImg2 from "../../img/about/about-us-002.jpg";
import ProImg1 from "../../img/team/team-001.jpg";
import ProImg2 from "../../img/team/team-002.jpg";
import ProImg3 from "../../img/team/team-003.jpg";
import ProImg4 from "../../img/team/team-004.jpg";
import ImgCarousel from '../common/ImgCarousel';
import { Link } from 'react-router-dom';

const Home = () => {

  useLayoutEffect(() => {
    document.title = "Software";
  });

  let services = [
    {
      icon: 'bi-android2', title: 'Android Development',
      description: 'Building and optimizing Android mobile applications with a focus on performance, usability, and seamless user experience.'
    },
    {
      icon: 'bi-phone', title: 'iOS Development',
      description: 'Creating high-quality and user-friendly iOS mobile applications, leveraging Apple\'s technology for optimal performance.'
    },
    {
      icon: 'bi-microsoft', title: 'Windows Development',
      description: 'Building software applications for the Windows OS, ensuring functionality, compatibility, and a seamless user experience.'
    }
  ];

  let developers = [
    { name: 'Anil Srivastava', position: 'Core Java' },
    { name: 'Prateek Malhotra', position: 'MERN Stack' },
    { name: 'Vijay Deenanath', position: 'Dot Net' },
    { name: 'Murli Singhaniya', position: 'Wordpress' },
  ];

  return (
    <React.Fragment>
      <ImgCarousel />
      <Container>
        <Row className='service-div'>
          <h1 className='service-heads'>Our Services</h1>
          {services.map((service, i) => (
            <Col key={i} lg={4} className='service-section'>
              <div className="icon-sect">
                <i className={service.icon + " pro-icons"}></i>
              </div>
              <h2 className="service-head">{service.title}</h2>
              <p className="service-body">{service.description}</p>
            </Col>
          ))}
        </Row>

        <Row>
          <Col lg={6} className='about-div'>
            <div className="image-div">
              <Image src={AboutImg1} className='about-img' />
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
            <div className="d-grid gap-2 d-md-flex about-btn1">
              <Button variant='primary' className="btn btn-primary float-right about-btn">
                <Link to="/about-us" className='pro-link-btn'>Read More <i className="bi bi-arrow-right pro-unique-icon"></i></Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <div className='contact-sect'>
        <Container>
          <p className="contact-text">
            Act now, change your life. Click to unlock your potential and achieve greatness with us. Don't miss out...!
          </p>
          <div className="d-grid gap-2 d-md-flex contact-sect-btn">
            <Button variant='primary' className="btn btn-primary float-right read-btn cont-btn">
              <Link to="/contact-us" className='pro-link-btn'>Contact Us <i className="bi bi-arrow-right pro-unique-icon"></i></Link>
            </Button>
          </div>
        </Container>
      </div>

      <Container>
        <Row>
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
            <div className="d-grid gap-2 d-md-flex about-btn2">
              <Button variant='primary' className="btn btn-primary why-btn">
                <Link to="/about-us" className='pro-link-btn'>Read More <i className="bi bi-arrow-right pro-unique-icon"></i></Link>
              </Button>
            </div>
          </Col>
          <Col lg={6} className='why-div'>
            <div className="image-div">
              <Image src={AboutImg2} className='why-img' />
            </div>
          </Col>
        </Row>
      </Container>

      <div className='career-sect'>
        <Container>
          <p className="career-text">
            Discover your dream career. Expert guidance, resources, assessments, and job listings to shape your future. Join us now...!
          </p>
          <div className="d-grid gap-2 d-md-flex career-sect-btn">
            <Button variant='primary' className="btn btn-primary read-btn career-btn">
              <Link to="/career" className='pro-link-btn'> Career <i className="bi bi-arrow-right pro-unique-icon"></i></Link>
            </Button>
          </div>
        </Container>
      </div>

      <Container className='team-sect'>
        <h2 className="team-head"> Our Professional Team </h2>
        <Row>
          {developers.map((developer, i) => (
            <Col lg={3} key={i}>
              <div className="team-div">
                <div className="image-div">
                  <Image className="team-img" src={i === 0 ? ProImg1 : i === 1 ? ProImg2 : i === 2 ? ProImg3 : ProImg4} alt={developer.name} />
                </div>
                <div className="team-info">
                  <h2 className="team-name">{developer.name}</h2>
                  <p className="team-desc"> {developer.position} Developer</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Home;