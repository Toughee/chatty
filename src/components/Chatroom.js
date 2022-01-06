import React from 'react'
// import { FaUserAlt } from 'react-icons/fa'

const msgData = [
    {
        name: 'tina',
        date: '12-12-21',
        message: 'lorem ipsum lorem ipsum lorem',
    },
    {
        name: 'jacob',
        date: '12-12-21',
        message: 'lorem ipsum lorem ipsum lorem',
    },
    {
        name: 'daniel',
        date: '12-12-21',
        message: 'lorem ipsum lorem ipsum lorem',
    },
    {
        name: 'tina',
        date: '12-12-21',
        message: 'lorem ipsum lorem ipsum lorem',
    },
]

// username
// 1min ago
// text
//

// handleClick =
// e.prevent default
// create =>
// this.state.NewMsg
//
export default class Chatroom extends React.Component {
    render() {
        return (
            <div className="AboutPageStyle">
                {/* <div className='NewMsg'>{this.state.NewMsg}</div> */}

                <div className="NewMsg">
                    <p>
                        ae est. Integer bibendum feugiat urna. In auctor, mauris
                        nec sagittis feugiat, risus ante convallis ligula, at
                        lobortis odio orci vulputate nibh. Donec fermentum lorem
                        sed arcu porta gravida. Suspendisse varius dui eget
                        lacus aliquam scelerisque. Nunc ac aliquam magna. Donec
                        consequat, velit ac
                    </p>
                    <span className="DateStyle">1 min ago</span>
                    <span className="IdentifierStyle">You</span>
                </div>

                <div className="NewMsg">
                    <p>
                        ae est. Integer bibendum feugiat urna. In auctor, mauris
                        nec sagittis feugiat, risus ante convallis ligula, at
                        lobortis odio orci vulputate nibh. Donec fermentum lorem
                        sed arcu porta gravida. Suspendisse varius dui eget
                        lacus aliquam scelerisque. Nunc ac aliquam magna. Donec
                        consequat, velit ac
                    </p>
                    <span className="DateStyle">1 min ago</span>
                    <span className="IdentifierStyle">You</span>
                </div>

                <div className="NewMsg">
                    <p>
                        ae est. Integer bibendum feugiat urna. In auctor, mauris
                        nec sagittis feugiat, risus ante convallis ligula, at
                        lobortis odio orci vulputate nibh. Donec fermentum lorem
                        sed arcu porta gravida. Suspendisse varius dui eget
                        lacus aliquam scelerisque. Nunc ac aliquam magna. Donec
                        consequat, velit ac
                    </p>
                    <span className="DateStyle">1 min ago</span>
                    <span className="IdentifierStyle">You</span>
                </div>

                <div className="NewMsg">
                    <p>
                        ae est. Integer bibendum feugiat urna. In auctor, mauris
                        nec sagittis feugiat, risus ante convallis ligula, at
                        lobortis odio orci vulputate nibh. Donec fermentum lorem
                        sed arcu porta gravida. Suspendisse varius dui eget
                        lacus aliquam scelerisque. Nunc ac aliquam magna. Donec
                        consequat, velit ac
                    </p>
                    <span className="DateStyle">1 min ago</span>
                    <span className="IdentifierStyle">You</span>
                </div>

                <div className="NewMsg">
                    <p>
                        ae est. Integer bibendum feugiat urna. In auctor, mauris
                        nec sagittis feugiat, risus ante convallis ligula, at
                        lobortis odio orci vulputate nibh. Donec fermentum lorem
                        sed arcu porta gravida. Suspendisse varius dui eget
                        lacus aliquam scelerisque. Nunc ac aliquam magna. Donec
                        consequat, velit ac
                    </p>
                    <span className="DateStyle">1 min ago</span>
                    <span className="IdentifierStyle">You</span>
                </div>

                <form
                    className="chatBar"
                    // onSubmit={handleSubmit}>
                >
                    <button>Send</button>
                    <input
                        placeholder="New message"
                        type="text"
                        // onChange={(e) => newMsg()}
                    />
                </form>
            </div>
        )
    }
}
