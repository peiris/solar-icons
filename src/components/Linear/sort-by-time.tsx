import * as React from "react";
import type { SVGProps } from "react";
const SvgSortByTime = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M10 7H2M8 12H2M10 17H2"
      />
      <circle cx={17} cy={12} r={5} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M17 10v1.846L18 13"
      />
    </svg>
  );
};
export default SvgSortByTime;
