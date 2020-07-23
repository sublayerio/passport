import React from 'react'
import { css, injectGlobal, keyframes } from 'emotion'

injectGlobal`
  * {
    box-sizing: border-box;
  }
`

const rotation = keyframes`
0% {
transform: rotate(0);
}
100% {
transform: rotate(359deg);
}
`

const fadeIn = keyframes`
0% {
opacity: 0;
}
100% {
opacity: 1;
}
`

const bounceIn = keyframes`
0% {
opacity: 0;
transform: scale(.1);
}
80% {
opacity: .5;
transform: scale(1.2);
}
100% {
opacity: 1;
transform: scale(1);
}
`

export default class Splashscreen extends React.Component {

    render() {
        return (
            <div
                className={css`
          position: absolute;
          right: 0;
          bottom: 0;
          top: 0;
          left: 0;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-flex: 1;
          -webkit-flex: 1 0 auto;
          -ms-flex: 1 0 auto;
          flex: 1 0 auto;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          background: #FFFFFF;
          background-color: #F5F7FA;
          z-index: 3000;
        `}
            >
                <div
                    className={css`
            height: 128px;
            width: 128px;
            position: relative;
            margin-top: 40px;
          `}
                >
                    <div
                        className={css`
              height: 128px;
              width: 128px;
              margin: 0 auto;
              position: relative;
              border: 2px solid transparent;
              border-top: 2px solid rgb(var(--primaryColor));
              border-radius: 100%;
              display: block;
              opacity: 0;
              animation: ${rotation} .75s .5s infinite linear, ${fadeIn} 1s .5s ease-in-out forwards;
            `}
                    >

                    </div>
                    <div
                        className={css`
              position: absolute;
              left: 4px;
              top: 4px;
              width: 120px;
              height: 120px;
              padding: 20px;
              background-color: #FFF;
              border-radius: 50%;
              animation: ${bounceIn} .5s ease-in-out;
            `}
                    >
                        <div
                            className={css`
                width: 60px;
                height: 60px;
                margin: 10px;
                background-image: url(${window._env_.REACT_APP_BRAND_IMAGE_URL});
                background-size: contain;
                background-repeat: none;
                background-position: center center;
              `}
                        />
                    </div>
                </div>
                <div
                    className={css`
            font-size: 14px;
            font-family: Sans-serif;
            color: #98A2B3;
            animation: ${fadeIn} 1s ease-in-out;
            animation-fill-mode: forwards;
            opacity: 0;
            animation-delay: 1.0s;
            margin-top: 24px;
          `}
                >
                    {this.props.message}
                </div>
            </div>
        )
    }
}