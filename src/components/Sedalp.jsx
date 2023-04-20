import React from 'react'
import "./styles/Sedalp.css"

const Sedalp = () => {
    return (
        <div className='tuSedalp'>
            <div className='servicio'>
                <div className='texto'>
                    <h2>SERVICIO DEPARTAMENTAL DE AUTONOMÍAS DE LA PAZ </h2>
                    <p>SEDALP es una entidad pública que depende del Gobierno Autónomo De La Paz y que tiene como objetivo fortalecer el proceso autonómico y capacidad de gestión institucional de los 87 Gobiernos Autónomos Municipales del Departamento de La Paz.</p>
                </div>
                <div className='imagen'>
                    <img src="/src/assets/images/gobernador.png" alt="gobernador" />
                </div>
            </div>
            <div className='objetivo'>
                <h2>OBJETIVO GENERAL</h2>
                <p>Promover el desarrollo regional desconcentrado a través de la articulación de políticas, planes, estrategias, programas y proyectos concurrentes públicos y privados, así como el ejercicio pleno de las competencias y autonomías de las ETAs mediante el fortalecimiento institucional, para el desarrollo integral del Departamento de La Paz.</p>
            </div>
            <div className='objetivo m-right'>
                <h2>MISIÓN</h2>
                <p>El Gobierno Autónomo Departamental de La Paz, busca ser reconocida como una entidad eficiente, transparente, con respaldo social e inclusiva, que encamina el desarrollo económico-social del departamento en la reconquista del liderazgo económico nacional, a través de una gestión concurrente y concertada con los diferentes niveles de gobierno y actores territoriales, uniendo en un solo equipo de trabajo, con sentido de reto y comprometido por el bienestar de la población en general, sin olvidar el Phoqhata Jakaña.</p>
            </div>
            <div className='objetivo'>
                <h2>VISIÓN</h2>
                <p>El Gobierno Autónomo Departamental de La Paz es una entidad pública, autónoma, integradora, con identidad pluricultural y diversidad territorial, constituida por sus órganos: Legislativo y Ejecutivo, que planifica y ejecuta políticas públicas, planes, programas y proyectos que contribuyen al desarrollo de los diferentes sectores existentes del departamento, en armonía con la Pachamama, a fin de consolidar el bienestar y la protección en la población que habita el departamento de La Paz con equidad de género e inclusión social.</p>
            </div>
        </div>
    )
}

export default Sedalp


