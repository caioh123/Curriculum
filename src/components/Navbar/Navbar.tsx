import {NavbarItems, NavbarLogo, MenuIcon} from './Navbar.elements'
import { FaReact } from 'react-icons/fa';
import {IconContext} from 'react-icons'
import {Burger} from './MenuItems/Burger/Burger'


export const Navbar = () => {


  return (
    <IconContext.Provider value={{style:{marginLeft: "0.5rem"}}}>
    <NavbarItems>

      <MenuIcon>
        <NavbarLogo>React</NavbarLogo>
        <FaReact size={32}/>
      </MenuIcon>
      <Burger  />
    </NavbarItems>
    </IconContext.Provider>
  );
}
