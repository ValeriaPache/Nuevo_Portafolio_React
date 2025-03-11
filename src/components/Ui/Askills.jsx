import React from 'react'

export const Askills = ({ name: Icon, title }) => {
  return (
    <li className="icon">
    {Icon && <Icon />} {/* Renderiza el icono correctamente */}
    {title}
  </li>
  )
}