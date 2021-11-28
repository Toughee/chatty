import React from 'react'
import { FaInfo } from 'react-icons/fa'

export default class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <span className="PageIcon">
                    <FaInfo />
                </span>
                <h1>About chatty:</h1>

                <p className="AboutPageStyle">
                    <strong>chatty is a minimalist React chat app</strong>{' '}
                    mainly designed as a proof of concept{' '}
                </p>
            </div>
        )
    }
}
