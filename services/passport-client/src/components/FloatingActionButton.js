import React from 'react'
import { cx, css, keyframes } from 'emotion'

const animation = keyframes`
    0% {
        transform: scale3d(0,0,0);
    }
    100% {
        transform: scale3d(1,1,1);
    }
`

export default ({ type, className, children, onClick }) => {

    return (
        <button
            type={type || 'button'}
            onClick={onClick}
            className={cx(css`
            background-color: #000;
            color: #fff;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            font-size: 18px;
            align-items: center;
            justify-content: center;
            transform: scale3d(0,0,0);
            display: flex;
            box-shadow: 0 0 0 1px rgba(0,0,0,.09), 0 1px 0 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.1);
            -webkit-transition: all .1s ease-out;
    transition: all .1s ease-out;
            &:focus {
                outline: 0;
            }
            animation: ${animation} 0.3s ease 0.4s 1 normal forwards;
        `, className)}
        >
            {children}
        </button>
    )
}