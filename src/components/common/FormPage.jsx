import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const FormPage = () => {

    let [contactData, setContactData] = useState({
        fname: "", mobileNo: "", email: "", message: ""
    });

    let { fname, mobileNo, email, message } = contactData;

    let contactsData = (e) => {
        let { name, value } = e.target;
        setContactData({ ...contactData, [name]: value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        if(!fname || !mobileNo || !email || !message) {
            toast.warning("Please fill the Required Field...!", { className: "pro-toast" });
        } else {
            toast.success("Form Submitted Successfully...!", { className: "pro-toast" });
            setContactData({
                fname: "", mobileNo: "", email: "", message: ""
            });
        }
    }

    return (

        <React.Fragment>
            <Form>
                <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                    <Form.Label className="pro-label"> Full Name </Form.Label> <span className="imp-text-label">*</span>
                    <Form.Control className="pro-input" type="text" placeholder="Enter Your Full Name"
                        name="fname" value={fname} onChange={contactsData} />
                </Form.Group>

                <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                    <Form.Label className="pro-label"> Mobile No. </Form.Label> <span className="imp-text-label">*</span>
                    <Form.Control className="pro-input" type="tel" placeholder="Enter Your Mobile No."
                        onKeyPress={(e) => {if(!/[0-9]/.test(e.key)){e.preventDefault();}}} maxLength={10}
                        name="mobileNo" value={mobileNo} onChange={contactsData} />
                </Form.Group>

                <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                    <Form.Label className="pro-label"> eMail ID </Form.Label> <span className="imp-text-label">*</span>
                    <Form.Control className="pro-input" type="email" placeholder="Enter Your eMail ID"
                        name="email" value={email} onChange={contactsData} />
                </Form.Group>

                <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                    <Form.Label className="pro-label"> Address </Form.Label> <span className="imp-text-label">*</span>
                    <Form.Control as="textarea" rows={3} className="pro-text" type="text" placeholder="Enter Your Full Address"
                        name="message" value={message} onChange={contactsData} />
                </Form.Group>

                <div className="d-grid gap-2 col-6 mx-auto pro-btn">
                    <Button className="btn btn-primary" type="button" onClick={handleSubmit}>
                        Send <i className="bi bi-send pro-unique-icon"></i>
                    </Button>
                </div>
            </Form>
        </React.Fragment>

    )
}

export default FormPage;