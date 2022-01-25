import { render } from '@testing-library/react'
import Support from '../components/Support'

test('Renders component with no issues or error messages', () => {
    render(<Support />)
})
