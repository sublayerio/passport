import React from 'react'
import { css, cx, keyframes } from 'emotion'
import Layout from '../components/Layout'
import api from '../services/api'
import getQuery from '../services/getQuery'
import Paragraph from '../Paragraph'
import t from '../t'

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

const serverError = props => (
    <svg
        {...props}
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="16.6669" width="8.33333" height="60" rx="4.16667" fill="#757575" />
        <rect x="75" width="8.33333" height="60" rx="4.16667" fill="#757575" />
        <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="7"
            width="100"
            height="32"
        >
            <rect y="7.9248" width="100" height="30.566" rx="4" fill="#EBD092" />
        </mask>
        <g mask="url(#mask0)">
            <rect y="7.9248" width="100" height="30.566" fill="#EBD092" />
            <rect
                width="11.1608"
                height="54.5797"
                transform="matrix(0.852253 0.52313 -0.561623 0.827394 18.7487 -4.52881)"
                fill="#545454"
            />
            <rect
                width="11.1608"
                height="54.5797"
                transform="matrix(0.852253 0.52313 -0.561623 0.827394 46.1296 -4.52881)"
                fill="#545454"
            />
            <rect
                width="11.1608"
                height="54.5797"
                transform="matrix(0.852253 0.52313 -0.561623 0.827394 72.3199 -4.52881)"
                fill="#545454"
            />
            <rect
                width="11.1608"
                height="54.5797"
                transform="matrix(0.852253 0.52313 -0.561623 0.827394 98.5104 -2.26367)"
                fill="#545454"
            />
        </g>
    </svg>
);

