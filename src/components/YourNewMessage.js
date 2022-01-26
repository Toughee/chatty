import React from 'react'
import moment from 'moment';


function YourNewMessage({ msg }) {
    return (
        <div className="YourMsgStyle row">
            <span className="col">
                <p className="MessageStyle">{msg.text}</p>
                <span className="Identifier">You </span>
                <span className="TimeStyle">Sent: {moment().format('MMM Do, YYYY')}</span>
            </span>
        </div>
    )
}

export default YourNewMessage
