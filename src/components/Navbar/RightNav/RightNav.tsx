import {Ul} from './RightNav.elements'
import {PropsRightNav} from './types'


export const RightNav = ({open}: PropsRightNav) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </Ul>
  )
}