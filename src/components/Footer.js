import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col>
           <p>Copyright 2024. All Rights Reserved</p>
          </Col>
          <Col>
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/fardeen-zubair"><img src={navIcon1} alt="" /></a>
            <a href="https://www.facebook.com/fardeen.zubair.5"><img src={navIcon2} alt="" /></a>
            <a href="https://www.instagram.com/fardeeen_z/"><img src={navIcon3} alt="" /></a>
            <a href="https://github.com/Fardeeeeen"><img src={navIcon4} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}