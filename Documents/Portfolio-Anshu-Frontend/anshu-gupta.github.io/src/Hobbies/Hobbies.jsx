import React from "react";
import "./Hobbies.css"; // External CSS
import TeachingKids from '../images/name-carved.jpg';
import Gym from '../images/name-carved.jpg';
import Yoga from '../images/name-carved.jpg';
import Driving from '../images/name-carved.jpg';
import PoemWriting from '../images/name-carved.jpg';
import { styles } from "../commons/commonStyles";
import NavBar from "../Navbar/NavBar";

const hobbiesList = [
  { id: 1, src: TeachingKids, title: "Teaching Kids", description: "Helping young minds grow through interactive learning." },
  { id: 2, src: Gym, title: "Gym", description: "Staying fit and strong with regular workouts." },
  { id: 3, src: Yoga, title: "Yoga", description: "Bringing balance to life through mindfulness and flexibility." },
  { id: 4, src: Driving, title: "Driving", description: "Enjoying long road trips and city drives." },
  { id: 5, src: PoemWriting, title: "Poem Writing", description: "Expressing emotions through creative poetry." },
];

const Hobbies = () => {
  return (
    <div style={{ ...styles.common, marginTop: '55px' }}>
            <NavBar />
    <div className="hobbies-container">
      <h2 className="hobbies-title">My Hobbies</h2>
      <div className="hobbies-grid">
        {hobbiesList.map((hobby) => (
          <div key={hobby.id} className="hobby-card">
            <img src={hobby.src} alt={hobby.title} className="hobby-img" />
            <div className="hobby-overlay">
              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Hobbies;
