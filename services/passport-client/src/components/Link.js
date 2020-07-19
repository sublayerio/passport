import React from 'react'
import {css} from 'emotion'

const Link = props => (
    <a
        {...props}
        className={css`
            color: #000;
            font-weight: 700;
            text-decoration: underline;
        `}
    >
        {props.children}
    </a>
)

export default Link