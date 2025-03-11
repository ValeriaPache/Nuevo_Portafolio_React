import React from 'react';
import './StylesHome.css';
import logo from '../../../assets/vale.jpg';

export const Home = () => {
  return (
    <div className='containerHome'>
      <h2 className="title">Inicio</h2>
      <div className="content">
        <div className="textContainer">
          <p>
            Hola, soy <strong>Valeria Pacheco</strong>, una desarrolladora frontend apasionada por 
            crear experiencias digitales atractivas, fáciles de usar y funcionales. Me encanta 
            mejorar la interacción entre usuarios y tecnología, asegurando que todo fluya 
            de manera intuitiva. Siempre estoy explorando nuevas formas de mejorar mis 
            habilidades y aprender cosas nuevas en el mundo del desarrollo.
          </p>
        </div>
        <div className="imageContainer">
          <img src={logo} alt="Valeria Pacheco" className="profileImage" />
        </div>
      </div>
    </div>
  );
};