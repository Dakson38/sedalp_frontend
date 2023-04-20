import React from 'react'
import './styles/Enlaces.css'
import logo from '../assets/images/logo.jpg'
import image1 from '../assets/images/image15.png'
import image2 from '../assets/images/image16.png'
import image3 from '../assets/images/image17.png'
import image4 from '../assets/images/image18.png'
import image5 from '../assets/images/image19.png'
import image6 from '../assets/images/image20.png'
import image7 from '../assets/images/image21.png'
import image8 from '../assets/images/image22.png'
import gestion from '../assets/images/gestion.png'

const Enlaces = () => {
  return (
    <div className='componente'>
        <img src={gestion} alt="" className='imgGestionMallku'/>
        <div className='enlacesGobernacion'>
            <a className='enlaceGobernacion' href='#'>
                <img src={logo} alt="" />
            </a>
            <a className='enlaceGobernacion' href='#'>
                <img src={image1} alt="" />
            </a>
            <a className='enlaceGobernacion' href='#'>
                <img src={image2} alt="" />
            </a>
            <a className='enlaceGobernacion' href='#'>
                <img src={image3} alt="" />
            </a>
            <a className='enlaceGobernacion' href='#'>
                <img src={image4} alt="" />
            </a>
            <a className='enlaceGobernacion' href='#'>
                <img src={image5} alt="" />
            </a>
            <a className='enlaceGobernacion' href='#'>
                <img src={image6} alt="" />
            </a>
            <a className='enlaceGobernacion' href='#'>
                <img src={image7} alt="" />
            </a>
            <a className='enlaceGobernacion' href='#'>
                <img src={image8} alt="" />
            </a>
        </div>
    </div>
  )
}

export default Enlaces
