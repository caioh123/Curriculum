import React, {useState} from 'react'
import {NavbarItems, NavbarLogo, MenuIcon, NavLinks} from './Navbar.elements'
import {MenuItems} from './MenuItems'
import { FaReact } from 'react-icons/fa';
import {IconContext} from 'react-icons'


export const Navbar = () => {

  const [showIcon, setShowIcon] = useState(false)

  return (
    <IconContext.Provider value={{style:{marginLeft: "0.5rem"}}}>
    <NavbarItems>
      <NavbarLogo>React</NavbarLogo>
      <FaReact size={32}/>
      <MenuIcon></MenuIcon>
      <ul>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <NavLinks>
            {item.title}
            </NavLinks>
          </li>
        ))}
        
      </ul>
    </NavbarItems>
    </IconContext.Provider>
  );
}
