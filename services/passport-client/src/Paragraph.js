import React from "react";
import { css } from "emotion";
const Paragraph = ({ children }) => (
  <div
    className={css`
      font-size: 21px;
      line-height: 150%;
    `}
  >
    {children}
  </div>
);

export default Paragraph;
