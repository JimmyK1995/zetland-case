// Styled
'use client'
import styled from "styled-components";

interface styleProps {
    $mt?: number
    backgroundColor?: string | number,
    $gap?: number,
    $justify?: string,
    $absolute?: boolean,
    $noMaxWidth?: boolean
}

export const Container = styled.div<styleProps>`
margin: 0 30px; 
position: relative;
@media (min-width: 992px) {
    margin: 0 75px;
}
@media (min-width: 1600px) {
    margin: 0 150px; 
}
@media (min-width: 1920px) {
    ${props => !props.$noMaxWidth && `
max-width: 1620px;
margin: 0 auto !important;
    `}
}
`

export const PrimaryButton = styled.div<styleProps>`
padding: 12px 24px; 
background-color: ${props => props.backgroundColor ? props.backgroundColor : '#40CB76'}; 
color: white; 
font-family: 'Poppins', sans-serif;
width: fit-content; 
font-size: 14px; 
border-radius: 5px; 
cursor: pointer; 
border: 2px solid transparent;
transition: .5s ease;
margin-top: ${props => props.$mt ? `${props.$mt}px` : null};
outline: none; 
&:hover {
    background-color: transparent; 
    border: 2px solid #40CB76;
    transition: .5s ease;
}
`

export const TransparentButton = styled.div<styleProps>`
padding: 14px 24px; 
background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'}; 
color: white; 
font-family: 'Poppins', sans-serif;
width: fit-content; 
font-size: 14px; 
border-radius: 5px; 
cursor: pointer; 
position: relative; 
&::after {
        content: '';
        position: absolute;
        height: 1px; 
        background-color: white; 
        width: 0;
        left: 24px; 
        bottom: 0;
        transition: .5s ease;
    }
&:hover {
    &::after {
        width: calc(100% - 48px);
        transition: .5s ease;
    }
}
`

export const Flex = styled.div<styleProps>`
display: flex; 
margin-top: ${props => props.$mt ? `${props.$mt}px` : null}; 
gap: ${props => props.$gap ? `${props.$gap}px` : null};
justify-content: ${props => props.$justify ? props.$justify : null}; 
`

export const DatePublished = styled.div<styleProps>`
height: 28px; 
width: 100px; 
background-color: #FF3508;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
font-size: 12px;
color: white; 
font-family: 'Poppins', sans-serif;
font-weight: 600;
margin-bottom: 12px; 
${props => props.$absolute && `
position: absolute;
left: 24px; 
top: 24px;
z-index: 9; 
`}
`