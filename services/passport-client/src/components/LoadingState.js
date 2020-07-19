import React from 'react'
import {css} from 'emotion'
import Spinner from './Spinner'

const LoadingState = props => (
    <div
        className={css`
            display: flex;
            justify-content: center;
            opacity: 0.2;
        `}
        {...props}
    >
        {Spinner({width: 40})}
    </div>
)

export default LoadingState