import React from 'react'
import { css, cx, keyframes } from 'emotion'
import icons from '../icons'
import t from '../t'
import FloatingActionButton from './FloatingActionButton'
import Verify from '../Verify'

const blinkAnimation = keyframes`
      from { 
        opacity: 1.0; 
      }
      to { 
        opacity: 0.0; 
      }
`

const loadingDot = css`
  animation-name: ${blinkAnimation};
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
`

export default class VerifyingSession extends React.Component {

    render() {

        const { email, securityCode, onClose } = this.props

        return (
            <div>
                <Verify 
                    email={email}
                />
            </div>
        )

        return (
            <div
                className={css`
                        text-align: center;
                    `}
            >
                <h1>
                    {t('VerifyingSession.title')}
                </h1>
                <div
                    className={css`line-height: 1.4;`}
                >
                    {t('VerifyingSession.description', {
                        bindings: {
                            email
                        },
                        markdown: true
                    })}
                </div>
                <div
                    className={css`
                            background-color: #fafafa;
                            color: #000;
                            border: 1px solid #eee;
                            padding: 15px 20px;
                            font-weight: 600;
                            margin-bottom: 30px;
                        `}
                >
                    {securityCode}
                </div>
                <div
                    className={css`
                            margin-bottom: 30px;
                        `}
                >
                    {t('VerifyingSession.loadingText')}
                    <span>
                        <span className={loadingDot}>.</span>
                        <span className={cx(loadingDot, css`
                                animation-delay: 0.2s;
                            `)}>.</span>
                        <span className={cx(loadingDot, css`
                                animation-delay: 0.4s;
                            `)}>.</span>
                    </span>
                </div>
                <FloatingActionButton
                    className={css`
                            background-color: #0022fd;
                            position: absolute;
                            left: 50%;
                            margin-left: -30px;
                        `}
                    onClick={onClose}
                    icon={'fa fa-chevron-left'}
                >
                    {icons.close({ height: 18 })}
                </FloatingActionButton>
            </div>
        )
    }
}