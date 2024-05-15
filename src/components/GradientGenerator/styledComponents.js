import styled from 'styled-components'

export const AppContainer = styled.div`
min-height: 100vh;
background-image: linear-gradient(${props => props.linearGradient});
display: flex;
justify-content: center;

`

export const ResponsiveContainer = styled.div`
width: 60%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const GradientGeneratorHeader = styled.h1`
color: #ffffff;
font-family: Roboto;
font-size: 20px;
font-weight: bold;
`
export const GradientDirectionsHeader = styled.p`
color: #ededed;
font-family: Roboto;
font-size: 16px;
font-weight: 500;
`
export const GradientDirectionsLists = styled.ul`
display: flex;
justify-content: center;
list-style-type: none;
padding-left: 0px;
`
export const ColourInputContainer = styled.div`
display: flex;

justify-content: space-between;
align-items: center;
width: 100%
border: 2px solid red;
`

export const ColourTextAndInput = styled.div`
display: flex;
flex-direction: column;
align-items: center;

margin-right: 20px;
margin-left: 20px;
`

export const ColourValue = styled.p`
color: #ededed;
font-family: Roboto;
font-size: 14px;
font-weight: 500;
`

export const ColourInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const CustomButton = styled.button`
height: 38px;
width: 90px;
border: none;
border-radius: 4px;
background-color: #00c9b7;
color: #1e293b;
font-family: Roboto;
font-size: 12px;
font-weight: 500;
margin-top: 30px;
cursor: pointer;
`
