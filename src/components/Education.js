import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import mmhss from "../assets/img/mmhss.jpg";
import rps from '../assets/img/RaniPublicSchool.jpg';
import jain from '../assets/img/jainUniversity.png';
import WebDev from '../assets/img/My web development certificate.jpg';
import { EducationCard } from './EducationCard.js';
import CertificationCard from './CertificationCard.js';
export const Education = () => {

 const education = [
  {
    id: 0,
    img: jain,
    school: "Jain University - Faculty of Engineering and Technology, Bangalore",
    date: "August 2019 - July 2023",
    grade: "7.40 CGPA",
    desc: "I recently Graduated with a Bachelor's degree in Computer Science and Engineering. I have completed 4 semesters and have a CGPA of 7.40. I have taken courses in Mobile Application Development, Cloud Technology and Computing, Web Development, Object-Oriented Programming, Database Management Systems, Operating Systems, and Data Science, among others.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering specializing in Cloud Technology and Mobile Application Development.",
  },
  {
    id: 1,
    img: mmhss,
    school: "M.M.H.S.S School, Thalassery",
    date: "July 2016 - March 2018",
    grade: "80%",
    desc: "I completed my class 12 high school education at M.M.H.S.S School, Thalassery-Kannur, where I studied Science.",
    degree: "DHSE Board(XII) - Science",
  },
  {
    id: 2,
    img: rps,
    school: "Rani Public School, Vadakara",
    date: "June 2015 - March 2016",
    grade: "9.4 CGPA",
    desc: "I completed my class 10 education at Rani Public School, Vadakara-Kozhikode.",
    degree: "CBSE(X)",
  },
];

 const certifications = [
    {
      id: 0,
      img: WebDev,
      courseName: "The Complete 2024 Web Development Bootcamp - Dr.Angela Yu",
      affiliation: "Udemy",
      date: "February 2024",
      certificateLink: "https://www.udemy.com/certificate/UC-4c8afc05-b42d-4f11-b89c-bbe89e72bcb1"
    },
  ];


return (
    <div id="education">
      <div className="eduContainer">
        <div className="wrapper">
        <h2 className="title">Education</h2>
        <p className="desc">My education has been instrumental in shaping my journey of personal and professional growth. It has equipped me with essential knowledge and skills, laying a strong foundation for my career pursuits. My educational details are as follows.</p>
        <div className="timeline-section">
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem key={edu.id}>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <EducationCard education={edu}/>
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== education.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

         <div id="certification">
        <h2 className="title">Certifications</h2>
        <div className="certification-section">
          {certifications.map((certification, index) => (
            <CertificationCard key={certification.id} certification={certification} />
          ))}
        </div>
      </div>
    </div>
      </div>
      </div>

    
    
  );
};