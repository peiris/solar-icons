import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleBottomDown = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m10 14-8 8m0 0h6m-6 0v-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 22c5.523 0 10-4.477 10-10 0-1.821-.487-3.53-1.338-5M2 12C2 6.477 6.477 2 12 2c1.821 0 3.53.487 5 1.338"
      />
    </svg>
  );
};
export default SvgCircleBottomDown;
