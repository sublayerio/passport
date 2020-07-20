import React from "react";
import { css, keyframes } from "emotion";
import translate from "./translate";
import Paragraph from "./Paragraph";
import Spacer from "./Spacer";

const slideIn = keyframes`
0% {
  transform:translateY(-10px);
  opacity: 0;
}
40% {
  transform:translateY(20px);
  opacity: 1;
}
90% {
  transform: translateY(20px);
  opacity: 1;
}
to {
  transform: translateY(20px);
  opacity: 0;
}
`;

const verify = props => (
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
      fill="rgba(var(--primaryColorLightest), var(--primaryColorLightestAlpha))"
      fillOpacity="1"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M51.4711 24.0814H17.9706L17.9706 45.7582H51.4711V24.0814ZM17.9706 22.1107C16.8823 22.1107 16 22.993 16 24.0814V45.7582C16 46.8465 16.8823 47.7288 17.9706 47.7288H51.4711C52.5595 47.7288 53.4418 46.8465 53.4418 45.7582V24.0814C53.4418 22.993 52.5595 22.1107 51.4711 22.1107H17.9706Z"
      fill="rgba(var(--primaryColor), var(--primaryColorAlpha))"
      fillOpacity="1"
    />
    <path d="M17.5247 24.0442H51.9243V29.2171H17.5247V24.0442Z" fill="white" />
    <path
      d="M29.8056 38.9438C30.742 38.2247 30.8401 36.8491 30.0153 36.0043L18.0132 23.7111C17.4945 23.1798 16.626 23.2286 16.1701 23.8148L16.1701 45.4177C16.1701 47.052 18.0449 47.976 19.341 46.9806L29.8056 38.9438Z"
      fill="rgba(var(--primaryColorLightest), var(--primaryColorLightestAlpha))"
      fillOpacity="1"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.6481 25.4528L28.9578 37.0368C29.164 37.2481 29.1394 37.5919 28.9053 37.7717L18.4408 45.8085C18.1168 46.0574 17.6481 45.8264 17.6481 45.4178L17.6481 25.4528ZM30.0153 36.0044C30.8401 36.8492 30.742 38.2247 29.8056 38.9439L19.341 46.9807C18.0449 47.9761 16.1701 47.052 16.1701 45.4178L16.1701 23.8149C16.626 23.2287 17.4945 23.1798 18.0132 23.7112L30.0153 36.0044Z"
      fill="rgba(var(--primaryColor), var(--primaryColorAlpha))"
      fillOpacity="1"
    />
    <path
      d="M39.6065 38.9438C38.6701 38.2247 38.572 36.8491 39.3968 36.0043L51.3989 23.7111C51.9176 23.1798 52.7861 23.2286 53.242 23.8148L53.242 45.4177C53.242 47.052 51.3672 47.976 50.0711 46.9806L39.6065 38.9438Z"
      fill="rgba(var(--primaryColorLightest), var(--primaryColorLightestAlpha))"
      fillOpacity="1"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M51.764 25.4527L40.4543 37.0368C40.2481 37.248 40.2727 37.5919 40.5068 37.7717L50.9713 45.8084C51.2954 46.0573 51.764 45.8263 51.764 45.4177L51.764 25.4527ZM39.3968 36.0043C38.572 36.8491 38.6701 38.2247 39.6065 38.9438L50.0711 46.9806C51.3672 47.976 53.242 47.052 53.242 45.4177L53.242 23.8148C52.7861 23.2286 51.9176 23.1798 51.3989 23.7111L39.3968 36.0043Z"
      fill="rgba(var(--primaryColor), var(--primaryColorAlpha))"
      fillOpacity="1"
    />
    <path
      d="M33.5366 31.6221C34.2379 31.095 35.2033 31.095 35.9046 31.6221L52.6157 44.1829C54.1287 45.3201 53.3244 47.7288 51.4316 47.7288H18.0096C16.1169 47.7288 15.3126 45.3201 16.8256 44.1829L33.5366 31.6221Z"
      fill="rgba(var(--primaryColorLightest), var(--primaryColorLightestAlpha))"
      fillOpacity="1"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M51.7277 45.3643L35.0166 32.8036C34.8413 32.6718 34.5999 32.6718 34.4246 32.8036L17.7136 45.3643C17.3353 45.6486 17.5364 46.2508 18.0096 46.2508H51.4316C51.9048 46.2508 52.1059 45.6486 51.7277 45.3643ZM35.9046 31.6221C35.2033 31.095 34.2379 31.095 33.5366 31.6221L16.8256 44.1829C15.3126 45.3201 16.1169 47.7288 18.0096 47.7288H51.4316C53.3244 47.7288 54.1287 45.3201 52.6157 44.1829L35.9046 31.6221Z"
      fill="rgba(var(--primaryColor), var(--primaryColorAlpha))"
      fillOpacity="1"
    />
    <path
      d="M33.3805 40.9461C34.1363 41.6523 35.3095 41.654 36.0672 40.9499L52.7857 25.4166C54.0976 24.1977 53.2351 22.0023 51.4444 22.0023L18.1022 22.0023C16.3141 22.0023 15.4503 24.192 16.7568 25.4128L33.3805 40.9461Z"
      fill="rgba(var(--primaryColorLightest), var(--primaryColorLightestAlpha))"
      fillOpacity="1"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M51.7797 24.3338L35.0613 39.8671C34.8718 40.0432 34.5785 40.0427 34.3896 39.8662L17.7658 24.3329C17.4392 24.0277 17.6552 23.4803 18.1022 23.4803L51.4444 23.4803C51.8921 23.4803 52.1077 24.0291 51.7797 24.3338ZM36.0672 40.9499C35.3095 41.654 34.1363 41.6523 33.3805 40.9461L16.7568 25.4128C15.4503 24.192 16.3141 22.0023 18.1022 22.0023L51.4444 22.0023C53.2351 22.0023 54.0976 24.1977 52.7857 25.4166L36.0672 40.9499Z"
      fill="rgba(var(--primaryColor), var(--primaryColorAlpha))"
      fillOpacity="1"
    />
  </svg>
);

