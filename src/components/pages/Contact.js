import { useState, useRef } from 'react';
import Navbar from "../Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ContactPage.module.css';
import Button from '@mui/material/Button';
import React from 'react';
import"./ContactPage.module.css";


const Contact = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

   
    setNom('');
    setEmail('');
    setMessage('');
    toast('Merci ! Nous reviendrons vite vers vous :)', {
      theme: 'light',
      type: 'success',
      position: 'bottom-center',
    });
  };

  return (
    <div className={styles.background}>
      <Navbar />
      <div className={styles.apropos}>
        <p>A propos de Pharma DAL: Santé + </p>
      </div>
      <div className={styles.detail}>
        <p style={{ padding: '10px' }}>
        Pharma Dal est une entreprise pharmaceutique spécialisée dans la
            distribution en gros et la vente des médicaments (princeps et
            génériques), des dispositifs médicaux et la parapharmacie
            (cosmétiques, hygiène et soins) de toutes les spécialités.
        </p>
       
      </div>
      <div className={styles.lignedesktop}>
        <hr className="ligne" />
      </div>
      <div className={styles.contacte}>
        <p>Contacte-nous</p>
      </div>
      <div className={styles.container}>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <label htmlFor="email">
            Nom
            <input
              type="nom"
              id="nom"
              name="nom"
              className={styles.field}
              required
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="ex: Adnan Mahamat"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              className={styles.field}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ex: adnanmht@gmail.com"
            />
          </label>
          <div htmlFor="message">
            Message
            <textarea
              rows="8"
              cols="90"
              id="message"
              name="message"
              className={styles.field}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Votre texte ici..."
            />
          </div>

          <Button
            type="submit"
            variant="outlined"
            sx={{
              marginTop: '10px',
              borderColor: '#FFCE31',
              backgroundColor: '#FFCE31',
              color: 'black',
              fontWeight: 'bold',

              borderRadius: '10px',
              '&:hover': {
                backgroundColor: 'black',
                borderColor: 'black',
                transition: '0.7s',
                color: '#c4c4c4',
              },
            }}
          >
            Envoyer
          </Button>
        </form>

        <ToastContainer />
      </div>

      <div className={styles.lignemobile}>
        <hr className="ligne" />
      </div>
    </div>
  );
}
export default Contact;