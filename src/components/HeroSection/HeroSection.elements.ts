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

// add :before styles

export const HeroBg = styled.div`
position: absolute;
top:0;
right: 0;
bottom:0;
left:0;
width: 100%;
height: 100%;
`

export const ImageBg = styled.img`
width: 100%;
height: 100%;
background: no-repeat center url("https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")
`