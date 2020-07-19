import React from 'react'
import {css} from 'emotion'

const FormGroup = ({children}) => (
    <div
        className={css`
            margin-bottom: 24px;
        `}
    >
        {children}
    </div>
)

export default FormGroup