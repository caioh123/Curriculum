import {StyledBurger} from './Burger.elements'
import { useState } from 'react'
import {RightNav} from '../../RightNav/RightNav'


export const Burger = () => {
  const [open, setOpen] =useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <>
    <StyledBurger open={open} onClick={() => toggle()}>
      <div />
      <div />
      <div />

    </StyledBurger>
      <RightNav onClick={toggle} open={open}/>
      </>
  )
}