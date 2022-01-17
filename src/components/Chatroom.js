import React from 'react'
import YourNewMessage from './YourNewMessage'
import ChatBar from './ChatBar'

function Chatroom() {
    const [msgs, setMsgs] = React.useState([])

    const createMsg = (text) => {
        const newMsg = [...msgs, { text }]
        setMsgs(newMsg)
    }
    return (
        <div>
            <span className="chatBar">
                <ChatBar createMsg={createMsg} />
            </span>
            <div>
                {msgs.map((msg, id) => (
                    <YourNewMessage key={id} msg={msg} />
                ))}
            </div>
        </div>
    )
}

export default Chatroom