const authExpired = props => (
    <svg
        {...props}
        viewBox="0 0 69 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="34.5"
            cy="34.5"
            r="34.5"
            fill="rgb(var(--primaryColorLightest))"
            fillOpacity="1"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.4711 24.0814H17.9706L17.9706 45.7582H51.4711V24.0814ZM17.9706 22.1107C16.8823 22.1107 16 22.993 16 24.0814V45.7582C16 46.8465 16.8823 47.7288 17.9706 47.7288H51.4711C52.5595 47.7288 53.4418 46.8465 53.4418 45.7582V24.0814C53.4418 22.993 52.5595 22.1107 51.4711 22.1107H17.9706Z"
            fill="rgb(var(--primaryColor)"
            fillOpacity="1"
        />
        <path d="M17.5247 24.0442H51.9243V29.2171H17.5247V24.0442Z" fill="white" />
        <path
            d="M29.8056 38.9438C30.742 38.2247 30.8401 36.8491 30.0153 36.0043L18.0132 23.7111C17.4945 23.1798 16.626 23.2286 16.1701 23.8148L16.1701 45.4177C16.1701 47.052 18.0449 47.976 19.341 46.9806L29.8056 38.9438Z"
            fill="rgb(var(--primaryColorLightest))"
            fillOpacity="1"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.6481 25.4528L28.9578 37.0368C29.164 37.2481 29.1394 37.5919 28.9053 37.7717L18.4408 45.8085C18.1168 46.0574 17.6481 45.8264 17.6481 45.4178L17.6481 25.4528ZM30.0153 36.0044C30.8401 36.8492 30.742 38.2247 29.8056 38.9439L19.341 46.9807C18.0449 47.9761 16.1701 47.052 16.1701 45.4178L16.1701 23.8149C16.626 23.2287 17.4945 23.1798 18.0132 23.7112L30.0153 36.0044Z"
            fill="rgb(var(--primaryColor)"
            fillOpacity="1"
        />
        <path
            d="M39.6065 38.9438C38.6701 38.2247 38.572 36.8491 39.3968 36.0043L51.3989 23.7111C51.9176 23.1798 52.7861 23.2286 53.242 23.8148L53.242 45.4177C53.242 47.052 51.3672 47.976 50.0711 46.9806L39.6065 38.9438Z"
            fill="rgb(var(--primaryColorLightest))"
            fillOpacity="1"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.764 25.4527L40.4543 37.0368C40.2481 37.248 40.2727 37.5919 40.5068 37.7717L50.9713 45.8084C51.2954 46.0573 51.764 45.8263 51.764 45.4177L51.764 25.4527ZM39.3968 36.0043C38.572 36.8491 38.6701 38.2247 39.6065 38.9438L50.0711 46.9806C51.3672 47.976 53.242 47.052 53.242 45.4177L53.242 23.8148C52.7861 23.2286 51.9176 23.1798 51.3989 23.7111L39.3968 36.0043Z"
            fill="rgb(var(--primaryColor)"
            fillOpacity="1"
        />
        <path
            d="M33.5366 31.6221C34.2379 31.095 35.2033 31.095 35.9046 31.6221L52.6157 44.1829C54.1287 45.3201 53.3244 47.7288 51.4316 47.7288H18.0096C16.1169 47.7288 15.3126 45.3201 16.8256 44.1829L33.5366 31.6221Z"
            fill="rgb(var(--primaryColorLightest))"
            fillOpacity="1"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.7277 45.3643L35.0166 32.8036C34.8413 32.6718 34.5999 32.6718 34.4246 32.8036L17.7136 45.3643C17.3353 45.6486 17.5364 46.2508 18.0096 46.2508H51.4316C51.9048 46.2508 52.1059 45.6486 51.7277 45.3643ZM35.9046 31.6221C35.2033 31.095 34.2379 31.095 33.5366 31.6221L16.8256 44.1829C15.3126 45.3201 16.1169 47.7288 18.0096 47.7288H51.4316C53.3244 47.7288 54.1287 45.3201 52.6157 44.1829L35.9046 31.6221Z"
            fill="rgb(var(--primaryColor)"
            fillOpacity="1"
        />
        <path
            d="M33.3805 40.9461C34.1363 41.6523 35.3095 41.654 36.0672 40.9499L52.7857 25.4166C54.0976 24.1977 53.2351 22.0023 51.4444 22.0023L18.1022 22.0023C16.3141 22.0023 15.4503 24.192 16.7568 25.4128L33.3805 40.9461Z"
            fill="rgb(var(--primaryColorLightest))"
            fillOpacity="1"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.7797 24.3338L35.0613 39.8671C34.8718 40.0432 34.5785 40.0427 34.3896 39.8662L17.7658 24.3329C17.4392 24.0277 17.6552 23.4803 18.1022 23.4803L51.4444 23.4803C51.8921 23.4803 52.1077 24.0291 51.7797 24.3338ZM36.0672 40.9499C35.3095 41.654 34.1363 41.6523 33.3805 40.9461L16.7568 25.4128C15.4503 24.192 16.3141 22.0023 18.1022 22.0023L51.4444 22.0023C53.2351 22.0023 54.0976 24.1977 52.7857 25.4166L36.0672 40.9499Z"
            fill="rgb(var(--primaryColor)"
            fillOpacity="1"
        />
        <circle
            cx="48"
            cy="24"
            r="9.25"
            fill="rgb(var(--primaryColorLightest))"
            fillOpacity="1"
            stroke="rgb(var(--primaryColor)"
            strokeOpacity="1"
            stroke-width="1.5"
        />
        <path
            d="M47.467 25.712H49.035L49.315 19.412H47.159L47.467 25.712ZM47.131 27.77C47.131 28.372 47.635 28.89 48.251 28.89C48.867 28.89 49.371 28.372 49.371 27.77C49.371 27.154 48.867 26.636 48.251 26.636C47.635 26.636 47.131 27.154 47.131 27.77Z"
            fill="rgb(var(--primaryColor)"
            fillOpacity="1"
        />
    </svg>
);


const stay = props => (
    <svg
        width="69"
        height="69"
        viewBox="0 0 69 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="34.5"
            cy="34.5"
            r="34.5"
            fill="rgba(var(--primaryColorLightest), var(--primaryColorLightestAlpha))"
            fill-opacity="1"
        />
        <path
            d="M18.9386 37.6763L29.5275 48.7272L47.3598 21.9129"
            stroke="rgba(var(--primaryColor), var(--primaryColorAlpha))"
            stroke-opacity="1"
            stroke-width="4"
        />
    </svg>
);
export default class ActivateRoute extends React.Component {

    state = {
        status: 'VERIFYING'
    }

    componentWillMount() {

        if (!getQuery().token) {
            this.props.history.push('/')
            return
        }

        this.setState({
            verifying: true
        })

        setTimeout(() => this.confirmRegistration(), 2000)
    }

    async confirmRegistration() {

        console.log('confirm registration', getQuery().token)

        const response = await api.request({
            method: 'POST',
            data: {
                query: `
                    mutation confirmRegistration($token: ID!) {
                        confirmRegistration(token: $token) {
                            status
                            application {
                                name
                            }
                        }
                    }
                `,
                variables: {
                    token: getQuery().token
                }
            }
        })

        if (!response.data.errors || !response.data.errors.length) {
            this.setState({
                status: response.data.data.confirmRegistration.status,
                email: response.data.data.confirmRegistration.email,
                companyName: response.data.data.confirmRegistration.application ? response.data.data.confirmRegistration.application.name : null
            })
        }
    }

