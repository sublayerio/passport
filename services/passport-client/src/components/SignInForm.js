import React from 'react'
import { css, injectGlobal } from 'emotion'
import Button from './Button'
import Spinner from './Spinner'
import t from '../t'

injectGlobal`
    a {
        color: #000;
    }
`

const Brand = ({ imageUrl, companyName }) => (
    <div
        className={css`
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            width: 75px;
            height: 75px;
            overflow: hidden;
        `}
        title={companyName}
    >
        <div
            className={css`
                display: flex;
                 width: 65px;
                height: 65px;
                background-image: url('${imageUrl}');
                background-size: cover;
                background-repeat: no-repeat;
                overflow: hidden;
                border-radius: 50%;
            `}
        />
    </div>
)

export default class SignInForm extends React.Component {

    render() {

        const { title, buttonLabel, submitting, companyName, privacyPolicyUrl, termsOfServiceUrl, brandImageUrl, email, onEmailChange, onSubmit } = this.props

        return (
            <div>
                <div
                    className={css`
                        display: flex;
                        justify-content: center;
                    `}
                >
                    <Brand
                        imageUrl={brandImageUrl}
                        companyName={companyName}
                    />
                </div>
                <div
                    className={css`
                            text-align: center;
                            margin-bottom: 40px;
                        `}
                >
                    <h1
                        className={css`
                                margin-bottom: 10px;
                            `}
                    >{title}</h1>
                    <div
                        className={css`
                                font-size: 20px;
                            `}
                    >
                        {t('SignInForm.toContinueToApplication', {
                            bindings: {
                                companyName
                            },
                            markdown: true
                        })}
                    </div>
                </div>
                <form onSubmit={onSubmit}>
                    <div
                        className={css`
                            margin-bottom: 12px;
                        `}
                    >
                        <input
                            type="email"
                            name="email"
                            value={email}
                            disabled={submitting}
                            className={css`
                                background-color: #fff;
                                font-size: 16px;
                                height: 56px;
                                border-radius: 6px;
                                width: 100%;
                                box-shadow: 0 0 0 1px rgba(0,0,0,.09), 0 1px 0 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.1);
                                padding: 6px 12px;
                                border: none;
                                -webkit-appearance: none;
                                -webkit-transition: all .1s ease-out;
    transition: all .1s ease-out;
                                &:disabled {
                                    background-color: rgba(0, 0, 0, 0.05);
                                }
                                &:focus {
                                    outline: 0;
                                    box-shadow: inset 0 0 0 2px rgb(var(--primaryColor)), 0 2px 4px rgba(0,0,0,.1), 0 0 1px rgba(0,0,0,.1);
                                    -webkit-transition-duration: 0s;
                                    transition-duration: 0s;
                                }
                            `}
                            onChange={onEmailChange}
                            placeholder={t('SignInForm.emailPlaceholder')}
                            autoFocus
                        />
                    </div>
                    <div>
                        <Button
                            type={'submit'}
                            disabled={email === '' || submitting}
                            className={css`
                                width: 100%;
                            `}
                        >
                            {submitting ? <Spinner /> : buttonLabel}
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}