'use client'
import styled from "styled-components"

interface types {
    $delay: number
}

export const SplashWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #FFFCF5;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: hide .7s ease forwards; 
  animation-delay: 2.8s; 
  z-index: 6;
  @keyframes hide {
    0% {
        left: 0;
    }
    99% {
        display: none; 
        pointer-events: none; 
    }
    100% {
        left: -100%;
    }
  }
`;

export const SplashUnderlay = styled.div`
position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #FF3508;
  animation: hide .8s ease forwards; 
  animation-delay: 2.9s; 
  z-index: 5;
  @keyframes hide {
    0% {
        left: 0;
    }
    99% {
        display: none; 
        pointer-events: none; 
    }
    100% {
        left: -100%;
    }
  }
`

export const FadeInText = styled.div`
  display: inline-block;
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500; 
  text-align: center; 
  animation: blur 1s ease forwards; 
  animation-delay: 2s; 
  @keyframes blur {
    0% {
    opacity: 1;
    transform: scale(1)
    }
    100% {
   opacity: 0;
   transform: scale(2);
filter: blur(20px);
    }
  }
`;

export const Letter = styled.span<types>`
  opacity: 0;
  animation: fadeIn 0.5s forwards;
  animation-delay: ${(props) => props.$delay}s;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;