const notification = props => (
  <svg
    {...props}
    viewBox="0 0 78 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.932617"
      y="0.951172"
      width="75.7873"
      height="27.3258"
      rx="1.125"
      strokeWidth="1.75"
      fill="rgba(var(--primaryColorLightest), var(--primaryColorLightestAlpha))"
      stroke="rgba(var(--primaryColor), var(--primaryColorAlpha))"
    />
    <rect
      x="7.75"
      y="9.75"
      width="17.5"
      height="11.5"
      strokeWidth="1.5"
      stroke="rgba(var(--primaryColor), var(--primaryColorAlpha))"
    />
    <path
      d="M8 10L16.5 17L25 10"
      strokeWidth="1.5"
      stroke="rgba(var(--primaryColor), var(--primaryColorAlpha))"
    />
    <rect
      x="34.8726"
      y="10"
      width="22.4131"
      height="2.5"
      rx="1.25"
      fill="rgba(var(--primaryColor), var(--primaryColorAlpha))"
    />
    <rect
      x="34.8726"
      y="16.4707"
      width="32.37"
      height="2.5"
      rx="1.25"
      fill="rgba(var(--primaryColor), var(--primaryColorAlpha))"
    />
  </svg>
);

const phone = props => (
  <svg
    {...props}
    viewBox="0 0 90 159"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M56.7799 12H32.8726V10.25H56.7799V12Z" fill="var(--gray)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50.94 147.02C50.94 150.593 48.0433 153.49 44.47 153.49C40.8967 153.49 38 150.593 38 147.02C38 143.446 40.8967 140.55 44.47 140.55C48.0433 140.55 50.94 143.446 50.94 147.02ZM49.19 147.02C49.19 149.626 47.0768 151.74 44.47 151.74C41.8632 151.74 39.75 149.626 39.75 147.02C39.75 144.413 41.8632 142.3 44.47 142.3C47.0768 142.3 49.19 144.413 49.19 147.02Z"
      fill="var(--gray)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 7C0 3.13401 3.13401 0 7 0H83C86.866 0 90 3.13401 90 7V152C90 155.866 86.866 159 83 159H7C3.13401 159 0 155.866 0 152V7ZM83 1.75H7C4.10051 1.75 1.75 4.10051 1.75 7V20.6631H88.25V7C88.25 4.10051 85.8995 1.75 83 1.75ZM88.25 22.4131H1.75V134.679H88.25V22.4131ZM88.25 136.429H1.75V152C1.75 154.899 4.10051 157.25 7 157.25H83C85.8995 157.25 88.25 154.899 88.25 152V136.429Z"
      fill="var(--gray)"
    />
  </svg>
);

const CheckMail = ({ email }) => (
  <div
    className={css`
      text-align: center;
    `}
  >
    <div
      className={css`
        margin-bottom: 24px;
      `}
    >
      {verify({ width: 69 })}
    </div>
    <h1>{translate("Check your email")}</h1>
    <Paragraph>
      {translate("We emailed a magic link to")}
      <br />
      <strong>{email}</strong>
      <br />
      {translate("Click the link to log in or sign up")}
    </Paragraph>
    <Spacer s={32} />
    <div
      className={css`
        position: relative;
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 14%;
          width: 100%;
          height: 50%;
          overflow: hidden;
        `}
      >
        <div
          className={css`
            position: absolute;
            margin: 0 auto;
            left: 0;
            right: 0;
            top: -10px;
            animation: ${slideIn} 2s cubic-bezier(0.525, 0.585, 0.032, 1.375)
              infinite;
          `}
        >
          <div
            role="presentation"
            className={css`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            {notification({ height: 30 })}
          </div>
        </div>
      </div>
      <div
        role="presentation"
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        {phone({ width: 90 })}
      </div>
    </div>
  </div>
);

export default CheckMail;
