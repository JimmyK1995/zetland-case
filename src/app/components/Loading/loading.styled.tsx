'use client'
import styled from "styled-components"

interface styleprops {
    $hide?: boolean
}

export const LoadingWrapper = styled.div<styleprops>`
position: fixed; 
top: 0;
left: 0; 
height: 100%; 
width: 100%; 
background-color: #FFFCF5;
display: flex; 
align-items: center;
justify-content: center;
z-index: 9999; 

${props => props.$hide && `
    opacity: 0; 
    transition: .5s ease; 
    pointer-events: none; 
`}
`