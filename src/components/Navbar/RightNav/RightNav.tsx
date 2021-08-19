import {Ul, NavItem, NavLinks} from './RightNav.elements'
import {PropsRightNav} from './types'


export const RightNav = ({open, onClick}: PropsRightNav) => {
  return (
    <Ul onClick={onClick} open={open}>
      <NavItem>
        <NavLinks onClick={onClick} to="about">About Us</NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks onClick={onClick} to="discover">Discover</NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks onClick={onClick} to="services">Services</NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks onClick={onClick} to="signup">Sign Up</NavLinks>
      </NavItem>

    </Ul>
  )
}