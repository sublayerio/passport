import React from "react";
import { css, keyframes } from "emotion";
import translate from "./translate";
import Spacer from "./Spacer";
import Paragraph from "./Paragraph";

const hoverGlow = keyframes`
0% {
    transform: scale(1);
    background: rgba(var(--primaryColor),var(--primaryColorAlpha));
}
40% {
    transform: scale(1);
    background: rgba(var(--primaryColor),var(--primaryColorAlpha));
}
50% {
    transform: scale(1.1);
    background: rgba(var(--primaryColorLighter),var(--primaryColorLighterAlpha));
}
70% {
    transform: scale(1.1);
    background: rgba(var(--primaryColorLighter),var(--primaryColorLighterAlpha));
}
100% {
    transform: scale(1);
    background: rgba(var(--primaryColor),var(--primaryColorAlpha));
}
`;

const handTurn = keyframes`
0% {
    transform: rotate(30deg) translateX(35px) translateY(-20px);
}
50% {
    transform: rotate(0deg) translateX(0) translateY(0);
}
70% {
    transform: rotate(0deg) translateX(0) translateY(0);
}
100% {
    transform: rotate(30deg) translateX(35px) translateY(-20px);
}
`;

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
      fillOpacity="1"
    />
    <path
      d="M23.1824 41.3005L28.5599 46.6636L25.733 49.483L16.0862 39.8619C15.3046 39.0824 15.3046 37.8239 16.0862 37.0444L25.733 27.4233L28.5599 30.2427L23.1824 35.6058L22.3261 36.4599H23.5355H45.0002C48.0325 36.4599 50.5001 34.0008 50.5001 30.9732C50.5001 27.9457 48.0325 25.4866 45.0002 25.4866H33.0004V21.5H45.0002C50.2402 21.5 54.5 25.7504 54.5 30.9732C54.5 36.1961 50.2402 40.4465 45.0002 40.4465H23.5355H22.3261L23.1824 41.3005Z"
      fill="rgba(var(--primaryColor), var(--primaryColorAlpha))"
      fillOpacity="1"
      stroke="rgba(var(--primaryColorLightest), var(--primaryColorLightestAlpha))"
      strokeOpacity="1"
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
    width="90"
    height="159"
    viewBox="0 0 90 159"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M56.7799 12H32.8726V10.25H56.7799V12Z" fill="var(--gray)" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M50.94 147.02C50.94 150.593 48.0433 153.49 44.47 153.49C40.8967 153.49 38 150.593 38 147.02C38 143.446 40.8967 140.55 44.47 140.55C48.0433 140.55 50.94 143.446 50.94 147.02ZM49.19 147.02C49.19 149.626 47.0768 151.74 44.47 151.74C41.8632 151.74 39.75 149.626 39.75 147.02C39.75 144.413 41.8632 142.3 44.47 142.3C47.0768 142.3 49.19 144.413 49.19 147.02Z"
      fill="var(--gray)"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 7C0 3.13401 3.13401 0 7 0H83C86.866 0 90 3.13401 90 7V152C90 155.866 86.866 159 83 159H7C3.13401 159 0 155.866 0 152V7ZM83 1.75H7C4.10051 1.75 1.75 4.10051 1.75 7V20.6631H88.25V7C88.25 4.10051 85.8995 1.75 83 1.75ZM88.25 22.4131H1.75V134.679H88.25V22.4131ZM88.25 136.429H1.75V152C1.75 154.899 4.10051 157.25 7 157.25H83C85.8995 157.25 88.25 154.899 88.25 152V136.429Z"
      fill="var(--gray)"
    />
  </svg>
);

const button = props => (
  <svg
    {...props}
    viewBox="0 0 56 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 0H40V16.4211H16V0ZM18.7306 1.5L28.0005 9.13403L37.2704 1.5H18.7306ZM17.5 2.42975V14.9211H38.5V2.43056L28.0005 11.0772L17.5 2.42975Z"
      fill="var(--gray)"
    />
    <path
      d="M0.5 29.25C0.5 28.5596 1.05964 28 1.75 28H37.3323C38.0226 28 38.5823 28.5596 38.5823 29.25C38.5823 29.9404 38.0226 30.5 37.3323 30.5H1.75C1.05964 30.5 0.5 29.9404 0.5 29.25Z"
      fill="var(--gray)"
    />
    <path
      d="M1.75 36.4707C1.05964 36.4707 0.5 37.0303 0.5 37.7207C0.5 38.4111 1.05964 38.9707 1.75 38.9707H54.25C54.9404 38.9707 55.5 38.4111 55.5 37.7207C55.5 37.0303 54.9404 36.4707 54.25 36.4707H1.75Z"
      fill="var(--gray)"
    />
  </svg>
);

