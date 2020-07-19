import React from 'react'
import {css} from 'emotion'

const Layout = ({children}) => (
    <div
        className={css`
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                `}
    >
        <div
            className={css`
                        width: 450px;
                        max-width: 100%;
                        padding: 16px;
                    `}
        >
            {children}
        </div>
    </div>
)

export default Layout