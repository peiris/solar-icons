import * as React from "react";
import type { SVGProps } from "react";
const SvgListCheckMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M10 11H3M10 16H3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m14 13.5 2.1 2.5 3.9-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M3 6h10.5M20 6h-2.25"
      />
    </svg>
  );
};
export default SvgListCheckMinimalistic;
