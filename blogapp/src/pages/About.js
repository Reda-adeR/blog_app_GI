import React from 'react';
import './About.css';
import { Container, Row, Col } from 'react-bootstrap';

const teamMembers = [
  { name: 'Yasser MOUSTAINE', role: 'Développeur fullstack', image: '/pictures/yasser.png' },
  { name: 'Abderahim FARAHI', role: 'Développeur fullstack', image: '/pictures/abdo.png' },
  { name: 'Sara SALLAM', role: 'Docteur en Energétique', image: '/pictures/sara.png' },
  { name: 'Reda ELMHAMDI', role: 'Software engineer', image: '/pictures/reda1.png' },
  { name: 'Reda CHMOUK', role: 'Software engineer', image: '/pictures/reda2.png' }
];

const About = () => {
  return (
    <Container className='containerhead'>
      <Row>
        <Col>
          <h1 className='header-home'>ABOUT US</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <p id='about-intro'>
            Bienvenue sur notre blog, l'espace où l'innovation rencontre la collaboration ! Que vous soyez étudiant à la
            recherche de l'inspiration parfaite pour votre Projet de Fin d'Études (PFE), ou que vous souhaitiez partager
            vos travaux pour inspirer et aider vos pairs, vous êtes au bon endroit.
          </p>
        </Col>
      </Row>

      <h2 id='about-offer-title'>Ce Que Nous Offrons</h2>
      <ul id='about-offer-list'>
        <li className='about-offer-item'>Une bibliothèque de PFE</li>
        <li className='about-offer-item'>Inspiration pour votre projet</li>
        <li className='about-offer-item'>Partage de connaissances</li>
      </ul>
      <Row>
              <p style={{textAlign:"center"}} className='headerblog'>NOTRE EQUIPE</p>
            </Row>
      <Row>
        {teamMembers.map((member, index) => (
          <Col md={6} key={index} className='defAbt'>
            <Row>
              <Col sm={3}>
                <img src={member.image} alt='profil' className='profile-img' />
              </Col>
              <Col sm={9} className='coltable'>
                <div>
                  <h4 className='headbloghome'>{member.name}</h4>
                  <p className='sousHeadHome1'>{member.role}</p>
                </div>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
      <h2 id='about-community-title'>Rejoignez Notre Communauté</h2>
      <p id='about-community-text'>
        Nous croyons au pouvoir de la communauté et de la collaboration. N'hésitez pas à partager et à contribuer avec
        vos idées pour faire de ce blog un espace dynamique d'apprentissage et d'inspiration.
      </p>

      <h2 id='about-contact-title'>Contact Us</h2>
      <p id='about-contact-text'>
        Vous avez des questions ou des suggestions ? Contactez-nous à :{' '}
        <a id='about-contact-link' href='mailto:contact@blogwebapp.com'>
          contact@blogwebapp.com
        </a>
      </p>

      
    </Container>
  );
};

export default About;
