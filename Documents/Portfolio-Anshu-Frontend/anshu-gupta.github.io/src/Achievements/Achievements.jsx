import React from "react";
import "./Achievements.css"; // External CSS
import NavBar from "../Navbar/NavBar";
import { styles } from "../commons/commonStyles";
import GoldMedallist from '../images/Gold-Medallist.jpg'
import AcademicTopper from '../images/Academic-Topper.jpeg'
import BestStudent from '../images/Best-Student-award.png'
import GirlTopper from '../images/Girl-Topper.jpeg';
import DBAward from '../images/DB_Award_2024.jpeg';
import GuestSpeaker from '../images/Guest-speaker.jpeg'
import UniversityTopper from '../images/university-topper.jpeg'
import NameCarved from '../images/name-carved.jpg';
import AllIndiaTopperIP from '../images/All-India-Topper-IP.png';

const Achievements = () => {
  const achievements = [
    { id: 1, src: GoldMedallist, title: "Gold Medalist of 2018-2022 Computer Science Batch" },
    { id: 2, src: AcademicTopper, title: "Computer Science Department Topper" },
    { id: 3, src: BestStudent, title: "Best Student of the Department" },
    { id: 4, src: GirlTopper, title: "Topper among girls of all branches" },
    { id: 5, src: DBAward, title: "Deutsche Bank - Innovator of the Quarter Award 2024" },
    { id: 6, src: UniversityTopper, title: "University Rank Holder among 40k students" },
    { id: 7, src: NameCarved, title: "Highest % in the CS department since the college’s establishment 25 years ago" },
    { id: 8, src: AllIndiaTopperIP, title: "All India Rank 1 in Computer Science : 12th Grade" },
    { id: 9, src: GuestSpeaker, title: "Invited as Guest speaker @VIT, Pune" },
  ];

  return (
    <div style={{ ...styles.common, marginTop: '55px' }}>
            <NavBar />
    <div className="achievements-container">
      <h2 className="achievements-title">My Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="achievement-card">
            <img src={achievement.src} alt={achievement.title} className="achievement-img" />
            <div className="achievement-overlay">
              <h3>{achievement.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Achievements;
