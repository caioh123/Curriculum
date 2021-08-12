import {Ul, NavItem, NavLinks} from './RightNav.elements'
import {PropsRightNav} from './types'


export const RightNav = ({open}: PropsRightNav) => {
  return (
    <Ul open={open}>
      <NavItem>
        <NavLinks to="about">About Us</NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks to="discover">Discover</NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks to="services">Services</NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks to="signup">Sign Up</NavLinks>
      </NavItem>

    </Ul>
  )
}