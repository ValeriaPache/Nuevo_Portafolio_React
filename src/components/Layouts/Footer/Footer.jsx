import React from 'react'
import "./Footer.css"
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="containerFooter">
      <nav>
        <ul className="footer-links">
          <li>
            <a href="https://wa.me/3112349080" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="icon"/> 
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/valeria_262006?igsh=OWx0bzNkOXVyajlz" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon"/>
            </a>
          </li>
          <li>
          <a href="https://mail.google.com/mail/?view=cm&to=vpachecoSanmartin@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="icon"/>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}