    renderVerifying() {

        return (
            <Layout>
                <div
                    className={css`
                    text-align: center;
                `}
                >
                    <h1>
                        {t('Activate.title')}
                        <span className="loading">
                            <span className={loadingDot}>.</span>
                            <span className={cx(loadingDot, css`
                            animation-delay: 0.2s;
                        `)}>.</span>
                            <span className={cx(loadingDot, css`
                            animation-delay: 0.4s;
                        `)}>.</span>
                        </span>
                    </h1>
                </div>
            </Layout>
        )
    }

    renderLoginExpired() {

        return (
            <Layout>
                <div
                    className={css`
                        display: flex;
                        justify-content: center;
                        margin-bottom: 32px;
                    `}
                >
                    {authExpired({ width: 69 })}
                </div>
                <div
                    className={css`
                        text-align: center;
                    `}
                >
                    <h1>
                        {t('Activate.loginExpiredTitle')}
                    </h1>
                    <Paragraph>
                        {t('Activate.loginExpiredDescription')}
                    </Paragraph>
                </div>
            </Layout>
        )
    }

    renderConfirmation() {

        return (
            <Layout>
                <div
                    className={css`
                        display: flex;
                        justify-content: center;
                        margin-bottom: 32px;
                    `}
                >
                    {stay({ width: 69 })}
                </div>
                <div
                    className={css`
                        text-align: center;
                    `}
                >
                    <h1>
                        {t('Activate.confirmedTitle')}{' '}<span className={css`background-image: linear-gradient(to right, rgba(55, 53, 47, 0.16) 0%, rgba(55, 53, 47, 0.16) 100%); background-size: 100% 1px; font-weight: 500; background-repeat: repeat-x; background-position: 0px 100%;`}>{this.state.companyName}</span>
                    </h1>
                    <Paragraph>
                        {t('Activate.confirmedDescription')}
                    </Paragraph>
                </div>
            </Layout>
        )
    }

    renderAlreadyVerified() {

        return (
            <Layout>
                <div
                    className={css`
                        display: flex;
                        justify-content: center;
                        margin-bottom: 32px;
                    `}
                >
                    {stay({ width: 69 })}
                </div>
                <div
                    className={css`
                        text-align: center;
                    `}
                >
                    <h1>
                        {t('Activate.alreadyVerifiedTitle')}{' '}<span className={css`background-image: linear-gradient(to right, rgba(55, 53, 47, 0.16) 0%, rgba(55, 53, 47, 0.16) 100%); background-size: 100% 1px; font-weight: 500; background-repeat: repeat-x; background-position: 0px 100%;`}>{this.state.companyName}</span>
                    </h1>
                    <Paragraph>
                        {t('Activate.confirmedDescription')}
                    </Paragraph>
                </div>
            </Layout>
        )
    }

    renderNoMatch() {

        return (
            <Layout>
                <div
                    className={css`
                        display: flex;
                        justify-content: center;
                        margin-bottom: 32px;
                    `}
                >
                    {serverError({ height: 60 })}
                </div>
                <div
                    className={css`
                        text-align: center;
                    `}
                >
                    <h1>
                        {t('Uh oh! Something went wrong')}{' '}<span className={css`background-image: linear-gradient(to right, rgba(55, 53, 47, 0.16) 0%, rgba(55, 53, 47, 0.16) 100%); background-size: 100% 1px; font-weight: 500; background-repeat: repeat-x; background-position: 0px 100%;`}>{this.state.companyName}</span>
                    </h1>
                    <Paragraph>
                        {t(`We couldn't find the resource you're looking for.`)}{' '}
                        <span role="img" aria-label="Cold sweat emoji">
                            😰
          </span>
                    </Paragraph>
                </div>
            </Layout>
        )
    }

    render() {

        if (this.state.status === 'VERIFIED') {
            return this.renderConfirmation()
        }

        if (this.state.status === 'LOGIN_EXPIRED') {
            return this.renderLoginExpired()
        }

        if (this.state.status === 'ALREADY_VERIFIED') {
            return this.renderAlreadyVerified()
        }

        if (this.state.status === 'VERIFYING') {
            return this.renderVerifying()
        }

        return this.renderNoMatch()
    }
}