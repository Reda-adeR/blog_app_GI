import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
    <div id="about-container">
      <h1 id="about-title">About Us</h1>
      <p id="about-intro">
      Bienvenue sur notre blog ! Êtes-vous un étudiant à la recherche 
      d'inspiration pour votre Projet de Fin d'Études (PFE) ? Ou 
      souhaitez-vous partager votre travail pour aider les autres ? 
      Notre plateforme est l'endroit idéal pour les étudiants et chercheurs 
      afin d'échanger des projets, des rapports et des documentations de PFE !
      </p>
      <h2 id="about-offer-title">Ce Que Nous Offrons</h2>
      <ul id="about-offer-list">
        <li className="about-offer-item">Une bibliothèque de PFE</li>
        <li className="about-offer-item">Inspiration pour votre projet</li>
        <li className="about-offer-item">Partage de connaissances</li>
      </ul>
      <h2 id="about-community-title">Rejoignez Notre Communauté</h2>
      <p id="about-community-text">
      Nous croyons au pouvoir de la communauté et de la collaboration. 
      N'hésitez pas à partager et à contribuer avec vos idées pour 
      faire de ce blog un espace dynamique d'apprentissage et d'inspiration.
      </p>
      <h2 id="about-contact-title">Contact Us</h2>
      <p id="about-contact-text">
      Vous avez des questions ou des suggestions ? Contactez-nous à : <a id="about-contact-link" href="mailto:contact@blogwebapp.com">contact@blogwebapp.com</a>.
      </p>
    </div>
    </>
  );
};

export default About;
