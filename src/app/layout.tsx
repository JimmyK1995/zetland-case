// Default Next/React
import type { Metadata } from 'next'
import { ReactNode } from 'react'

// Styled components utility
import StyledComponentsRegistry from '@/lib/registry'

// Styling
import './globals.css'

export const metadata: Metadata = {
  title: 'Zetland challenge',
  description: 'A challenge on fetching data from an API, and present it in a sorted list.',
}
 
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
         <StyledComponentsRegistry>
          {children}
         </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout;
