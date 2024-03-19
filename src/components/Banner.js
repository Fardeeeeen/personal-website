import React from "react";
import {useState, useEffect} from "react";
import{ Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from "../assets/img/Me (DBz img).png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
const [loopNum, setLoopNum] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
const [text, setText] = useState('');
const [delta, setDelta] = useState(100);
const period = 2000;

const handleDownloadResume = () => {
  // Open the resume link in a new tab
  window.open('https://drive.google.com/file/d/1xNU5LE3jDCz_CTR9oerTMLiIwiCgwd_E/view?usp=sharing', '_blank');
  // Download the resume
  const anchor = document.createElement('a');
  anchor.href = 'https://drive.google.com/uc?export=download&id=1xNU5LE3jDCz_CTR9oerTMLiIwiCgwd_E';
  anchor.target = '_blank';
  anchor.download = 'Fardeen\'s Resume.pdf';
  anchor.click();
};

useEffect(() => {
    let ticker = setInterval(() => {
        tick();
    }, delta);

    return() => { clearInterval(ticker)};
    }, [text, delta])

const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if(isDeleting) {
        setDelta(prevDelta => prevDelta /2)
    }

    if (!isDeleting && updatedText === fullText){
        setIsDeleting(true);
        setDelta(period);
    }else if (isDeleting && updatedText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(100);
        }
    }

    return (
  <section className="banner" id="home">
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div id="ban" className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Hi, I'm Fardeen `}</h1>
                 <h2 className="txt-rotate" dataPeriod="500" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><h2>{text}</h2></h2>
                <div className="d-block d-md-none">
                  <img src={headerImg} alt="Header Img" />
                </div>
                <p>Hey there! I'm Fardeen Zubair, a Fullstack Web Developer from India, passionate about crafting sleek web applications. I'm all about creativity and problem-solving, fluent in HTML, CSS , JavaScript -React, Express, Node.js and PostgreSQL.  But hey, life isn't just about code, right? I'm all about soaking in new cultures, exploring hidden gems, and meeting fascinating people along the way. Fitness is key for me, and sports keep me energized. Oh, and I'm a bit of a tea connoisseur, finding peace in a good cuppa. Always up for learning and tackling new challenges with the coding community. Let's build something awesome together!</p>
                <button className="bttn" onClick={handleDownloadResume}>My Resume <ArrowRightCircle size={25} /></button>
              </div>
            )}
          </TrackVisibility>
        </Col>
        <Col xs={12} md={6} xl={5} className="d-none d-md-block">
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""} id="head">
                <img src={headerImg} alt="Header Img" />
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
);
}