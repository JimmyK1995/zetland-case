// React
import React from 'react'

// Next
import Image from 'next/image'

// Styled components
import { NavWrapper } from './nav.styled'

// Assets
import zetlandLogo from '../../../../public/zetland-logo.svg'

const Nav = () => {
  return (
      <NavWrapper>
          <Image src={zetlandLogo} objectFit="contain" alt="Zetland new logo" />
      </NavWrapper>
  )
}

export default Nav