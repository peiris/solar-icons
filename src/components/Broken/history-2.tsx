import * as React from "react";
import type { SVGProps } from "react";
const SvgHistory2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 12c0 5.523 4.477 10 10 10 1.821 0 3.53-.487 5-1.338M12 2c5.523 0 10 4.477 10 10 0 1.821-.487 3.53-1.338 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M12 9v4h4"
      />
      <path
        stroke="currentColor"
        strokeDasharray="0.5 3.5"
        strokeLinecap="round"
        
        d="M17 20.662A9.955 9.955 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 1.821-.487 3.53-1.338 5"
      />
    </svg>
  );
};
export default SvgHistory2;
