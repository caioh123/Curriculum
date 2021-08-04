import {StyledBurger} from './Burger.elements'
import { useState } from 'react'
import {RightNav} from '../../RightNav/RightNav'


export const Burger = () => {
  const [open, setOpen] =useState(false)
  return (
    <>
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />

    </StyledBurger>
      <RightNav open={open}/>
      </>
  )
}