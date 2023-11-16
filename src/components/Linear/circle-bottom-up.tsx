import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleBottomUp = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m3 21 8-8m0 0H5m6 0v6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12"
      />
    </svg>
  );
};
export default SvgCircleBottomUp;
