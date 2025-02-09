import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import NavBar from "../Navbar/NavBar";
import experienceData from "./experienceData";
import "./WorkExperience.css";

const WorkExperience = () => {
    return (
        <div className="work-experience-container">
            <NavBar />
            <div className="experience-grid">
                {experienceData.map((job, index) => (
                    <Card key={index} className="work-card">
                        <div className="logo-container">
                            <img src={job.logo} alt={`${job.company} Logo`} className="company-logo" />
                        </div>
                        <CardBody style={{ textAlign: "center" }}>
                            <CardTitle tag="h5">{job.company}</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">
                                {job.position} | {job.duration}
                            </CardSubtitle>
                            <CardText style={{ textAlign: "left" }}>
                                <ul>
                                    {job.responsibilities.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;
