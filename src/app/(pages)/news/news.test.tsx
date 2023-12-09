import { render } from '@testing-library/react'
import News from './page'

describe('News page integration tests', () => {
    test('It renders the News page component', () => {
        render(<News />)
    })
})