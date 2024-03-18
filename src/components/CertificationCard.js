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

export default CertificationCard;