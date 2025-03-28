import React from 'react';
import './Footer.css';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import { motion } from "framer-motion";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
  const newsItems = [
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
    " Newsletter+++",
  ];
  return (
    <footer id="footer-container">
      <div style={{ overflow: "hidden", width: "100%", background: "#000", color: "#fff", padding: "10px 0",marginBottom:"55px"}}>
    <motion.div
      style={{ display: "flex", whiteSpace: "nowrap" }}
      animate={{ x: ["100%", "-100%"] }}
      transition={{ ease: "linear", duration: 30, repeat: Infinity }}
    >
      {newsItems.map((item, index) => (
        <span key={index} style={{fontFamily:'General Sans' , marginRight: "50px", fontSize: "18px", fontWeight: 500 }}>
          {item}
        </span>
      ))}
    </motion.div>
  </div>
  <Container>
  <Row>
    <Col sm={8}>
    <p className='parafooter'>Design News to your inbox</p>
    </Col>
    <Col sm={4}>
      <Row className='dormfooter'>
      <Col><input type='email' className='inputfooter' placeholder='EMAIL'/></Col>
      <Col><input type='submit' className='btnFoter' value="ENVOYER"/></Col>
      </Row>
    </Col>
  </Row>
  </Container>
  <Container className="mt-4">
    
      <Row className='CONTAINERFOOTER'>
        <Col sm={4} >
        
          <p className="text-item-footer"><a className='aFooter' href="/">Home</a></p>
          <p className="text-item-footer"><a className='aFooter' href="/blog">Blog</a></p>
          <p className="text-item-footer"><a className='aFooter' href="/post">Post</a></p>
          <p className="text-item-footer"><a className='aFooter' href="/about">About</a></p>
          <p className="text-item-footer"><a className='aFooter' href="/contact">Contact</a></p>

        </Col>
        <Col sm={4}>
          <p className="text-item-footer">Design</p>
          <p className="text-item-footer">Podcast</p>
          <p className="text-item-footer">Licensing</p>
        </Col>
        <Col sm={4}>
          <p className="text-item-footer">Architecture</p>
          <p className="text-item-footer">Authors</p>
          <p className="text-item-footer">Changelog</p>
        </Col>
      </Row>
    </Container>
      <div id="footer-bottom">
        <div className='footerdivpara'>
        <p >© Made by 5 Stars - Powered by 5 Stars</p>
        </div>
        <div id="social-icons">

        <FaFacebook size={40} />
        <FaTwitter size={40} />
        <FaInstagram size={40} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

