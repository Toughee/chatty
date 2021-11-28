import React from 'react'

import { FaLifeRing } from 'react-icons/fa'

export default class Support extends React.Component {
    render() {
        return (
            <div>
                <span className="PageIcon">
                    <FaLifeRing />
                </span>
                <h1>Support page</h1>

                <p>
                    Submit a new Pull Request{' '}
                    <a href={'https://github.com/Toughee/chatty/pulls'}>
                        {' '}
                        here
                    </a>
                    |
                    <a
                        href={
                            'https://github.com/Toughee/chatty/blob/main/docs/PULL_REQUEST_TEMPLATE.md'
                        }
                    >
                        {' '}
                        following these guidelines
                    </a>
                </p>

                <p>
                    Report a bug here
                    <a href={'https://github.com/Toughee/chatty/issues'}>
                        {' '}
                        here
                    </a>
                    <a
                        href={
                            'https://github.com/Toughee/chatty/blob/main/docs/BUG_REPORT.md'
                        }
                    >
                        {' '}
                        following these guidelines
                    </a>
                </p>

                <p>
                    Request new features/additional content
                    <a href={'https://github.com/Toughee/chatty/pulls'}>
                        {' '}
                        here
                    </a>
                    |
                    <a
                        href={
                            'https://github.com/Toughee/chatty/blob/main/docs/FEATURE_REQUEST.md'
                        }
                    >
                        {' '}
                        following these guidelines
                    </a>
                </p>
            </div>
        )
    }
}
