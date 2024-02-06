import React, { useLayoutEffect } from 'react';
import { Container, } from 'react-bootstrap';
import TitlePage from '../common/TitlePage';

const Privacy = () => {

    useLayoutEffect(() => {
        document.title = "Privacy Policy | SoftTech";
    });

    return (
        
        <React.Fragment>
            <TitlePage title="Privacy Policy" />
            <Container className='pro-page'>
                <p className="about-text">
                    At SoftTech, we are committed to protecting the privacy and security of our users' personal
                    information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact
                    with our software and services. By using our products, you agree to the practices described herein.
                </p>
                <ul className="pro-unorder-list">
                    
                    <li className="pro-list-item">
                        <b> Data Collection: </b>
                        We may collect certain information when you use our software, such as your name, email
                        address, device information, IP address, and usage data. This data is collected to
                        improve our services, provide customer support, and ensure a personalized experience for
                        our users.
                    </li>

                    <li className="pro-list-item">
                        <b> Usage of Information: </b>
                        The information we collect is used to deliver and maintain our software, process transactions, and send
                        relevant communications, including updates and marketing material. We may also use aggregated and
                        anonymized data for analytics purposes to improve our products.
                    </li>

                    <li className="pro-list-item">
                        <b> Cookies and Tracking Technologies: </b>
                        Like many websites, we use cookies and similar technologies to enhance user experience, analyze trends,
                        and track user behavior. These technologies help us provide better services and personalized content.
                        You can manage your cookie preferences through your browser settings.
                    </li>

                    <li className="pro-list-item">
                        <b> Third-Party Services: </b>
                        We may use third-party services for analytics, advertising, and other business purposes. These
                        third-party providers have their own privacy policies, and we recommend reviewing them to understand how
                        they handle your information.
                    </li>

                    <li className="pro-list-item">
                        <b> Data Security: </b>
                        We employ industry-standard security measures to protect your personal information from unauthorized
                        access, disclosure, or alteration. Despite these efforts, no method of data transmission over the
                        internet or electronic storage is entirely secure, and we cannot guarantee absolute security.
                    </li>

                    <li className="pro-list-item">
                        <b> Data Retention: </b>
                        We will retain your personal information for as long as necessary to fulfill the purposes outlined in
                        this Privacy Policy, unless a longer retention period is required or permitted by law.
                    </li>

                    <li className="pro-list-item">
                        <b> Children's Privacy: </b>
                        Our software is not intended for use by individuals under the age of 13. We do not knowingly collect or
                        store personal information from children under 13 without parental consent. If you believe your child
                        has provided us with their information, please contact us, and we will promptly delete the data.
                    </li>

                    <li className="pro-list-item">
                        <b> Data Subject Rights: </b>
                        You have the right to access, update, and delete your personal information. If you wish to exercise
                        these rights or have any concerns about your data, please contact us using the information provided at
                        the end of this policy.
                    </li>

                    <li className="pro-list-item">
                        <b> Changes to the Privacy Policy: </b>
                        We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                        requirements. We will notify you of significant updates through our website or other appropriate
                        channels.
                    </li>

                    <li className="pro-list-item">
                        <b> Consent: </b>
                        By using our software, you consent to the collection and processing of your information as described in
                        this Privacy Policy.
                    </li>
                </ul>

                <p className="about-text">
                    For any questions or concerns regarding this Privacy Policy or your data, please contact us at jayprakash185@gmail.com. 
                    Your privacy matters to us, and we are committed to addressing any issues promptly and transparently.
                </p>
            </Container>
        </React.Fragment>

    )
}

export default Privacy;