const Verify = () => (
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
      {stay({ width: 69 })}
    </div>
    <h1>{translate("Don't close this tab")}</h1>
    <Paragraph>
      {translate("Come back to this tab after you click your magic link.")}
    </Paragraph>
    <Spacer s={32} />
    <div
      className={css`
        position: relative;
        display: inline-block;
      `}
    >
      <div
        className={css`
          position: absolute;
          bottom: -10%;
          right: -50%;
          z-index: 1;
          transform: rotate(30deg) translateX(35px) translateY(-20px);
          animation: ${handTurn} 1.5s ease-in-out infinite;
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
          <svg
            width="88"
            height="78"
            viewBox="0 0 88 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.9613 50.2237L20.9548 50.2307L20.9483 50.2377C18.7897 52.5796 18.9111 56.006 21.2622 58.1731C21.3869 58.2879 21.5556 58.404 21.6393 58.4616L21.6504 58.4693C21.7842 58.5615 21.9594 58.6786 22.1672 58.815C22.5845 59.0889 23.1564 59.456 23.8402 59.8881C25.2078 60.7523 27.0382 61.8861 29.0062 63.0725C30.4531 63.9596 32.1009 64.9715 33.736 65.9756C36.4922 67.6682 39.2125 69.3387 40.8744 70.3525C46.2765 73.7172 49.8954 75.2314 54.2973 75.8632C59.8602 76.6889 66.0332 75.7233 70.7292 73.3376C72.1413 72.622 73.9294 71.3981 75.5838 70.0911C77.2353 68.7863 78.8564 67.3174 79.9071 66.0692C87.4644 57.2701 88.5884 43.9268 82.6959 33.8687L82.6923 33.8627C82.2314 33.0843 80.974 31.4093 79.4065 29.4036C77.8075 27.3575 75.8064 24.8681 73.7872 22.4034C71.768 19.9387 69.7252 17.4923 68.0423 15.5325C66.3952 13.6143 65.0096 12.0629 64.35 11.476L64.3444 11.471C62.6962 10.019 60.9488 8.99907 59.2769 8.56551C57.6029 8.13138 55.8402 8.25782 54.4756 9.37581C53.5359 10.1456 53.108 11.4483 52.9657 12.4615C52.8882 13.0131 52.8766 13.5969 52.9578 14.1516C53.0361 14.6874 53.2179 15.3102 53.6214 15.8333L53.6348 15.8507L53.6488 15.8678C53.7324 15.9698 53.9107 16.1975 54.1681 16.5262C54.3361 16.7408 54.5379 16.9985 54.769 17.2923C55.3376 18.0152 56.0572 18.9227 56.8049 19.8355C58.2151 21.615 58.8286 22.5327 59.0319 23.0572C58.7866 22.8212 58.4659 22.4918 58.0728 22.0695C57.165 21.0943 55.9367 19.6949 54.4892 17.9857L54.4674 17.957L54.3395 17.7901C54.2292 17.6464 54.071 17.4411 53.8786 17.1932C53.4942 16.6979 52.9713 16.0305 52.4197 15.3451C51.8702 14.6622 51.2828 13.9498 50.7717 13.3692C50.517 13.0799 50.2697 12.8101 50.0484 12.5883C49.8598 12.3993 49.5882 12.1392 49.3038 11.9684C49.275 11.9511 49.2458 11.9335 49.2163 11.9157C48.8724 11.7082 48.4789 11.4708 48.0487 11.3446C47.5405 11.1954 47.0556 11.2162 46.6345 11.2343L46.6226 11.2348C46.1417 11.2554 45.5791 11.4246 45.0828 11.6232C44.5475 11.8373 43.9422 12.1452 43.3546 12.5453C42.2331 13.309 40.9248 14.5869 40.6352 16.4132C40.6322 16.429 40.6287 16.4484 40.6248 16.4711C40.6158 16.5237 40.6045 16.5947 40.593 16.6807C40.5702 16.8516 40.5456 17.0887 40.5368 17.3647C40.5204 17.8845 40.5544 18.6848 40.8767 19.449C40.9871 19.7107 41.1579 19.9805 41.3009 20.1928C41.4595 20.4285 41.6514 20.6913 41.8569 20.962C42.2689 21.5045 42.7711 22.1245 43.2508 22.7028C43.7323 23.2833 44.2 23.8324 44.5467 24.2356C44.7202 24.4375 44.8639 24.6034 44.9645 24.7191L45.0814 24.8533L45.0978 24.872C46.9776 27.2538 47.8945 28.4459 48.3214 29.1323C48.341 29.1637 48.3586 29.1928 48.3746 29.2197C48.3338 29.1814 48.2875 29.1368 48.2355 29.0851C47.4699 28.324 46.1027 26.6995 43.2127 23.2595C40.1899 19.6548 38.4776 17.6293 37.2289 16.5985C36.5565 16.0434 35.8939 15.6654 35.123 15.5195C34.4001 15.3827 33.7193 15.4844 33.1723 15.5678L33.1723 15.5678L33.1621 15.5694C31.0679 15.9038 29.5084 17.2981 28.7953 19.355C28.5755 19.974 28.3721 20.652 28.3689 21.4072C28.3655 22.1959 28.5782 22.9351 28.9675 23.7142C29.6893 25.1584 31.1974 27.057 33.7098 30.1236C35.3428 32.1169 36.4623 33.5269 37.1643 34.4879C37.4042 34.8164 37.5834 35.0763 37.7128 35.2779C37.571 35.115 37.4086 34.9272 37.2264 34.7152C36.4902 33.8587 35.451 32.6316 34.1829 31.1233C31.6476 28.108 28.2087 23.9826 24.4743 19.482L24.4681 19.4744L24.4397 19.44L24.3293 19.306L23.9099 18.797L22.4103 16.9771C21.1677 15.4693 19.5074 13.4547 17.8363 11.4278C14.5098 7.3931 11.1004 3.26026 10.9099 3.04163C10.4653 2.53136 9.85899 2.29534 9.56275 2.19423C9.38297 2.13287 9.22245 2.09085 9.10644 2.06385C9.04755 2.05014 8.99784 2.03978 8.96008 2.03238C8.94115 2.02866 8.92507 2.02566 8.91216 2.02333L8.89517 2.02032L8.88851 2.01918L8.88565 2.01869L8.88433 2.01847L8.8837 2.01837C8.8834 2.01831 8.8831 2.01826 8.63647 3.49785L8.8831 2.01826L8.83414 2.0101L8.78476 2.0052C6.69676 1.79776 4.8889 2.46674 3.65867 3.72895C2.44251 4.97672 1.87774 6.71829 2.09925 8.48274L2.1008 8.49512L2.10256 8.50747C2.13067 8.70476 2.17161 8.97125 2.27773 9.28941C2.38219 9.60257 2.53169 9.9142 2.7368 10.2631C3.13069 10.933 3.80901 11.87 4.98867 13.3819C7.36461 16.4268 11.9824 22.0633 21.0319 33.1091L21.0689 33.1543L39.0078 55.0506L38.9427 55.2433L38.9393 55.2535L38.936 55.2637C38.9039 55.3634 38.8726 55.4242 38.8517 55.4579C38.7748 55.4514 38.5927 55.4155 38.2823 55.2354C38.0662 55.11 37.5569 54.8015 36.857 54.3774C35.7953 53.7342 34.2949 52.8252 32.7135 51.8865C31.4384 51.1097 30.1762 50.3515 29.1696 49.7632C28.6661 49.4689 28.2197 49.2132 27.8645 49.0176C27.5658 48.8531 27.2373 48.6775 26.9968 48.5832C25.9528 48.1525 24.7935 48.2032 23.7831 48.4994C22.7521 48.8016 21.7459 49.394 20.9613 50.2237Z"
              fill="rgba(255, 255, 255, var(--secondaryColorAlpha))"
              stroke="rgba(var(--primaryColor), var(--primaryColorAlpha))"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
      <div
        className={css`
          background: rgba(var(--primaryColor), var(--primaryColorAlpha));
          width: 65%;
          height: 12%;
          position: absolute;
          top: 58%;
          left: 18%;
          border-radius: 4px;
          animation: ${hoverGlow} 1.5s ease-out infinite;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 25%;
          left: 20%;
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
          {button({ height: 39 })}
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

export default Verify;
