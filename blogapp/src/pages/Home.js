import React from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import "../assets/styles/Home/home.css"
import { motion } from "framer-motion";
const Home = () => {
  const newsItems = [
    "Breaking News: React 19 is coming soon!",
    "Tech Update: AI is evolving faster than ever.",
    "Sports: The Champions League final is approaching!",
    "Weather: Expect sunny skies this weekend.",
  ];
  return (
    <>
    <Container>
      <Row>
        <Col>
          <h1 className='header-home'>Home</h1>
        </Col>
      </Row>
      
    </Container>
    <div style={{ overflow: "hidden", width: "100%", background: "#000", color: "#fff", padding: "10px 0",marginBottom:"55px"}}>
    <motion.div
      style={{ display: "flex", whiteSpace: "nowrap" }}
      animate={{ x: ["100%", "-100%"] }}
      transition={{ ease: "linear", duration: 60, repeat: Infinity }}
    >
      {newsItems.map((item, index) => (
        <span key={index} style={{fontFamily:'General Sans' , marginRight: "50px", fontSize: "18px", fontWeight: 500 }}>
          {item}
        </span>
      ))}
    </motion.div>
  </div>
  <Row>
    <Col md={6}>
      <p className='pHeadHome'>
      Don’t close your eyes
      </p>
    </Col>
    <Col md={6}>
      <p className='pHeadHome2'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
      </p>
      <Row>
        <Col>
          <p className='sousHeadHome'><strong>Text</strong> Jakob Gronberg</p>
        </Col>
        <Col>
          <p className='sousHeadHome'><strong>Date</strong> 16. March 2022</p>
        </Col>
        <Col>
          <p className='sousHeadHome'><strong>Duration</strong> 1 Min</p>
        </Col>
        
      </Row>
    </Col>
  </Row>
  </>
  )
}

export default Home