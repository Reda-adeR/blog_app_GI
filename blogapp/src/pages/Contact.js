// pages/Contact.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  // State for form inputs
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Veuillez entrer une adresse email valide.');
      return;
    }
  
    console.log('Contact Form Data:', formData);
    alert('Message envoyé avec succès !');
    setFormData({ prenom: '', nom: '', email: '', message: '' });
    navigate('/');
  };

  return (
    <div className="contact-page">
      <div className="title-container">
        <h1 className="page-title">Contactez-nous</h1>
        <div className="title-underline"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="prenom">Prénom:</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
            placeholder="Entrez votre prénom"
          />
        </div>

        <div className="form-group">
          <label htmlFor="nom">Nom:</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            placeholder="Entrez votre nom"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Entrez votre email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Écrivez votre message ici"
            rows="5"
          />
        </div>

        <button type="submit" className="submit-button">
          Valider
        </button>
      </form>

      <style jsx>{`
        .contact-page {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        .title-container {
          position: relative;
          margin-bottom: 40px;
        }

        .page-title {
          font-size: 4rem; /* Match the large headline style from Home */
          font-weight: bold;
          line-height: 1;
          margin-bottom: 10px;
        }

        .title-underline {
          width: 100%;
          height: 8px; /* Thick black line like on Home */
          background-color: #000;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        label {
          font-size: 1.5rem; /* Larger labels for consistency */
          font-weight: bold;
          margin-bottom: 5px;
        }

        input,
        textarea {
          width: 100%;
          padding: 10px;
          font-size: 1.2rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-sizing: border-box;
          color: #333;
        }

        textarea {
          resize: vertical;
        }

        .submit-button {
          background-color: #000; /* Black button to match the aesthetic */
          color: white;
          padding: 12px 30px;
          border: none;
          border-radius: 4px;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          align-self: center;
          transition: background-color 0.2s;
        }

        .submit-button:hover {
          background-color: #333;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2.5rem;
          }

          label {
            font-size: 1.2rem;
          }

          input,
          textarea {
            font-size: 1rem;
          }

          .submit-button {
            font-size: 1rem;
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;