import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

const CareerPage = () => {

    let [fname, setFname] = useState("");
    let [email, setEmail] = useState("");
    let [mobileNo, setMobileNo] = useState("");
    let [qualification, setQualification] = useState("");
    let [jobProfile, setJobProfile] = useState("");
    let [experience, setExperience] = useState("");
    let [resume, setResume] = useState("");
    let [skills, setSkills] = useState("");

    return (

        <React.Fragment>
            <Form>
                <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                    <Form.Label className="pro-label"> Full Name </Form.Label> <span className="imp-text-label">*</span>
                    <Form.Control className="pro-input" type="text" placeholder="Enter Your Full Name"
                        name="fname" value={fname} onChange={(e) => {setFname(e.target.value)}} />
                </Form.Group>

                <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                    <Form.Label className="pro-label"> eMail ID </Form.Label> <span className="imp-text-label">*</span>
                    <Form.Control className="pro-input" type="email" placeholder="Enter Your eMail ID"
                        name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                </Form.Group>

                <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                    <Form.Label className="pro-label"> Mobile No. </Form.Label> <span className="imp-text-label">*</span>
                    <Form.Control className="pro-input" type="tel" placeholder="Enter Your Mobile No."
                        name="mobileNo" value={mobileNo} onChange={(e) => {setMobileNo(e.target.value)}} onKeyPress={(e) => {if(!/[0-9]/.test(e.key)){e.preventDefault();}}} maxLength={10} />
                </Form.Group>

                <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                    <Form.Label className="pro-label"> Qualification </Form.Label> <span className="imp-text-label">*</span>
                    <Form.Select className='pro-select' size="lg" name="qualification" value={qualification} onChange={(e) => {setQualification(e.target.value)}}>
                        <option>Select Your Qualification</option>
                        {["B.C.A.", "B.SC.", "B.Tech", "M.C.A.", "M.SC.", "M.Tech"].map((option, i) => (
                            <option key={i} value={option}>{option}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                    <Form.Label className="pro-label"> Job Profile </Form.Label> <span className="imp-text-label">*</span>
                    <Form.Select className='pro-select' size="lg" name="jobProfile" value={jobProfile} onChange={(e) => {setJobProfile(e.target.value)}}>
                        <option>Select Job Profile</option>
                        {['Android Developer', 'MERN Developer', 'SQL Developer',].map((profile, i) => (
                            <option key={i} value={profile}>{profile}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                    <Form.Label className="pro-label"> Experience </Form.Label> <span className="imp-text-label">*</span>
                    <Form.Select className='pro-select' size="lg" name="experience" value={experience} onChange={(e) => setExperience(e.target.value)}>
                        <option>Select Your Experience</option>
                        {["Fresher", "Less than 1 Year", "1 - 3 Years", "3 - 5 Years", "More than 5 Years"].map((option, i) => (
                            <option key={i} value={option}>{option}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                    <Form.Label className="pro-label"> Upload Resume </Form.Label> <span className="imp-text-label">*</span>
                    <Form.Control className='pro-select' type="file" accept=".docx, .pdf" name="resume" value={resume} onChange={(e) => {setResume(e.target.value)}} />
                </Form.Group>

                <Form.Group className="pro-form" controlId="exampleForm.ControlInput1">
                    <Form.Label className="pro-label"> Skills </Form.Label> <span className="imp-text-label">*</span>
                    <Form.Control as="textarea" rows={3} className="pro-text" type="text" placeholder="Enter Your Skills Here"
                        name="skills" value={skills} onChange={(e) => {setSkills(e.target.value)}} />
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