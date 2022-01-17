import React from 'react'

function ChatBar({ createMsg }) {
    //
    const [value, setValue] = React.useState('')

    const handleSubmit = (e) => {
        // Prevents submit form from resetting
        e.preventDefault()
        if (!value) return
        createMsg(value)
        setValue('')
        // local storage for messages section
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={value}
                placeholder="Share a new post"
                onChange={(e) => setValue(e.target.value)}
                aria-label="New post section"
            />
            <button type="submit">Send</button>
        </form>
    )
}

export default ChatBar
