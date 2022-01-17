import React from 'react'

function YourNewMessage({ msg }) {
    return (
        <div className="YourMsgStyle row">
            <span className="col">
                <p className="MessageStyle">{msg.text}</p>
                <span className="Identifier">You </span>
                <span className="TimeStyle">1 min ago</span>
            </span>
        </div>
    )
}

export default YourNewMessage
