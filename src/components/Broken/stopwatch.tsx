import * as React from "react";
import type { SVGProps } from "react";
const SvgStopwatch = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 13V9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M10 2h4M7.5 5.204A9 9 0 1 1 4.204 8.5"
      />
    </svg>
  );
};
export default SvgStopwatch;
