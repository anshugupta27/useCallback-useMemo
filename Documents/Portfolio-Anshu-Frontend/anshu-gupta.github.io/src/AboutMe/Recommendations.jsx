import React from "react";
import { Row, Col, Card, CardText } from "reactstrap";
import Param from '../images/Param.png';
import Vaishnavi from '../images/Vaishnavi.png';
import Agamya from '../images/Agamya.png';
import Ritwik from '../images/Ritwik.png';
import Shalini from '../images/ShaliniNegi.png';
import NavBar from "../Navbar/NavBar";
import { styles } from "../commons/commonStyles";

const Recommendations = () => {
    return (
       <div style={{...styles.common, marginTop: '55px'}}>
            <NavBar />
            <div className="container" style={{marginTop: '20px', fontFamily: 'Roboto'}}>
                <h3 style={{textAlign: 'center'}}>What some cool people say about me!</h3>
                <div style={{color: '#000'}}>
                    <Row style={{marginTop: '20px'}}>
                        <Col >
                            <Card body style={{ display: 'flex', alignItems: 'center', fontStyle: 'italic' }}>
                                <CardText>
                                    <span style={{ display: 'flex', alignItems: 'center'}}>
                                    Anshu is highly energetic and passionate girl. There is something different about the positiveness she bring into the table. I worked directly with her in organising the biggest hackathon of Pune where she was responsible for managing the external teams. The at-most sincerity and hard-work with which she performs her duty is commendable. She will be great assert for any organisation in which she decides to work.
                                        <img 
                                            src={Shalini} 
                                            alt="Recommender"
                                            style={{ height: 150, marginLeft: '20px'}} 
                                        />
                                    </span>
                                </CardText>
                                <a href="https://www.linkedin.com/in/shalininegi24/" target="_blank" rel="noopener noreferrer" 
                                    style={{ marginRight: 'auto', marginTop: '-20px' }}   >- Shalini Negi</a>
                            </Card>
                        </Col>
                    </Row>
                    {/* <Row style={{marginTop: '20px'}}>
                        <Col >
                            <Card body style={{ display: 'flex', alignItems: 'center', fontStyle: 'italic' }}>
                                <CardText>
                                    <span style={{ display: 'flex', alignItems: 'center'}}>
                                        <img 
                                            src={Agamya} 
                                            alt="Recommender"
                                            style={{ height: 150, marginRight: '20px'}} 
                                        />
                                        I managed Srishti during her tenure with our team at Optiwise. She possesses an impressive depth of knowledge and 
                                        exhibits exceptional problem-solving skills. She is great team player and has, on numerous occasions, gone above 
                                        and beyond to ensure that the team met the deadline as required. She works effectively in a team environment, 
                                        communicates clearly, and has contributed to the overall success of the team. She is quite reliable and her proactive
                                        approach makes her a valuable asset to any team. I've seen Srishti continuously aim for excellence and I am 
                                        confident that she will continue to thrive in her future endeavours.
                                    </span>
                                </CardText>
                                <a href="https://www.linkedin.com/in/agamya-dixit-940701113/" target="_blank" rel="noopener noreferrer" 
                                    style={{ marginLeft: 'auto', marginTop: '-40px' }}   >- Agamya Dixit</a>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '20px'}}>
                        <Col >
                            <Card body style={{ display: 'flex', alignItems: 'center', fontStyle: 'italic' }}>
                                <CardText>
                                    <span style={{ display: 'flex', alignItems: 'center'}}>
                                        Srishti has solid experience in working with Java and AWS services. Srishti's expertise has undoubtedly contributed 
                                        to the success of the project she was a part of during her tenure in Amazon. Srishti is not only a proficient 
                                        developer but also an excellent team player. Her collaborative approach fosters a positive work environment, 
                                        making her a valuable asset to any team. She's adept at coordinating with colleagues, sharing knowledge, 
                                        and driving projects forward with efficiency and enthusiasm. Overall, she's a dependable professional who brings 
                                        both technical expertise and interpersonal skills to the table.
                                        <img 
                                            src={Vaishnavi} 
                                            alt="Recommender"
                                            style={{ height: 150, marginLeft: '20px'}} 
                                        />
                                    </span>
                                </CardText>
                                <a href="https://www.linkedin.com/in/vaishnavi-k-057252168/" target="_blank" rel="noopener noreferrer" 
                                    style={{ marginRight: 'auto', marginTop: '-20px' }}   >- Vaishnavi Kulkarni</a>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '20px'}}>
                        <Col >
                            <Card body style={{ display: 'flex', alignItems: 'center', fontStyle: 'italic' }}>
                                <CardText>
                                    <span style={{ display: 'flex', alignItems: 'center'}}>
                                        <img 
                                            src={Ritwik} 
                                            alt="Recommender"
                                            style={{ height: 150, marginRight: '20px'}} 
                                        />
                                        Srishti has exhibited exceptional skills in backend technologies such as Java and AWS. During our time working 
                                        together on the same team, Srishti consistently demonstrated a strong understanding of these technologies, 
                                        contributing significantly to multiple projects. Her ability to tackle complex problems and deliver high-quality 
                                        solutions was truly impressive. Srishti's professionalism, teamwork, and dedication make her a valuable asset 
                                        to any organization.
                                    </span>
                                </CardText>
                                <a href="https://www.linkedin.com/in/ritwikmish/" target="_blank" rel="noopener noreferrer" 
                                    style={{ marginLeft: 'auto', marginTop: '-40px' }}   >- Ritwik Mishra</a>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '20px'}}>
                        <Col >
                            <Card body style={{ display: 'flex', alignItems: 'center', fontStyle: 'italic' }}>
                                <CardText>
                                    <span style={{ display: 'flex', alignItems: 'center'}}>
                                        Srishti has been an exceptional collaborator throughout our journey, from our college endeavors to our shared 
                                        experiences in the workplace. Her dedication, problem-solving prowess, and positive attitude have consistently 
                                        shone through, from our victorious hackathons and final year project completion in college to our continued 
                                        collaboration in the workplace. Srishti's contributions have been instrumental in our successes, making her an 
                                        invaluable asset to any team. I highly recommend Srishti for her outstanding professionalism and unwavering 
                                        commitment to excellence.
                                        <img 
                                            src={Param} 
                                            alt="Recommender"
                                            style={{ height: 150, marginLeft: '20px'}} 
                                        />
                                    </span>
                                </CardText>
                                <a href="https://www.linkedin.com/in/signature17/" target="_blank" rel="noopener noreferrer" 
                                    style={{ marginRight: 'auto', marginTop: '-20px' }}   >- Paramvir Singh </a>
                            </Card>
                        </Col>
                    </Row> */}
                </div>
                <br/> <br/>
            </div>
       </div>
    );
}

export default Recommendations