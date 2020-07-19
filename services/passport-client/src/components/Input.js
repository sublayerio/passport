import React from 'react'
import {css} from 'emotion'

const Input = props => (
    <input
        className={css`
            background-color: #fff;
            border: 1px solid #e1e1e1;
            border-radius: 5px;
            -webkit-appearance: none;
            padding: 8px 10px;
            display: block;
            width: 100%;
            max-width: 100%;
            font-size: 16px;
            transition: border 0.2s ease,color 0.2s ease;
            &:disabled {
                background-color: rgba(0, 0, 0, 0.05);
            }
            &:focus {
                border: 1px solid #888;
                outline: none;
            }
        `}
        {...props}
    />
)

export default Input