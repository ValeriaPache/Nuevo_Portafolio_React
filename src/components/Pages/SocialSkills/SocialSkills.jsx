import React from 'react';
import './StylesSocialSkills.css';

export const SocialSkills = () => {
  return (
    <div className='containerSocialSkills'>
      <h2 className="title">Habilidades Sociales</h2>
      <ul className="skillsList">
        <li><strong>Trabajo en equipo:</strong> Me gusta colaborar con otros desarrolladores y diseñadores del equipo.</li>
        <li><strong>Gestión de tiempos:</strong> Priorizo tareas y cumplo con los plazos de entrega.</li>
        <li><strong>Creatividad:</strong> Diseño soluciones innovadoras para la experiencia del usuario.</li>
        <li><strong>Adaptabilidad:</strong> Aprendo y me ajusto rápidamente a nuevas tecnologías y metodologías.</li>
        <li><strong>Paciencia:</strong> Mantengo la calma ante problemas complejos y trabajo con perseverancia hasta resolverlos.</li>
      </ul>
    </div>
  );
};

export default SocialSkills;
