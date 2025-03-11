import React from 'react';
import './StylesStudies.css';

export const Studies = () => {
  return (
    <div className='containerStudies'>
      <h2 className="title">Estudios</h2>
      <ul className="studiesList">
        <li><strong>2021:</strong> Curso en el Politécnico Master Web de 280 horas de inglés.</li>
        <li><strong>2023:</strong> Bachiller Académico.</li>
        <li><strong>2023:</strong> Técnico en programación de software.</li>
        <li><strong>2025:</strong> Tecnólogo en programación de software.</li>
      </ul>
    </div>
  );
};