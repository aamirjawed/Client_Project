import React from 'react';
import './contact.css';


const contact = () => {
  return (
    <div id='contact'>
      <div className='heading'><h2>Contact</h2></div>
      <div className='contact-parent'>
        <div id='whatsapp'>
          <h3>WhatsApp</h3>
          <a href='www.whatsapp.com' target='_blank'>Send Message</a>
        </div>
        <div id='instagram'>
          <h3>Instagram</h3>
          <a href='www.instagram.com' target='_blank'>Send Message</a>
        </div>
      </div>
      <div id='footer'>
        <p>© Aamir Jawed</p>
        <p>All rights reserved</p>
      </div>
    </div>
    
  )
}

export default contact