import styled from 'styled-components'

export const HeroContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 800px;
background: #0c0c0c;
outline: none;
`

export const ImageBg = styled.div`
  width: 100%;
  height: 100%;

  background: no-repeat center url("https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  /* background-size: 100%; */ // Use it if you want image to be 100%
`