import styled from 'styled-components'

export const GradientDirectionsList = styled.li`
list-style-type: none;
`
export const DirectionButton = styled.button`
background-color: #ffffff;
color: ${props => (props.isActive ? '#334155' : '#1e293b')};
font-family: Roboto;
font-size: 12px;
font-weight: 500;
height: 38px;
width: 80px;
border: none;
border-radius: 6px;
margin-right: 10px;
cursor: pointer;
outline: none;
opacity: ${props => (props.isActive ? 1 : 0.5)}; 
`
