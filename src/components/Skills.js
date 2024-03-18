import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import react from "../assets/img/React.svg";
import javascript from "../assets/img/javascript.svg";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import jquery from "../assets/img/jquery.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import tailwind from "../assets/img/tailwind.svg";
import nodejs from "../assets/img/nodejs.svg";
import express from "../assets/img/express.svg";
import postgres from "../assets/img/postgre.svg";
import motoko from "../assets/img/motoko.png";
import git from "../assets/img/git.svg";
import github from "../assets/img/github.svg";
import postman from "../assets/img/postman.svg";
import aws from "../assets/img/aws.svg";
import docker from "../assets/img/docker.svg";
import ps from "../assets/img/ps.svg";
import illustrator from "../assets/img/illustrator.svg";
import figma from "../assets/img/figma.svg";
import icp from "../assets/img/ICP.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
  superLargeDesktop: {

    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


    return (
        <section className="skill" id="skills">
            <Container>
              
                <Row>
                    <Col>
                    <div className="skillz">
                        <h2>Skills</h2>
                        <p>So here are some skills that I have mastered over the years</p>
                        </div>
                        <div className="skill-bx">
                            <h3>Frontend</h3>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                               <div className="item">
                                    <img src={react} alt="React.js" />
                                    <h5>React.js</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="Javascript" />
                                    <h5>Javascript</h5>
                                </div>
                                 <div className="item">
                                    <img src={jquery} alt="jQuery" />
                                    <h5>jQuery</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="HTML 5" />
                                    <h5>HTML 5</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="CSS" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={bootstrap} alt="bootstrap" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={tailwind} alt="tailwind" />
                                    <h5>Tailwindcss</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                    <Col>
                        <div className="skill-bx">
                            <h3>Backend</h3>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                 <div className="item">
                                    <img src={nodejs} alt="nodejs" />
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                    <img src={express} alt="express" style={{borderRadius: '20px'}} />
                                    <h5>Express.js</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="Javascript" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={postgres} alt="postgres" />
                                    <h5>PostgreSQL</h5>
                                </div>
                                <div className="item">
                                    <img src={motoko} alt="motoko" style={{ height: '95px', width: '105px', marginTop: '10px' }}/>
                                    <h5>Motoko</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                    <Col>
                        <div className="skill-bx">
                            <h3> Other</h3>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                 <div className="item">
                                    <img src={git} alt="git" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={postman} alt="Postman" />
                                    <h5>Postman</h5>
                                </div>
                                <div className="item">
                                    <img src={aws} alt="aws" style={{borderRadius: '15px'}}/>
                                    <h5>aws</h5>
                                </div>
                                <div className="item">
                                    <img src={docker} alt="docker" />
                                    <h5>docker</h5>
                                </div>
                                <div className="item">
                                   <img src={figma} alt="figma" style={{borderRadius: '15px'}} />
                                    <h5>Figma</h5>
                                </div>
                                <div className="item">
                                   <img src={ps} alt="ps" />
                                    <h5>Adobe Photoshop</h5>
                                </div>
                                <div className="item">
                                   <img src={illustrator} alt="illustrator" />
                                    <h5>Adobe Illustrator</h5>
                                </div>
                                <div className="item">
                                   <img src={github} alt="github" style={{borderRadius: '30px'}} />
                                    <h5>Github</h5>
                                </div>
                                <div className="item">
                                    <img src={icp} alt="icp" style={{ height: '95px', width: '105px', marginTop: '10px', borderRadius: '20px' }}/>
                                    <h5>ICP</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="background" />
        </section>
    );
  };
