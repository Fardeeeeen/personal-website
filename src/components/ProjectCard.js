<<<<<<< HEAD
import {React, useRef} from "react";
import { Col } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";

export const ProjectCard = ({ title, description, imgUrl, source }) => {

  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target:ref,
  });

  const y = useTransform(scrollYProgress, [0,1], [-200, 200]);

  return (
    <Col sm={6} md={6} className="mb-4" ref = {ref}>
      <motion.div style={{y}}
        className="proj-imgbx"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </motion.div>
      <motion.div className="text-center mt-3" style={{ y }}>
  <button onClick={() => window.location.href = source}><span>Source Code</span></button>
</motion.div>
    </Col>
  );
=======
import {React, useRef} from "react";
import { Col } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";

export const ProjectCard = ({ title, description, imgUrl, source }) => {

  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target:ref,
  });

  const y = useTransform(scrollYProgress, [0,1], [-200, 200]);

  return (
    <Col sm={6} md={6} className="mb-4" ref = {ref}>
      <motion.div style={{y}}
        className="proj-imgbx"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </motion.div>
      <motion.div className="text-center mt-3" style={{ y }}>
  <button onClick={() => window.location.href = source}><span>Source Code</span></button>
</motion.div>
    </Col>
  );
>>>>>>> b29057d7d1190917b8b3dd085194a79efc3bf95c
};