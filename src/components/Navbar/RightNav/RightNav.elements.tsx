import styled from 'styled-components'
import {PropsRightNav} from './types'
import {Link as LinkS} from 'react-scroll'


export const Ul = styled.ul<PropsRightNav>`
list-style: none;
display: flex;
flex-flow: row nowrap;

li {
  padding: 18px 10px;
}

@media (max-width: 768px) {
  flex-flow: column nowrap;
  background-color: #0D2538;
  position: fixed;
  transform: ${({open}) => open ? "translateX(100%)" : "translateX(0)"};
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;

  li {
    color: #fff;
  }
}
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`