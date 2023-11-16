import * as React from "react";
import type { SVGProps } from "react";
const SvgListArrowDownMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M11 16H3M12 11H3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m15 14.5 2.5 2.5m0 0 2.5-2.5M17.5 17V9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M3 6h10.5M20 6h-2.25"
      />
    </svg>
  );
};
export default SvgListArrowDownMinimalistic;
