import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Select from "react-select";

const CareerPage = () => {

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

    let [careerData, setCareerData] = useState({
        fname: "", email: "", mobileNo: "", qualification: "", resume: "", experience: "", jobProfile: "", skillSet: ""
    });

    let { fname, email, mobileNo, qualification, resume, experience, jobProfile, skillSet } = careerData;

    let genderOptions = [
        { id: 'male-radio', label: 'Male', value: 'Male' },
        { id: 'female-radio', label: 'Female', value: 'Female' },
        { id: 'others-radio', label: 'Others', value: 'Others' }
    ];

    let [selectGender, setSelectGender] = useState("");

    let handleGenChange = (gender) => {
        setSelectGender(gender);
    };

    let careersData = (e) => {
        let { name, value } = e.target;
        setCareerData({ ...careerData, [name]: value });
    }

    let handleFileChange = (e) => {
        let file = e.target.files[0];
        setCareerData({ ...careerData, resume: file });
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        if(!fname || !email || !mobileNo || !selectGender || !qualification || !resume || !experience || !jobProfile || !skillSet) {
            toast.warning("Please fill the Required Field...!", { className: "pro-toast" });
        } else {
            toast.success("Form Submitted Successfully...!", { className: "pro-toast" });
            setCareerData({
                fname: "", email: "", mobileNo: "", qualification: "", resume: "", experience: "", jobProfile: "", skillSet: ""
            });
            setSelectGender("");
        }
    }

    return (

        <React.Fragment>
            <Form>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                            <Form.Label className="pro-label"> Full Name </Form.Label> <span className="imp-text-label">*</span>
                            <Form.Control className="pro-input" type="text" placeholder="Enter Your Full Name"
                                name="fname" value={fname} onChange={careersData} />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                            <Form.Label className="pro-label"> eMail ID </Form.Label> <span className="imp-text-label">*</span>
                            <Form.Control className="pro-input" type="email" placeholder="Enter Your eMail ID"
                                name="email" value={email} onChange={careersData} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                            <Form.Label className="pro-label"> Mobile No. </Form.Label> <span className="imp-text-label">*</span>
                            <Form.Control className="pro-input" type="tel" placeholder="Enter Your Mobile No."
                                name="mobileNo" value={mobileNo} onChange={careersData}
                                onKeyPress={(e) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} maxLength={10} />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                            <Form.Label className="pro-label"> Gender </Form.Label>
                            <div className="gender-select">
                                {genderOptions.map(option => (
                                    <Form.Check key={option.id} type="switch" id={option.id} className='pro-switch'
                                        label={option.label} checked={selectGender === option.value}
                                        onChange={() => handleGenChange(option.value)}
                                    />
                                ))}
                            </div>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                            <Form.Label className="pro-label"> Qualification </Form.Label> <span className="imp-text-label">*</span>
                            <Select placeholder="Select Your Qualification" className='latest-select' 
                                defaultValue={qualification} onChange={careersData} options={qualOptions}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                            <Form.Label className="pro-label"> Upload Resume </Form.Label> <span className="imp-text-label">*</span>
                            <Form.Control className='file-select' type="file" accept=".docx, .pdf" 
                                name="resume" value={resume} onChange={handleFileChange} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                            <Form.Label className="pro-label"> Experience </Form.Label> <span className="imp-text-label">*</span>
                            <Select placeholder="Select Your Experience" className='latest-select' 
                                defaultValue={experience} options={expOptions} onChange={careersData}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                            <Form.Label className="pro-label"> Job Profile </Form.Label> <span className="imp-text-label">*</span>
                            <Select placeholder="Select Your Job Profile" className='latest-select' 
                                defaultValue={jobProfile} options={jobOptions} onChange={careersData}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                    <Form.Label className="pro-label"> Skills </Form.Label> <span className="imp-text-label">*</span>
                    <Form.Control as="textarea" rows={3} className="pro-text" type="text" placeholder="Enter Your Skills Here"
                        name="skillSet" value={skillSet} onChange={careersData} />
                </Form.Group>

                <div className="d-grid gap-2 col-6 mx-auto pro-btn">
                    <Button className="btn btn-primary" type="button" onClick={handleSubmit}>
                        Submit <i className="bi bi-send pro-unique-icon"></i>
                    </Button>
                </div>
            </Form>
        </React.Fragment>

    )
}

export default CareerPage;