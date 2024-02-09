import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import Select from "react-select";

const CareerPage = () => {

    let [fname, setFname] = useState("");
    let [email, setEmail] = useState("");
    let [mobileNo, setMobileNo] = useState("");
    let [selectGender, setSelectGender] = useState("");
    let [qualification, setQualification] = useState("");
    let [resume, setResume] = useState("");
    let [experience, setExperience] = useState("");
    let [jobProfile, setJobProfile] = useState("");
    let [skills, setSkills] = useState("");

    let qualOptions = [
        { value: 'B.C.A.', label: 'B.C.A.' },
        { value: 'B.SC.', label: 'B.SC.' },
        { value: 'B.Tech', label: 'B.Tech' },
        { value: 'M.C.A.', label: 'M.C.A.' },
        { value: 'M.SC.', label: 'M.SC.' },
        { value: 'M.Tech', label: 'M.Tech' },
    ];

    let expOptions = [
        {value: 'Fresher', label: 'Fresher'},
        {value: 'Less than 1 Year', label: 'Less than 1 Year'},
        {value: '1 - 3 Years', label: '1 - 3 Years'},
        {value: '3 - 5 Years', label: '3 - 5 Years'},
        {value: 'More than 5 Years', label: 'More than 5 Years'},
    ]

    let jobOptions = [
        {value: 'Android Developer', label: 'Android Developer'},
        {value: 'MERN Developer', label: 'MERN Developer'},
        {value: 'SQL Developer', label: 'SQL Developer'},
    ]

    let handleGenChange = (gender) => {
        setSelectGender(gender);
    };

    return (

        <React.Fragment>
            <Form>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                            <Form.Label className="pro-label"> Full Name </Form.Label> <span className="imp-text-label">*</span>
                            <Form.Control className="pro-input" type="text" placeholder="Enter Your Full Name"
                                name="fname" value={fname} onChange={(e) => { setFname(e.target.value) }} />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                            <Form.Label className="pro-label"> eMail ID </Form.Label> <span className="imp-text-label">*</span>
                            <Form.Control className="pro-input" type="email" placeholder="Enter Your eMail ID"
                                name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                            <Form.Label className="pro-label"> Mobile No. </Form.Label> <span className="imp-text-label">*</span>
                            <Form.Control className="pro-input" type="tel" placeholder="Enter Your Mobile No."
                                name="mobileNo" value={mobileNo} onChange={(e) => { setMobileNo(e.target.value) }}
                                onKeyPress={(e) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} maxLength={10} />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                            <Form.Label className="pro-label"> Gender </Form.Label>
                            <div className="gender-select">
                                <Form.Check type="switch" id="male-radio" className='pro-switch' label="Male" checked={selectGender === 'Male'} 
                                    onChange={() => handleGenChange('Male')}  />
                                <Form.Check type="switch" id="female-radio" className='pro-switch' label="Female" checked={selectGender === 'Female'} 
                                    onChange={() => handleGenChange('Female')}  />
                                <Form.Check type="switch" id="others-radio" className='pro-switch' label="Others" checked={selectGender === 'Others'} 
                                    onChange={() => handleGenChange('Others')}  />
                            </div>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                            <Form.Label className="pro-label"> Qualification </Form.Label> <span className="imp-text-label">*</span>
                            <Select placeholder="Select Your Qualification" className='latest-select' 
                                defaultValue={qualification} onChange={setQualification} options={qualOptions}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                            <Form.Label className="pro-label"> Upload Resume </Form.Label> <span className="imp-text-label">*</span>
                            <Form.Control className='file-select' type="file" accept=".docx, .pdf" name="resume" value={resume} onChange={(e) => { setResume(e.target.value) }} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                            <Form.Label className="pro-label"> Experience </Form.Label> <span className="imp-text-label">*</span>
                            <Select placeholder="Select Your Experience" className='latest-select' 
                                defaultValue={experience} onChange={setExperience} options={expOptions}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                            <Form.Label className="pro-label"> Job Profile </Form.Label> <span className="imp-text-label">*</span>
                            <Select placeholder="Select Your Job Profile" className='latest-select' 
                                defaultValue={jobProfile} onChange={setJobProfile} options={jobOptions}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                    <Form.Label className="pro-label"> Skills </Form.Label> <span className="imp-text-label">*</span>
                    <Form.Control as="textarea" rows={3} className="pro-text" type="text" placeholder="Enter Your Skills Here"
                        name="skills" value={skills} onChange={(e) => { setSkills(e.target.value) }} />
                </Form.Group>

                <div className="d-grid gap-2 col-6 mx-auto pro-btn">
                    <Button className="btn btn-primary" type="button">
                        Submit <i className="bi bi-send pro-unique-icon"></i>
                    </Button>
                </div>
            </Form>
        </React.Fragment>

    )
}

export default CareerPage;