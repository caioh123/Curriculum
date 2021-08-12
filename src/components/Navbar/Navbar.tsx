import {NavbarItems, NavbarLogo, MenuIcon, NavBtn, NavBtnLink} from './Navbar.elements'
import { FaReact } from 'react-icons/fa';
import {IconContext} from 'react-icons'
import {Burger} from './MenuItems/Burger/Burger'


export const Navbar = () => {

  return (
    <IconContext.Provider value={{style:{marginLeft: "0.5rem"}}}>
    <NavbarItems>
      <MenuIcon>
        <NavbarLogo to="/">React</NavbarLogo>
        <FaReact size={32}/>
      </MenuIcon>
      <Burger  />
      <NavBtn>

      <NavBtnLink to="/signin">Sign In</NavBtnLink>
      </NavBtn>
    </NavbarItems>
    </IconContext.Provider>
  );
}
