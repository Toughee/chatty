import React from 'react'
// import { FaUserAlt } from 'react-icons/fa'

export default class Chatroom extends React.Component {
    render() {
        return (
            <div className="AboutPageStyle">
                {/*  */}

                <form className="chatBar">
                    <input placeholder="New message" />
                    <button>Send</button>
                </form>
            </div>
        )
    }
}
