import React from "react";
import Musa from "../images/team-members/Musa-Kaleem.png";
import Talha from "../images/team-members/Talha-Akeel.jpg";
import Ali from "../images/team-members/Ali-Azhar.png";
import Ahmad from "../images/team-members/Ahmad-Azeem.png";
import Sana from "../images/team-members/Sana-Taj.png";
import "./../App.css"; // CSS for styling

const Team = () => {
  const teamMembers = [
    { name: "Musa Kaleem", role: "Marketing Expert", image: Musa },
    { name: "Talha Akeel", role: "Web Developer", image: Talha },
    { name: "Ali Azhar", role: "Video Editor", image: Ali },
    { name: "Ahmad Azeem", role: "Social Media Manager", image: Ahmad },
    { name: "Sana Taj", role: "Wordpress Developer & QA", image: Sana },
  ];

  return (
    <div className="team-container">
      <section className="team-section">
        <h2 className="team-heading">Meet Our Team</h2>
        <div className="team-slider">
          <div className="team-track">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
