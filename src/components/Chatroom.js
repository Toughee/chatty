import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

export default class Chatroom extends React.Component {
    render() {
        return (
            <div className="AboutPageStyle">
                <span className="myMsg">
                    {' '}
                    Did you manage to get my message? <FaUserAlt />
                </span>
                <br />
                <br />
                <br />
                <br />

                <span className="extrlMsg">
                    <FaUserAlt /> yeah got it
                </span>
                <br />

                <br />
                <br />
                <br />

                <span className="myMsg">
                    good. was thinkin you missed it
                    <FaUserAlt />
                </span>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <span className="extrlMsg">
                    <FaUserAlt /> Just went to Jake's house for something
                </span>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <span className="extrlMsg">
                    <FaUserAlt /> Did you ever go there yesterday?
                </span>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <form className="chatBar">
                    <input placeholder="New message" />
                    <button>Send</button>
                </form>
            </div>
        )
    }
}
