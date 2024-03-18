<<<<<<< HEAD
import React from "react";

const CertificationCard = ({ certification }) => {
  return (
    <div className="cards certification-card">
        <div className="body">
          <div className="name">{certification.courseName}</div>
          <div className="affiliation">{certification.affiliation}</div>
          <div className="date">{certification.date}</div>
          <img src={certification.img} alt="" />
        </div>
      <div className="link">
        <a href={certification.certificateLink} target="_blank" rel="noopener noreferrer">View Certificate</a>
      </div>
    </div>
  );
};

=======
import React from "react";

const CertificationCard = ({ certification }) => {
  return (
    <div className="cards certification-card">
        <div className="body">
          <div className="name">{certification.courseName}</div>
          <div className="affiliation">{certification.affiliation}</div>
          <div className="date">{certification.date}</div>
          <img src={certification.img} alt="" />
        </div>
      <div className="link">
        <a href={certification.certificateLink} target="_blank" rel="noopener noreferrer">View Certificate</a>
      </div>
    </div>
  );
};

>>>>>>> b29057d7d1190917b8b3dd085194a79efc3bf95c
export default CertificationCard;