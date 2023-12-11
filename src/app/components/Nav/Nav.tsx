// React
import React from 'react'

// Next
import Image from 'next/image'
import Link from 'next/link'

// Styled components
import { NavWrapper } from './nav.styled'

// Assets
import zetlandLogo from '../../../../public/zetland-logo.svg'

const Nav = () => {
  return (
      <NavWrapper>
          <Link href="/"><Image src={zetlandLogo} alt="Zetland new logo" /></Link>
      </NavWrapper>
  )
}

export default Nav