import * as React from "react";
import type { SVGProps } from "react";
const SvgMenuDots = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M5 14a2 2 0 1 0-2-2"
      />
      <circle cx={12} cy={12} r={2} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M21 12a2 2 0 1 1-2-2"
      />
    </svg>
  );
};
export default SvgMenuDots;
