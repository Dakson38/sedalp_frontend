import React from 'react'
import './styles/Contactos.css'

import facebookIcon from '../assets/icons/facebook.svg'
import twitterIcon from '../assets/icons/twitter.svg'
import instagramIcon from '../assets/icons/instagram.svg'
import tiktokIcon from '../assets/icons/tiktok.svg'
import gestionMallkuImg from '../assets/images/gestionMallku.png'

const enlaceMapa = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d328.4880575372733!2d-68.12341020976402!3d-16.510062908527818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2061a6f40001%3A0x859a7bbd3d2e04eb!2sSEDALP!5e0!3m2!1ses!2sbo!4v1681335230190!5m2!1ses!2sbo'; 

const Contactos = () => {
  return (
    <div className='contactos'>
        <div className='gestion'>
            <img src={gestionMallkuImg} alt="" />
        </div>
      <div className='titulo'>
        <h1>C</h1>
        <h1>O</h1>
        <h1>N</h1>
        <h1>T</h1>
        <h1>A</h1>
        <h1>C</h1>
        <h1>T</h1>
        <h1>O</h1>
        <h1>S</h1>
      </div>
      <div className='informacionSedalp'>
        <div className='informacionContacto'>
            <table>
                <tr>
                    <td>Dirección:</td>
                    <td>Av. 6 de agosto, hotel Isabel Catolica Messanine 3</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>autonomiaslapaz@gmail.com</td>
                </tr>
                <tr>
                    <td>Telefono</td>
                    <td>228012341</td>
                </tr>
                <tr>
                    <td>contact</td>
                    <td>Your Contact for me</td>
                </tr>
            </table>
        </div>
        <div className='redesSociales'>
            <a href="#"><img src={facebookIcon} /></a>
            <a href="#"><img src={twitterIcon} /></a>
            <a href="#"><img src={instagramIcon} /></a>
            <a href="#"><img src={tiktokIcon} /></a>
        </div>
        <div className='ubicacionMapa'>
            <Mapa enlace={enlaceMapa}></Mapa>
        </div>
      </div>
    </div>
  )
}

export default Contactos

const Mapa = ({ enlace }) => {
    return (
        <iframe
        src={enlace}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        ></iframe>
    )
  }
  