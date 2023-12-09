// Testing
import {render} from '@testing-library/react'

// Components
import LandingPage from './Landing'

describe('Landing page tests', () => {
    test('It should render the landing page component', () => {
        render(<LandingPage />)
    })
})