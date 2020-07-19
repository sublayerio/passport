import React from 'react'
import moment from 'moment'
import {css, cx} from 'emotion'

const ApplicationItem = ({id, brandImageUrl, name, createdAt, onClick, onRevoke}) => (
    <div
        className={cx(
            css`
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            border-radius: 6px;
            padding: 8px;
            cursor: pointer;
            user-select: none;

        `,
            onClick ? css`
            &:active {
                background-color: rgba(0, 0, 0, 0.05);
            }
            `: null
        )}
        onClick={() => {
            if (onClick) {
                onClick()
            }
        }}
    >
        <div
            className={css`
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #ced4da;
                margin-right: 16px;
                background-color: #fff;
            `}
        >
            <div
                className={css`
                background-image: url('${brandImageUrl}');
                background-size: cover;
                background-repeat: none;
                background-position: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
            `}
            />
        </div>
        <div
            className={css`
                display: flex;
                flex-direction: column;
                flex-grow: 1;
            `}
        >
            <div
                className={css`
                font-weight: 700;
                font-size: 18px;
                margin-bottom: 4px;
            `}
            >
                {name}
            </div>
            <div
                className={css`
                font-size: 14px;
                opacity: 0.5;
            `}
            >
                {moment(createdAt).calendar()}
            </div>
        </div>
        {onRevoke ? (
            <button
                type={'button'}
                className={css`
                    background-color: #fff;
                    color: red;
                    border: 1px solid red;
                    border-radius: 999px;
                    padding: 4px 10px;
                    font-weight: 700;
                    cursor: pointer;
                    &:active {
                        background-color: red;
                        color: #fff;
                    }
                    &:focus {
                        outline: none;
                    }
                `}
                onClick={() => onRevoke({id})}
            >
                Revoke access
            </button>
        ) : null}
    </div>
)

export default ApplicationItem