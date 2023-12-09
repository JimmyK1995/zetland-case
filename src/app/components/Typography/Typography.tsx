'use client'
// React
import { ReactNode } from 'react';

// Styled
import styled from "styled-components";

interface styledProps {
  tag?: string,
  children?: ReactNode,
  fontWeight?: number, 
  mtSM?: number,
  mtMD?: number, 
  opacity?: number,
  color?: number | string,
  small?: boolean
}

export const Typography: React.FC<styledProps> = ({ tag, children, ...rest }) => {
    switch (tag) {
      case 'h1':
        return <HeadingOne {...rest}>{children}</HeadingOne>;
      case 'h2':
        return <HeadingTwo {...rest}>{children}</HeadingTwo>;
      case 'p':
        return <Paragraph {...rest}>{children}</Paragraph>;
      default:
        return <>{children}</>;
    }
  };

  export const HeadingOne = styled.h1<styledProps>`
  font-size: ${props => props.small ? '2.6rem' : '3.8rem'}; 
  color: ${props => props.color ? props.color : 'white'}; 
  margin-top: ${props => props.mtSM ? `${props.mtSM}px` : null}; 

  @media (min-width: 992px) {
    font-size: ${props => props.small ? '3.2rem' : '4.2rem'}; 
    margin-top: ${props => props.mtMD ? `${props.mtMD}px` : null}; 
  }

  @media (min-width: 1600px) {
    font-size: ${props => props.small ? '4.2rem' : '6.5rem'};
  }
`;

  export const HeadingTwo = styled.h2<styledProps>`
  font-size: 2.4rem; 
  color: ${props => props.color ? props.color : 'white'}; 
  font-weight: ${props => props.fontWeight ? props.fontWeight : '500'};
  margin-top: ${props => props.mtSM ? `${props.mtSM}px` : null}; 
  @media (min-width: 992px) {
    font-size: ${props => props.small ? '2.4rem' : '3.2rem'}; 
  }
  @media (min-width: 1600px) {
    font-size: ${props => props.small ? '3.2rem' : '4.2rem'}; 

  }
  `
  export const Paragraph = styled.p<styledProps>` 
  font-size: 1.4rem;
  color: ${props => props.color ? props.color : 'white'}; 
  margin-top: ${props => props.mtSM ? `${props.mtSM}px` : null};  
  opacity: ${props => props.opacity ? props.opacity : 1};
  ${props => props.fontWeight ? props.fontWeight : null};
  @media (min-width: 992px) {
      margin-top: ${props => props.mtMD ? `${props.mtMD}px` : null};
    font-size: ${props => props.small ? '1.2rem' : '1.4rem'}; 
  }
  @media (min-width: 1600px) {
    font-size: 1.8rem; 
    font-size: ${props => props.small ? '1.4rem' : '1.8rem'}; 
  }
  `