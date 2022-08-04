import React from "react";

const Signature = () => {
  return (
    <span className="signature">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="320"
        height="100"
        viewBox="0 0 320 100"
      >
        <text
          transform="translate(160 64)"
          fill="rgba(75,75,75,0.8)"
          fontSize="80"
          fontFamily="Allura-Regular, Allura"
        >
          <tspan x="-160" y="0">
            SashkaChi.
          </tspan>
        </text>
      </svg>
    </span>
  );
};

export default Signature;
