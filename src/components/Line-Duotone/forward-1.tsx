import * as React from "react";
import type { SVGProps } from "react";
const SvgForward1 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m14.5 7 5 5-5 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M19.5 12h-10c-1.667 0-5 1-5 5"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgForward1;
