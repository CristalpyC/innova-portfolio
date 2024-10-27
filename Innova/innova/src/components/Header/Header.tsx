import React from 'react';
import './header-style.css'
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
    const sections = ['Inicio', 'Nosotros', 'Servicios', 'Contacto'];
  return (
    <nav id='menu'>
        <img src="logo.png" alt="logo" />
        <ul>
            {sections && sections.map((items, index) => (
                <li>{items}</li>
            ))}
        </ul>
        <div className='burger-icon'><MenuIcon /></div>
    </nav>
  )
}
