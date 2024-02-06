import React, { useLayoutEffect } from 'react';
import { Container, } from 'react-bootstrap';
import TitlePage from '../common/TitlePage';

const Terms = () => {

    useLayoutEffect(() => {
        document.title = "Terms & Conditions | SoftTech";
    });

    return (
        
        <React.Fragment>
            <TitlePage title="Terms & Conditions" />
            <Container className='pro-page'>
                <p className="about-text">
                    Welcome to SoftTech! These Terms and Conditions govern your use of our software, products, and services. By accessing or using our software, you agree to comply with these terms. Please read them carefully.
                </p>

                <ul className="pro-unorder-list">
                    <li className="pro-list-item">
                        <b> License: </b>
                        Our software is licensed, not sold, to you. SoftTech grants you a limited, non-exclusive, non-transferable, and revocable license to use the software for your personal or business purposes. You may not copy, modify, distribute, sell, or sublicense our software without our prior written consent.
                    </li>

                    <li className="pro-list-item">
                        <b> User Conduct: </b>
                        You agree to use our software responsibly and lawfully. You shall not engage in any activity that may disrupt or interfere with the functioning of our software, compromise its security, or violate any applicable laws or regulations.
                    </li>

                    <li className="pro-list-item">
                        <b> Intellectual Property: </b>
                        All intellectual property rights related to our software, including but not limited to copyrights, trademarks, and patents, are owned by SoftTech. You shall not reproduce, modify, or use any of our intellectual property without our explicit permission.
                    </li>

                    <li className="pro-list-item">
                        <b> Privacy: </b>
                        We value your privacy and handle your personal information according to our Privacy Policy. By using our software, you consent to the collection, use, and storage of your data as described in the Privacy Policy.
                    </li>

                    <li className="pro-list-item">
                        <b> Payment and Subscriptions: </b>
                        Some features or services of our software may require payment or subscription. By purchasing these features, you agree to pay the specified fees and abide by the terms of the chosen subscription plan.
                    </li>

                    <li className="pro-list-item">
                        <b> Termination: </b>
                        Software Company reserves the right to terminate or suspend your access to the software at any time for any reason, without prior notice. Upon termination, you must cease using our software and delete all copies in your possession.
                    </li>

                    <li className="pro-list-item">
                        <b> Disclaimer of Warranties: </b>
                        Our software is provided "as is" and without warranties of any kind, whether express or implied. We do not guarantee that our software will be error-free, uninterrupted, or meet your specific requirements.
                    </li>

                    <li className="pro-list-item">
                        <b> Limitation of Liability: </b>
                        In no event shall Software be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our software, even if we have been advised of the possibility of such damages.
                    </li>

                    <li className="pro-list-item">
                        <b> Indemnification:  </b>
                        You agree to indemnify and hold SoftTech harmless from any claims, damages, losses, or expenses, including attorney's fees, arising from your use of our software or any violation of these Terms and Conditions.
                    </li>

                    <li className="pro-list-item">
                        <b> Governing Law and Jurisdiction: </b>
                        These Terms and Conditions shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any dispute arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts in [Jurisdiction].
                    </li>

                    <li className="pro-list-item">
                        <b> Amendments: </b>
                        Software Company reserves the right to modify or update these Terms and Conditions at any time. Changes will be effective upon posting on our website or through the software. It is your responsibility to review the terms periodically.
                    </li>

                    <li className="pro-list-item">
                        <b> Entire Agreement: </b>
                        These Terms and Conditions constitute the entire agreement between you and Software Company regarding the use of our software and supersede any prior agreements or understandings.
                    </li>
                </ul>

                <p className="about-text">
                    If you have any questions or concerns about these Terms and Conditions or our software, please contact us at jayprakash185@gmail.com.
                </p>
            </Container>
        </React.Fragment>
    )
}

export default Terms;