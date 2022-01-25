import { render } from '@testing-library/react'
import MyProfile from '../components/MyProfile'

test('Renders component with no issues or error messages', () => {
    render(<MyProfile />)
})
