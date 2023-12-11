// React
import React from 'react'

// Next
import Image from 'next/image'
import Link from 'next/link'

// Components
import { Typography } from '../../components/Typography/Typography'

// Styled components
import { HeaderWrapper, HeaderContent, HeaderByLine } from './landing.styled'
import { Container, PrimaryButton, Flex, TransparentButton } from '@/app/global.styled'

// Assets
import HeaderImage from '../../../../public/landing-header.jpg'
import Splash from '@/app/components/Splash/Splash'

const LandingPage: React.FC = () => {
  return (
    <>
    <Splash />
    <HeaderWrapper>
      <Container $noMaxWidth>
        <HeaderContent>
          <Typography tag="h2">Zetland</Typography>
          <Typography tag="h1" $mtSM={-8} $mtMD={-12}>News challenge</Typography>
          <Typography tag="p" $mtSM={12} $mtMD={0} opacity={0.8}>I've submitted a project for consideration at Zetland, 
          which is developed using Next.js for the frontend, styled-components for styling, 
          and Jest for testing. This project serves as my entry into the challenges or 
          opportunities presented by Zetland</Typography>
          <Flex $mt={50}>
         <Link href="/news"><PrimaryButton>News page</PrimaryButton></Link>
          </Flex>
        </HeaderContent>
      <HeaderByLine>
        <Typography tag="p">Jimmy Kaltoft Andersen</Typography>
      </HeaderByLine>
      </Container>
        <Image 
        fill
        src={HeaderImage}
        alt="Female sitting on a couch, reading news on her smartphone"
        />
    </HeaderWrapper>
    </>
  )
}

export default LandingPage