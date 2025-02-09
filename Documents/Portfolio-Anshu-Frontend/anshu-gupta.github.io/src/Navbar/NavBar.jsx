import { faBlogger, faGithub, faLinkedin,faMedium } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";
import { Resume } from "../Constants";
import UserAvatar from '../images/AnshuGupta.jpg';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const navigate = useNavigate();

    const redirectToHomePage = () => {
        navigate("/"); 
    }

    const redirectToAboutMe = () => {
        navigate("/aboutMe"); 
    }

    const redirectToTimeline = () => {
        navigate("/timeline");
    }

    const redirectToSkills = () => {
        navigate("/skills");
    }

    const redirectToRecommendations = () => {
        navigate("/recommendations");
    }

    const redirectToProjects = () => {
        navigate("/projects");
    }
    const redirectToAchievements = () => {
        navigate("/achievements");
    }
    const redirectToExperiences = () => {
        navigate("/work-experience")
    }

    const redirectToHobbies = () => {
        navigate("/hobbies");
    }

    return (
        <Navbar color="light" light expand="md" fixed="top" style={{fontFamily: 'Roboto', fontSize: '18px', height: '55px'}}>
            <NavbarBrand onClick={redirectToHomePage} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faBlogger}/>
                {' '} Anshu Gupta
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink onClick={redirectToTimeline} style={{ cursor: 'pointer' }}>
                            Career Path 
                        </NavLink>
                        
                    </NavItem>
                    <NavItem><NavLink onClick={redirectToExperiences} style={{ cursor: 'pointer' }}>
                            Experiences
                        </NavLink></NavItem>
                    <NavItem>
                        <NavLink onClick={redirectToSkills} style={{ cursor: 'pointer' }}>
                            Technical Skills
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={redirectToRecommendations} style={{ cursor: 'pointer' }}>
                            Endorsements
                        </NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink onClick={redirectToProjects} style={{ cursor: 'pointer' }}>
                            Work Showcase 
                        </NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink onClick={redirectToAchievements} style={{ cursor: 'pointer' }}>
                            Achievements
                        </NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink onClick={redirectToHobbies}  style={{ cursor: 'pointer' }}>
                            Hobbies
                        </NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink href={Resume} target={'_blank'} style={{ cursor: 'pointer' }}>
                            My Resume
                        </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Profiles
                        </DropdownToggle>
                        <DropdownMenu left="true">
                            <DropdownItem>
                                <NavLink href="https://www.linkedin.com/in/anshu27/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '10px', fontSize: '18px', color: '#0077B5' }}/>
                                {' '}LinkedIn
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="https://github.com/anshugupta27" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} style={{ marginRight: '10px', fontSize: '18px', color: '#333' }} />
                                    {' '}GitHub
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="https://leetcode.com/u/Anshu_Gupta/" target="_blank">
                                    <FontAwesomeIcon icon={faCode} style={{ marginRight: '10px', fontSize: '18px', color: '#333' }}/>
                                    {' '}Leetcode
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="https://medium.com/@rush2anshugupta" target="_blank">
                                    <FontAwesomeIcon icon={faMedium} style={{ marginRight: '10px', fontSize: '18px', color: '#333' }}/>
                                    {' '}Medium
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>
                    <NavLink onClick={redirectToAboutMe} style={{ cursor: 'pointer' }}>
                        <span style={{ marginRight: '10px' }}>About Me</span>
                        <img 
                            src={UserAvatar} 
                            alt="User Avatar"
                            style={{
                                height: 35,
                                width: 40,
                                borderRadius: "50%"
                            }} 
                        />
                    </NavLink>
                </NavbarText>

            </Collapse>
        </Navbar>
    )
}

export default NavBar
