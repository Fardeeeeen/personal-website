import React from "react";
import { Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/dbank.png";
import projImg7 from "../assets/img/db1.png";
import projImg8 from "../assets/img/portfolio.png";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import "../App.css";

export const Projects = () => {
  
  const projects = [
    
    {
      title: "NoteBook",
      description: "The Notebook is a full-stack web application inspired by Google keep app, which aims at providing users with a versatile platform to manage their notes and drawings efficiently. It offers functionalities like creating, editing, archiving, and deleting notes, as well as creating, downloading and deleting drawings.",
      imgUrl: projImg4,
      source:"https://github.com/Fardeeeeen/NoteBook",
    },
     {
      title: "Book Library",
      description: "The Book Library is a web application designed to help users manage their book collections effectively. It allows users to view, add, edit, and delete books. Users can add notes, summaries, and ratings for each book, enhancing their reading experience.The application integrates with the Open Library Covers API to fetch book covers and provides a seamless experience for users.",
      imgUrl: projImg3,
      source:"https://github.com/Fardeeeeen/Book-Library",
    },
     {
      title: "My Portfolio",
      description: "It is a React.js-powered portfolio, a showcase of my web development prowess and projects. As you explore this very portfolio, you're witnessing firsthand the skills and dedication poured into its creation. ",
      imgUrl: projImg8,
      source:"https://github.com/Fardeeeeen/NoteBook",
    },
     {
      title: "BlogApp",
      description: "The Blog App is a web application designed to allow users to create, edit, and manage their blog posts. It provides an intuitive interface for bloggers to share their thoughts, experiences, and stories with the world.",
      imgUrl: projImg2,
      source:"https://github.com/Fardeeeeen/Blog-App",
    },
    {
      title: "Lets Mix",
      description: " Let's Mix is a dynamic web application designed to provide users with instant access to a vast collection of cocktail recipes. With a simple and intuitive interface, users can explore a diverse range of cocktail options and discover new favorites with ease. Powered by an external API, Let's Mix brings the joy of mixology to users worldwide.",
      imgUrl: projImg1,
      source:"https://github.com/Fardeeeeen/Lets-Mix",
    },
   
    {
      title: "DbRadar",
      description: "A Web 3.0 website in which i created a crypto Token of my own called Dragonballs and users can acquire them on this website. ",
      imgUrl: projImg7,
      source:"https://github.com/Fardeeeeen/DbRadar",
    },
     {
      title: "DBank",
      description: "A Web 3.0 website in which a user can deposit or transfer crypto web tokens and coins",
      imgUrl: projImg6,
      source:"https://github.com/Fardeeeeen/DBank",
    },
     {
      title: "Simon-Game",
      description: " The Simon Game Challenge is a web application where users can play the classic Simon game online. Simon is an electronic game of short-term memory skill, invented by Ralph H. Baer and Howard J. Morrison. The game creates a series of tones and lights and requires the user to repeat the sequence.",
      imgUrl: projImg5,
      source:"https://github.com/Fardeeeeen/Simon-Game",
    },
  ];


   return (
    <section className="project" id="projects">
      <Row className="display">
          <Col>
            <h2 className="mb-4" >Projects</h2>
            <p className="mb-5">
              Peruse my collection of web development projects, each
              representing a unique set of challenges and solutions. Explore
              the technologies I've adeptly employed and the breadth of my
              experience in crafting innovative web solutions.
            </p>
          </Col>
        </Row>
         <Row className="mb-5">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Row>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
}