import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const NavbarItems = styled.nav`
  background: linear-gradient(90deg, rgb(110,94,254) 0%, rgba(73,63,252,1) 100%);
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;
`

export const NavbarLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  margin-left: 20px;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`

export const MenuIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
  display: none;
}
`

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: #010606;
}
`