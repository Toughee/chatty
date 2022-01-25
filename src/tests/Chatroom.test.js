import { render } from '@testing-library/react'
import Chatroom from '../components/Chatroom'

test('Renders component with no issues or error messages', () => {
    render(<Chatroom />)
})
