import React from 'react'
import './gallery.css';
import Square from "../../assests/square.jpg";

const services = () => {
  return (
    <div id='gallery'>
      <h2 className='heading'>Gallery</h2>
      <div className='image'>
      <div><img className='bangle-img' src={Square} alt='bangle' /></div>
      <div><img className='bangle-img' src={Square} alt='bangle' /></div>
      <div><img className='bangle-img' src={Square} alt='bangle' /></div>
      <div><img className='bangle-img' src={Square} alt='bangle' /></div>
      <div><img className='bangle-img' src={Square} alt='bangle' /></div>
      <div><img className='bangle-img' src={Square} alt='bangle' /></div>
      <div><img className='bangle-img' src={Square} alt='bangle' /></div>
      <div><img className='bangle-img' src={Square} alt='bangle' /></div>
      </div>
    </div>
  )
} 

export default services