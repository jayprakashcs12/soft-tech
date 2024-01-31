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
        { tabTitle: "iOS Developer" },
        { tabTitle: "Website Developer" }
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
            tabTitle: "As an iOS Developer at Software Company, you will play a key role in designing, developing, and maintaining innovative iOS applications. You will work closely with our product development team to create cutting-edge mobile solutions that deliver a seamless and engaging user experience on Apple devices. If you have a passion for iOS app development, a strong command of Swift/Objective-C, and the ability to turn ideas into functional applications, we want to hear from you.", 
            tabResponse: "Collaborate with cross-functional teams, including product managers, designers, and backend developers, to bring new app features and enhancements to life. Conduct code reviews to maintain coding standards, identify performance bottlenecks, and optimize application performance. Perform comprehensive testing of iOS applications to identify and fix bugs, ensuring a robust and reliable software product.", 
            tabRequirements: "Proficiency in Swift and/or Objective-C, with a strong understanding of Object-Oriented Programming (OOP) concepts. Familiarity with Xcode, Interface Builder, and version control systems like Git. Hands-on experience with RESTful APIs and JSON data interchange. Strong analytical and problem-solving skills, with the ability to troubleshoot and debug complex issues.  Hands-on experience with RESTful APIs and JSON data interchange.",
        },
        {
            tabTitle: "As a Website Developer at our software company, you'll be integral to crafting, refining, and sustaining captivating web experiences. Collaborating closely with our product development unit, you'll help shape modern digital solutions that resonate with users. If you're enthusiastic about web development, proficient in languages like HTML, CSS, and JavaScript, and adept at translating concepts into dynamic websites, we're eager to connect with you.",
            tabResponse: "Create and maintain detailed technical documentation for Website, including architecture, API usage, and troubleshooting guides. Implement user interface designs, ensuring a seamless and intuitive user experience. Integrate with backend services and APIs to ensure seamless data synchronization and real-time functionality. Monitor web-pages performance and user feedback to identify areas for improvement and implement necessary updates.", 
            tabRequirements: "Experience in implementing user-friendly and visually appealing user interfaces. Excellent communication skills and the ability to collaborate effectively in a team environment. Strong analytical and problem-solving skills, with the ability to troubleshoot and debug complex issues. A creative mindset with a passion for exploring new ideas and innovative solutions. Hands-on experience with APIs and data interchange formats.",
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