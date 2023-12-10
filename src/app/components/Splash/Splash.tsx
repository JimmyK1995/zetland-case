'use client'
// React
import React, { useState, useEffect } from 'react';

// Styled
import { SplashWrapper, SplashUnderlay, FadeInText, Letter } from './splash.styled';
import { Container } from '@/app/global.styled';

const Splash: React.FC = () => {

    const [letters, setLetters] = useState<Array<string>>([]);
    const text:string = 'Zetland'

    useEffect(() => {
        setLetters(text.split(''));
      }, [text]);

  return (
    <>
    <SplashWrapper>
        <Container>
  <FadeInText>
      {letters.map((letter, index) => (
        <Letter key={index} $delay={index * 0.09}>
          {letter}
        </Letter>
      ))}
    </FadeInText>
    </Container>
    </SplashWrapper>
    <SplashUnderlay />
    </>
  );
};

export default Splash;
