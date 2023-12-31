import * as React from "react";
import type { SVGProps } from "react";
const SvgCart4 = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
      width={24}
      height={24}
      {...props}
    >
      <path
        fill="currentColor"
        d="M3.045 11.75c.126.714.303 1.541.51 2.507l.428 2c.487 2.273.731 3.409 1.556 4.076C6.364 21 7.526 21 9.85 21h4.3c2.324 0 3.486 0 4.31-.667.826-.667 1.07-1.803 1.556-4.076l.429-2c.207-.966.384-1.793.51-2.507H3.045Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.25 14a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.33 2.665a.75.75 0 0 1 1.341.67l-1.835 3.67C8.32 7 8.846 7 9.422 7h5.156c.576 0 1.103 0 1.586.005l-1.835-3.67a.75.75 0 0 1 1.342-.67l2.201 4.402c1.353.104 2.202.37 2.75 1.047.436.539.576 1.209.525 2.136H21c.05 0 .099.005.146.014-.025.435-.092.926-.19 1.486H3.045a13.081 13.081 0 0 1-.192-1.486A.76.76 0 0 1 3 10.25h-.147c-.051-.927.09-1.597.525-2.136.548-.678 1.397-.943 2.75-1.047L8.33 2.665Z"
      />
    </svg>
  );
};
export default SvgCart4;
