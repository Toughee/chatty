import { render } from '@testing-library/react'
import AboutPage from '../components/AboutPage'

test('Renders component with no issues or error messages', () => {
    render(<AboutPage />)
})
