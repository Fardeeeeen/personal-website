import React from "react";

const EducationCard = ({ education }) => {
  return (
    <div className="cards">
      <div className="top">
        <img className="image" src={education.img} alt="" />
        <div className="body">
          <div className="name">{education.school}</div>
          <div className="degree">{education.degree}</div>
          <div className="date">{education.date}</div>
        </div>
      </div>
      <div className="grade"><b>Grade: </b>{education.grade}</div>
      <div className="description">
        <span className="spann">{education.desc}</span>
      </div>
    </div>
  );
};

export { EducationCard };