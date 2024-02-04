import React, { useLayoutEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import TitlePage from "../common/TitlePage";
import TabsCont from '../tabs/TabsCont';
import AccordionsCont from '../tabs/AccordionsCont';
import { Link } from 'react-router-dom';

const Career = () => {

    let [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

    let handleResize = () => {
        setDeviceWidth(window.innerWidth);
    };

    useLayoutEffect(() => {
        document.title = "Career | Software";
        window.addEventListener('resize', handleResize); // Add event listener for window resize
        return () => {
          window.removeEventListener('resize', handleResize); // Cleanup the event listener when the component unmounts
        };
    }, []);

    let titles = [
        { tabTitle: "Android Developer" },
        { tabTitle: "MERN Developer" },
        { tabTitle: "SQL Developer" }
    ];

    let titleSummary = [
        { tabTitle: "Job Summary" },
        { tabTitle: "Responsibilities" },
        { tabTitle: "Requirements" }
    ];

    let descriptions = [
        {   
            tabTitle: "As an Android Developer at our software company, you'll play a crucial role in creating, enhancing, and maintaining engaging mobile applications. Working closely with our product development team, you'll contribute to the evolution of cutting-edge digital solutions tailored to user needs. If you're passionate about mobile development, skilled in languages like Java or Kotlin, and skilled at transforming ideas into intuitive app experiences, we're excited to hear from you.", 
            tabResponse: "Conduct code reviews to ensure adherence to best practices, code efficiency, and scalability. Identify and resolve performance bottlenecks and optimize application performance. Implement pixel-perfect UI designs, animations, and transitions to deliver visually appealing and intuitive user interfaces. Create and maintain detailed technical documentation for the Android applications, including architecture, API usage, and troubleshooting guides.", 
            tabRequirements: "Bachelor's degree in Computer Science, Software Engineering, or related field. (or equivalent work experience). Proficiency in Java, Kotlin, or both, with a strong understanding of Object-Oriented Programming (OOP) concepts. Proven experience in Android app development, with a portfolio of published applications on the Google Play Store. Strong analytical and problem-solving skills, with the ability to troubleshoot and debug complex issues.",
        },
        {   
            tabTitle: "As a MERN Stack Developer at our software company, you'll be instrumental in developing dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js technologies. Collaborating closely with our product development team, you'll have the opportunity to contribute to the creation and improvement of innovative digital solutions that meet user requirements. If you possess a strong passion for web development, proficiency in JavaScript, we eagerly await your application.",
            tabResponse: "Conduct code reviews to ensure adherence to best practices, code efficiency, and scalability in MERN stack development. Identify and resolve performance bottlenecks specific to MongoDB, Express.js, React, and Node.js, optimizing application performance accordingly. Create and maintain detailed technical documentation for the MERN stack applications, covering architecture, API usage, and troubleshooting guides. Implement React to deliver visually intuitive user interfaces.",
            tabRequirements:"We are seeking a talented MERN (MongoDB, Express.js, React.js, Node.js) Developer to join our team. The ideal candidate will possess a Bachelor's degree in Computer Science, Software Engineering, or a related field (or equivalent work experience). Strong analytical and problem-solving skills are essential, with a proven ability to troubleshoot and debug complex issues. If you are passionate about crafting high-quality software solutions in a collaborative environment, we encourage you to apply."
        },
        {
            tabTitle: "As a SQL Developer within our dynamic team, you will be instrumental in the design, development, and optimization of database solutions. Collaborating closely with our software development team, you will contribute to the advancement of robust data management systems that align with organizational requirements. If you possess a strong understanding of SQL and database management systems, along with a passion for creating efficient and scalable data solutions, we encourage you to apply.",
            tabResponse: "Conduct database schema reviews to ensure adherence to normalization best practices, data efficiency, and scalability. Identify and resolve performance bottlenecks in database queries and optimize overall database performance. Implement efficient database indexing strategies to improve query performance. Create and maintain detailed technical documentation for the database system, including schema architecture, query optimization techniques, and troubleshooting guides.",
            tabRequirements:"We are seeking a skilled SQL Developer with a Bachelor's degree in Computer Science, Software Engineering, or a related field (or equivalent work experience). Proven experience as an SQL developer or database administrator, with a strong understanding of relational database concepts and SQL syntax. Proficiency in writing complex SQL queries, including joins, subqueries, and aggregate functions. Experience with database design, normalization, indexing, and optimization techniques."
        },
    ];
    
    return (
        <React.Fragment>
            <TitlePage title="Career" />
            <Container className='career-page'>
                <h1 className='page-title'>Career</h1>
                {deviceWidth > 992 ? 
                    <TabsCont titles={titles} titleSummary={titleSummary} descriptions={descriptions} /> 
                : 
                    <AccordionsCont titles={titles} titleSummary={titleSummary} descriptions={descriptions} />
                }

                <div className="join-div">
                    <h4>Empower Your Future: <Link className='pro-career-link' to="/contact-us">Click Here</Link> to Join Us!</h4>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Career;