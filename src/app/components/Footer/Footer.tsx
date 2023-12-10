// React
import React from 'react'

// Next
import Image from 'next/image'

// Styled
import { FooterWrapper } from './footer.styled'

// Assets
import zetlandLogo from '../../../../public/zetland-logo.svg'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
        <Image src={zetlandLogo} alt="Zetland brand icon" />
    </FooterWrapper>
  )
}

export default Footer