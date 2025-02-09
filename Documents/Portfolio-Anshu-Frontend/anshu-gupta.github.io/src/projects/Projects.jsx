import React, { useState } from "react";
import { Accordion, AccordionBody, AccordionItem, AccordionHeader } from "reactstrap";
import { styles } from "../commons/commonStyles";
import NavBar from "../Navbar/NavBar";
import { FaGithub, FaAngleRight } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const [open, setOpen] = useState('1');

    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div style={{ ...styles.common, marginTop: '55px' }}>
            <NavBar />
            <div className="container projects-container">
                <h3 className="projects-title">Academic Projects</h3>
                <div>
                    <Accordion open={open} toggle={toggle}>
                        <AccordionItem>
                            <AccordionHeader targetId="1">
                                <FaAngleRight className={open === '1' ? 'icon-rotate' : 'icon'} />
                                Automated teller machine (ATM)
                            </AccordionHeader>
                            <AccordionBody accordionId="1">
                                <p>
                                    The objective of this project was to design and develop an ATM system that met the requirements of dispensing cash,
                                    accepting deposits, checking account balances, and transferring funds. The system was secure and protected user data.
                                    It was also efficient and user-friendly. The tools and techniques used in the project were object-oriented programming,
                                    Java, and design patterns.
                                </p>
                                <a href="https://github.com/white-rabbit10/ATM-LLD" className="project-link" target="_blank" rel="noopener noreferrer">
                                    <FaGithub /> View on GitHub
                                </a>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="2">
                                <FaAngleRight className={open === '2' ? 'icon-rotate' : 'icon'} />
                                Splitwise
                            </AccordionHeader>
                            <AccordionBody accordionId="2">
                                <p>
                                    The objective of this project was to design and develop a low-level Splitwise system that would allow users to track
                                    expenses and debts, split them equally, by percentage, or by custom amount, simplify debts, and generate reports. The
                                    system would help people avoid conflicts by keeping track of their expenses. The tools and technologies used in the
                                    project were object-oriented programming, C++ programming language, and design patterns.
                                </p>
                                <a href="https://github.com/white-rabbit10/SplitWise" className="project-link" target="_blank" rel="noopener noreferrer">
                                    <FaGithub /> View on GitHub
                                </a>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="3">
                                <FaAngleRight className={open === '3' ? 'icon-rotate' : 'icon'} />
                                Dictionary
                            </AccordionHeader>
                            <AccordionBody accordionId="3">
                                <p>
                                    The objective of this project was to develop a dictionary that uses a Trie data structure to store and search words
                                    efficiently, even if they are misspelled. The project can handle words of any length and can be used in spell checkers,
                                    text editors, and search engines. This project demonstrates the knowledge of data structures and algorithms,
                                    object-oriented programming, and the C++ programming language.
                                </p>
                                <a href="https://github.com/white-rabbit10/HashMap-Implementation" className="project-link" target="_blank" rel="noopener noreferrer">
                                    <FaGithub /> View on GitHub
                                </a>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default Projects;
