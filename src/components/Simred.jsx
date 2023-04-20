import React from 'react'
import './styles/Simred.css'

import imgAltiplanoNorte from '../assets/images/img_altiplano_norte.jpg'
import imgAltiplanoSur from '../assets/images/img_altiplano_sur.jpg'
import imgVallesNorte from '../assets/images/img_valles_interandinos_norte.jpg'
import imgVallesSur from '../assets/images/img_valles_interandinos_sur.jpg'
import imgAmazonica from '../assets/images/img_amazonica.jpg'
import imgYungas from '../assets/images/img_yungas.jpg'
import imgMetropolitana from '../assets/images/img_metropolitana.jpg'

import imgGestionMallku from "../assets/images/gestionMallku.png"
import Nav from './Nav'

const Simred = () => {
  return (
    <div className='SIMRED'>
        <img src={imgGestionMallku} alt="" className='imgGestionMallku'/>
        <div className='informacionSimred'>
            <h1>Sistema de Información Municipal Regionalizada del Departamento de La Paz</h1>
            <p>El SIMRED es un servicio que ofrece el SEDALP para recopilar y difundir 
                información sobre el desarrollo regional asi como la gestión de la ejecución 
                presupuestaria de los 87 Gobiernos Autónomos Municipales del Departamento de La Paz.
            </p>
        </div>
        <div className='regiones'>
            <div className='region' id='metropolitana'>
                <div className='infoRegion'>
                    <h2>REGIÓN METROPOLITANA</h2>
                    <p>
                    Las regiones del departamento de La Paz están organizadas institucional y geográficamente 
                    en provincias y municipios, que comparten cultura, lenguas, historia, economía y de 
                    forma integral ecosistemas, se constituyen en espacios de planificación y gestión.
                    La Región de los Valles Interandinos Sur limita al Norte con el municipio de la 
                    Asunta, al Sur con el departamento de Oruro, al Este con el departamento de Cochabamba 
                    y al Oeste con los municipios de Calamarca, Ayo Ayo Patacamaya, Sicasica, Mecapaca, 
                    Palca e Irupana.
                    </p>
                    <div className='boton'>
                        <button>Ver más</button>
                    </div>
                </div>
                <img src={imgMetropolitana} alt="" />
            </div>
            <div className='region' id='altiplanoSur'>
                <div className='infoRegion'>
                    <h2>REGION ALTIPLANO SUR   </h2>
                    <p>
                    Las regiones del departamento de La Paz están organizadas institucional y geográficamente 
                    en provincias y municipios, que comparten cultura, lenguas, historia, economía y de 
                    forma integral ecosistemas, se constituyen en espacios de planificación y gestión.
                    La Región de los Valles Interandinos Sur limita al Norte con el municipio de la 
                    Asunta, al Sur con el departamento de Oruro, al Este con el departamento de Cochabamba 
                    y al Oeste con los municipios de Calamarca, Ayo Ayo Patacamaya, Sicasica, Mecapaca, 
                    Palca e Irupana.
                    </p>
                    <div className='boton'>
                        <button>Ver más</button>
                    </div>
                </div>
                <img src={imgAltiplanoSur} alt="" />
            </div>
            <div className='region' id='vallesSur'>
                <div className='infoRegion'>
                    <h2>REGION VALLES INTERANDINOS SUR</h2>
                    <p>
                    Las regiones del departamento de La Paz están organizadas institucional y geográficamente 
                    en provincias y municipios, que comparten cultura, lenguas, historia, economía y de 
                    forma integral ecosistemas, se constituyen en espacios de planificación y gestión.
                    La Región de los Valles Interandinos Sur limita al Norte con el municipio de la 
                    Asunta, al Sur con el departamento de Oruro, al Este con el departamento de Cochabamba 
                    y al Oeste con los municipios de Calamarca, Ayo Ayo Patacamaya, Sicasica, Mecapaca, 
                    Palca e Irupana.
                    </p>
                    <div className='boton'>
                        <button>Ver más</button>
                    </div>
                </div>
                <img src={imgVallesSur} alt="" />
            </div>
            <div className='region' id='altiplanoNorte'>
                <div className='infoRegion'>
                    <h2>REGION ALTIPLANO NORTE</h2>
                    <p>
                    Las regiones del departamento de La Paz están organizadas institucional y geográficamente 
                    en provincias y municipios, que comparten cultura, lenguas, historia, economía y de 
                    forma integral ecosistemas, se constituyen en espacios de planificación y gestión.
                    La Región de los Valles Interandinos Sur limita al Norte con el municipio de la 
                    Asunta, al Sur con el departamento de Oruro, al Este con el departamento de Cochabamba 
                    y al Oeste con los municipios de Calamarca, Ayo Ayo Patacamaya, Sicasica, Mecapaca, 
                    Palca e Irupana.
                    </p>
                    <div className='boton'>
                        <button>Ver más</button>
                    </div>
                </div>
                <img src={imgAltiplanoNorte} alt="" />
            </div>
            <div className='region' id='vallesNorte'>
                <div className='infoRegion'>
                    <h2>REGION VALLES INTERANDINOS NORTE</h2>
                    <p>
                    Las regiones del departamento de La Paz están organizadas institucional y geográficamente 
                    en provincias y municipios, que comparten cultura, lenguas, historia, economía y de 
                    forma integral ecosistemas, se constituyen en espacios de planificación y gestión.
                    La Región de los Valles Interandinos Sur limita al Norte con el municipio de la 
                    Asunta, al Sur con el departamento de Oruro, al Este con el departamento de Cochabamba 
                    y al Oeste con los municipios de Calamarca, Ayo Ayo Patacamaya, Sicasica, Mecapaca, 
                    Palca e Irupana.
                    </p>
                    <div className='boton'>
                        <button>Ver más</button>
                    </div>
                </div>
                <img src={imgVallesNorte} alt="" />
            </div>
            <div className='region' id='yungas'>
                <div className='infoRegion'>
                    <h2>REGION YUNGAS</h2>
                    <p>
                    Las regiones del departamento de La Paz están organizadas institucional y geográficamente 
                    en provincias y municipios, que comparten cultura, lenguas, historia, economía y de 
                    forma integral ecosistemas, se constituyen en espacios de planificación y gestión.
                    La Región de los Valles Interandinos Sur limita al Norte con el municipio de la 
                    Asunta, al Sur con el departamento de Oruro, al Este con el departamento de Cochabamba 
                    y al Oeste con los municipios de Calamarca, Ayo Ayo Patacamaya, Sicasica, Mecapaca, 
                    Palca e Irupana.
                    </p>
                    <div className='boton'>
                        <button>Ver más</button>
                    </div>
                </div>
                <img src={imgYungas} alt="" />
            </div>
            <div className='region' id='amazonica'>
                <div className='infoRegion'>
                    <h2>REGION AMAZÓNICA</h2>
                    <p>
                    Las regiones del departamento de La Paz están organizadas institucional y geográficamente 
                    en provincias y municipios, que comparten cultura, lenguas, historia, economía y de 
                    forma integral ecosistemas, se constituyen en espacios de planificación y gestión.
                    La Región de los Valles Interandinos Sur limita al Norte con el municipio de la 
                    Asunta, al Sur con el departamento de Oruro, al Este con el departamento de Cochabamba 
                    y al Oeste con los municipios de Calamarca, Ayo Ayo Patacamaya, Sicasica, Mecapaca, 
                    Palca e Irupana.
                    </p>
                    <div className='boton'>
                        <button>Ver más</button>
                    </div>
                </div>
                <img src={imgAmazonica} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Simred
