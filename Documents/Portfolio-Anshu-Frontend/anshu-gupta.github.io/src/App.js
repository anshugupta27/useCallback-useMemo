import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import Home from './Home/Home';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./particlesConfig";
import WorkExperience from './WorkExperiencee/WorkExperience';
import Recommendations from './AboutMe/Recommendations';
import Timeline from './timeline/Timeline';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Achievements from './Achievements/Achievements';
import Hobbies from './Hobbies/Hobbies';

function App() {
  const particlesInit = (engine) => {
    loadFull(engine);
  };

  return (
    <Router>
      <div style={{position: 'relative'}}>
        <Particles init={particlesInit} options={particlesOptions} />
        <div style={{position: 'relative', color: 'white'}}>
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/aboutMe" Component={AboutMe} />
            {/* <Route path="/workExperience" Component={WorkExperience} /> */}
            <Route path="/recommendations" Component={Recommendations} />
            <Route path="/timeline" Component={Timeline} />
            <Route path="/skills" Component={Skills} />
            <Route path="/projects" Component={Projects} />
            <Route path="/achievements" Component={Achievements} />
            <Route path="/work-experience" Component={WorkExperience}/>
            <Route path="/hobbies" Component={Hobbies}/>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
