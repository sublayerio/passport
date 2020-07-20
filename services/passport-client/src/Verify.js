import React, { useState, useEffect } from "react";
import Stay from "./Stay";
import CheckMail from "./CheckMail";

const Verify = ({ email }) => {
  const [stay, setStay] = useState(false);

  useEffect(() => {
    let int = setInterval(() => setStay(!stay), 3000);

    return () => {
      clearInterval(int);
    };
  });

  if (stay) {
    return <Stay />;
  }

  return <CheckMail email={email} />;
};

export default Verify;
