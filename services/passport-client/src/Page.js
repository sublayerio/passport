import React from 'react'
import {css} from 'emotion'

export default class Page extends React.Component {

    render() {

        return (
            <div
                className={css`
                        width: 100%;
                        padding: 0 70px;
                        margin: 70px auto;
                        max-width: 840px;
                    `}
            >
                {this.props.children}
            </div>
        )
    }
}