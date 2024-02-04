import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TitlePage = (props) => {

    let title = props.title;

    return (
        <>
            <Container fluid className="page-container-overlay pro-container"></Container>
            <div className="pro-breadcrumb">
                <div>
                    <h1 className="breadcrumb-head"> {title} </h1>
                    <ol className="breadcrumb-link">
                        <li className="breadcrumb-home-link"><Link to="/" className="back-to-home"> Home </Link></li>
                        <li className="active-page-div"> {title} </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default TitlePage;
