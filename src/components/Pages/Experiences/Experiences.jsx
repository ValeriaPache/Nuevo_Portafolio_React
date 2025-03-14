import React from 'react';
import './StylesExperience.css';
import logo from "../../../assets/smart-protect-3.jpg";
import logo1 from "../../../assets/maquillaje.png"

export const Experiences = () => {
  return (
    <div className='containerExperiences'>
      <h2>Experiencia</h2>
      <h3>GitHub</h3>
      
      <div className="projectsContainer">
        <div className="projectCard">
          <img src={logo} alt="ATLAS" className="projectImage" />
          <h4>ATLAS</h4>
          <p>Proyecto del SENA sobre la estructura de una página web.</p>
          <a href="https://proyecto-atlas.vercel.app/" target="_blank" rel="noopener noreferrer">Ir a proyecto</a>
        </div>

        <div className="projectCard">
          <img src={logo1} alt="Make Up Vale" className="projectImage" />
          <h4>Make Up Vale</h4>
          <p>Proyecto del SENA sobre una tienda en línea.</p>
          <a href="https://make-up-vale-nzr5wf5kr-valeriapaches-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Ir a proyecto</a>
        </div>
      </div>
    </div>
  );
};