import React from 'react';
import './About.css';
import Footer from '../Footer';

const About = () => {
  return (
    <>
    <div id="about-container">
      <h1 id="about-title">About Us</h1>
      <p id="about-intro">
        Welcome to our blog! We are passionate about sharing insightful articles, 
        tips, and experiences on a variety of topics. Our mission is to create a 
        space where knowledge and creativity come together to inspire and inform.
      </p>
      <h2 id="about-offer-title">What We Offer</h2>
      <ul id="about-offer-list">
        <li className="about-offer-item">Engaging and informative blog posts</li>
        <li className="about-offer-item">Expert opinions and insights</li>
        <li className="about-offer-item">A platform for discussion and knowledge sharing</li>
      </ul>
      <h2 id="about-community-title">Join Our Community</h2>
      <p id="about-community-text">
        We believe in the power of community and collaboration. Feel free to comment, 
        share, and contribute your thoughts to make this blog a thriving place for 
        learning and inspiration.
      </p>
      <h2 id="about-contact-title">Contact Us</h2>
      <p id="about-contact-text">
        Have any questions or suggestions? Reach out to us at <a id="about-contact-link" href="mailto:contact@blogwebapp.com">contact@blogwebapp.com</a>.
      </p>
    </div>
      <Footer></Footer>
    </>
  );
};

export default About;
