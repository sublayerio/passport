import React from 'react'
import { css, cx } from 'emotion'

const Button = props => (
    <button
        {...props}
        className={cx(
            css`
            padding: 12px 24px;
            background-color: ${props.theme === 'danger' ? 'red' : '#0022fd'};
            box-shadow: 0 0 0 1px rgba(0,0,0,.09), 0 1px 0 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.1);
            -webkit-transition: all .1s ease-out;
    transition: all .1s ease-out;
            color: #fff;
            border: none;
            font-size: 16px;
            font-weight: 700;
            border-radius: 6px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            &:disabled {
                opacity: 0.7;
                cursor: default;
            }
            &:focus {
                outline: none;
            }
        `, props.className
        )}
    >
        {props.children}
    </button>
)

export default Button