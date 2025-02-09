import React from "react";
import NavBar from "../Navbar/NavBar";
import Coffee from '../images/Coffee.gif';
import GetToKnowMe from '../images/GetToKnowMe.png'
import { styles } from "../commons/commonStyles";

const AboutMe = () => {
    return (
        <div style={{...styles.common, alignItems: 'center'}}>
            <NavBar />
            <div style={{fontFamily: 'Roboto', alignItems: 'center'}}>
                <div className="container" style={{background: '#fff', color: '#000', textAlign: 'justify'}}>
                    <h2 style={{textAlign: 'center'}}>Get to Know Me {' '}<img src={GetToKnowMe} alt="Get To Know Me" 
                                style={{marginBottom: '15px', height: '40px'}} /></h2>
                    <div style={{fontSize: '18px', marginTop: '15px'}}>
                        
                        <p>If there's one thing that defines me, it's my passion for technology and innovation. Ever since my early academic days, I've been deeply involved in software development, problem-solving, and optimizing digital experiences. Whether it's leading projects at Deutsche Bank, contributing as a Software Developer Intern at Amazon, or building scalable systems at Microsoft, I’ve always thrived in fast-paced, intellectually stimulating environments. Coding isn’t just a profession for me—it's a way to push boundaries, simplify complexity, and create meaningful impact.
                        </p>

                        <p>Beyond the world of tech, I have a creative and active side that keeps me balanced. I love teaching kids, sharing knowledge, and inspiring young minds to embrace learning with curiosity. Fitness is another integral part of my life—whether it's hitting the gym, practicing yoga, or enjoying the open road through driving, I find energy and focus in staying active. Writing, especially poetry, gives me an outlet to express thoughts, emotions, and stories that words alone sometimes can't capture. These passions fuel my creativity and add dimension to my problem-solving approach in tech.</p>

<p>At heart, I am a lifelong learner, always exploring new skills, experimenting with ideas, and taking on challenges that push me outside my comfort zone. Whether it's winning university rankings, receiving the Innovator of the Quarter Award, or volunteering as an educator for underprivileged children, I believe in making an impact—big or small. My journey is a blend of technology, creativity, and leadership, and I’m always excited about what’s next.</p>
                        
                        <p>Feel free to drop me a note on  {' '}
                            <a href="https://www.linkedin.com/in/anshu-gupta-471431190/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, 
                            and let's arrange a coffee chat! {' '}
                            <img src={Coffee} alt="coffee GIF" 
                                style={{marginBottom: '15px'}} />
                            </p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;