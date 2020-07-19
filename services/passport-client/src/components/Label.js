import React from 'react'
import {css} from 'emotion'

const Label = ({children}) => (
    <label
        className={css`
            font-weight: 700;
            margin-bottom: 8px;
            display: block;
        `}
    >
        {children}
    </label>
)

export default Label