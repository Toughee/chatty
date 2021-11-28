import React from 'react'

import { FaUserAlt } from 'react-icons/fa'

export default class Myprofile extends React.Component {
    render() {
        return (
            <div>
                <span className="PageIcon">
                    <FaUserAlt />
                </span>
                <section className="ProfileTabStyle">
                    <p>
                        Username: <strong>CKent1977</strong>
                    </p>
                    <p>Active since: Dec 2019</p>
                    <hr />

                    <p>
                        <strong>Bio:</strong> freelance journalist working for
                        the Daily Bugle
                    </p>
                    <p>
                        <strong>Likes:</strong> Bicycling, ice cream, prime rib
                        steaks
                    </p>
                    <p>
                        <strong>Dislikes:</strong> Cats, fur coats, seaweed
                    </p>
                </section>
            </div>
        )
    }
}
