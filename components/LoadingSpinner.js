import React from "react";

import s from "./LoadingSpinner.module.css";

/** A looping rotating square. */
const LoadingSpinner = props => {
  return (
    <div className="flex justify-center align-center">
      <div className={s.skPlane} />
    </div>
  );
};

export default LoadingSpinner;
