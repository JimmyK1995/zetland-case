// Styled components
'use client'
import styled from "styled-components";

export const HeaderWrapper = styled.div`
height: 100dvh; 
min-height: 640px; 
width: 100vw; 
display: flex; 
flex-direction: column;
justify-content: flex-end;
overflow: hidden; 
position: relative; 
&::after {
    content: '';
    position: absolute;
    top: 0; 
    left: 0; 
    height: 100%; 
    width: 100%; 
    background: linear-gradient(194deg, rgba(255,53,8,0.2707676820728291) 0%, rgba(255,53,8,1) 100%);
    z-index: -1; 
}
img {
    object-position: 58%;
    z-index: -2; 
    transform: scale(1.2);
    animation: animated 40s infinite forwards; 
    @keyframes animated {
        0% {
            transform: scale(1.2);
        }
        50% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.2)
        }
    }
}
`

export const HeaderContent = styled.div`
margin-bottom: 125px; 
max-width: 340px;
@media (min-width: 576px) {
max-width: 540px; 
}
@media (min-width: 1600px) {
    margin-bottom: 240px; 
}
`

export const HeaderByLine = styled.div`
position: absolute; 
right: 15px;
bottom: 50px; 
&::after {
    content: '';
    position: absolute;
    height: 2px; 
    width: 300px; 
    background-color: white; 
    right: -15px;
    bottom: -8px; 
    @media (min-width: 992px) {
        width: 600px; 
    }
    @media (min-width: 1600px) {
        width: 920px; 
        right: -35px; 
    }
}

`