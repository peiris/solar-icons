import * as React from "react";
import type { SVGProps } from "react";
const SvgLogout = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M10 12h10m0 0-3-3m3 3-3 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M4 12a8 8 0 0 1 8-8m0 16a7.985 7.985 0 0 1-6.245-3"
      />
    </svg>
  );
};
export default SvgLogout;
