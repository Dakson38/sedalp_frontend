import React, { useState } from 'react'
import laPaz from "../assets/images/laPaz.png"
import Sedalp from "../assets/images/sedalp.png"
import "../components/styles/Nav.css"

const Nav = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <nav className='navbar'>
            <div className='logos'>
                <img src={laPaz} alt="logo de la paz" className='LogolaPaz' />
                <img src={Sedalp} alt="logo sedalp" className='LogoSedalp' />
            </div>
            <div className='paginas'>
                <div className={selectedOption === 'Inicio' ? 'selected' : ''} onClick={() => setSelectedOption('Inicio')}>
                    <a href="#" className="enlace">Inicio</a>
                </div>
                <div className={selectedOption === 'Tu SEDALP+' ? 'selected' : ''} onClick={() => setSelectedOption('Tu SEDALP+')}>
                    <a href="/sedalp" className="enlace">Tu SEDALP+</a>
                </div>
                <div className={selectedOption === 'SIMRED' ? 'selected' : ''} onClick={() => setSelectedOption('SIMRED')}>
                    <a href="/simred" className="enlace">SIMRED</a>
                </div>
                <div className={selectedOption === 'Normativa' ? 'selected' : ''} onClick={() => setSelectedOption('Normativa')}>
                    <a href="#" className="enlace">Normativa</a>
                </div>
                <div className={selectedOption === 'Enlaces' ? 'selected' : ''} onClick={() => setSelectedOption('Enlaces')}>
                    <a href="/enlaces" className="enlace">Enlaces</a>
                </div>
                <div className={selectedOption === 'Contactos' ? 'selected' : ''} onClick={() => setSelectedOption('Contactos')}>
                    <a href="/contactos" className="enlace">Contactos</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav
