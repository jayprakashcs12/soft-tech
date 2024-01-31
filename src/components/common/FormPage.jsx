import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

const FormPage = () => {

    let [fname, setFname] = useState("");
    let [mobileNo, setMobileNo] = useState("");
    let [email, setEmail] = useState("");
    let [message, setMessage] = useState("");

    return (

        <React.Fragment>
            <Form>
                <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                    <Form.Label className="pro-label"> Full Name </Form.Label> <span className="imp-text-label">*</span>
                    <Form.Control className="pro-input" type="text" placeholder="Enter Your Full Name"
                        name="fname" value={fname} onChange={(e) => {setFname(e.target.value)}} />
                </Form.Group>

                <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                    <Form.Label className="pro-label"> Mobile No. </Form.Label> <span className="imp-text-label">*</span>
                    <Form.Control className="pro-input" type="tel" placeholder="Enter Your Mobile No."
                        name="mobileNo" value={mobileNo} onChange={(e) => {setMobileNo(e.target.value)}} onKeyPress={(e) => {if(!/[0-9]/.test(e.key)){e.preventDefault();}}} maxLength={10} />
                </Form.Group>

                <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                    <Form.Label className="pro-label"> eMail ID </Form.Label> <span className="imp-text-label">*</span>
                    <Form.Control className="pro-input" type="email" placeholder="Enter Your eMail ID"
                        name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                </Form.Group>

                <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                    <Form.Label className="pro-label"> Address </Form.Label> <span className="imp-text-label">*</span>
                    <Form.Control as="textarea" rows={3} className="pro-text" type="text" placeholder="Enter Your Address"
                        name="address" value={message} onChange={(e) => {setMessage(e.target.value)}} />
                </Form.Group>

                <div className="d-grid gap-2 col-6 mx-auto pro-btn">
                    <Button className="btn btn-primary" type="button">
                        Send <i className="bi bi-send pro-unique-icon"></i>
                    </Button>
                </div>
            </Form>
        </React.Fragment>

    )
}

export default FormPage;