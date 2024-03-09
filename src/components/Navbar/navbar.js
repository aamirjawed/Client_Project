import React from 'react'
import './navbar.css'
import { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi';
import OutSideClickHandler from 'react-outside-click-handler';

const Navbar = () => {

  const[menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles= (menuOpened) =>{
    if(document.documentElement.clientWidth <= 800){
      return {right: !menuOpened && "-100%"}
    }
  }

  return (
    <div>
      <nav>
        <a href='#' className='logo'>LOGO</a>
        <OutSideClickHandler  onOutsideClick={()=>setMenuOpened(false)}>
        <div>
          <ul id='navbar' className='menu' style={getMenuStyles(menuOpened)}>
            <li><a href='#home' id='#home'>Home</a></li>
            <li><a href='#about' id='#about'>About</a></li>
            <li><a href='#gallery' id='#gallery'>Gallery</a></li>
            <li><a href='#contact' id='#contact'>Contact Us</a></li>
          </ul>  
        </div>
        </OutSideClickHandler>
        <div className='menu-icon' onClick = {() => setMenuOpened((prev)  => !prev)}>
          <BiMenuAltRight size={30}/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar