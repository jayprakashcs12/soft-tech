import React from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import ProImg1 from "../../img/carousel/carousel-01.jpg";
import ProImg2 from "../../img/carousel/carousel-02.jpg";
import ProImg3 from "../../img/carousel/carousel-03.jpg";

const ImgCarousel = () => {

    let carousels = [
        {
            captionHead: 'Android Developer', captionBody: 'Coding, exploring, and creating memories with fellow developers. Android bliss...!'
        },
        {
            captionHead: 'iOS Developer', captionBody: 'Coding, examining, and making recollections with individual engineers. iOS bliss...!'
        },
        {
            captionHead: 'Website Developer', captionBody: 'Coding, examining, and making memories with individual developers. Website bliss...!'
        }
    ];


    return (
        
        <React.Fragment>
            <Container fluid className='carousel-container'>
                <Carousel fade>
                    {carousels.map((carousel, i) => (
                        <Carousel.Item key={i}>
                            <Image className="car-img" src={i === 0 ? ProImg1 : i === 1 ? ProImg2 : ProImg3} />
                            <Carousel.Caption className='carousel-caption'>
                                <h3 className="pro-caption-head"> {carousel.captionHead} </h3>
                                <p className="pro-caption-body"> {carousel.captionBody} </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </React.Fragment>
    )
}

export default ImgCarousel;
