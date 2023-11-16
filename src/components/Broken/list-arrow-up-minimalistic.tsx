import * as React from "react";
import type { SVGProps } from "react";
const SvgListArrowUpMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M11 11H3M12 16H3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M15 11.5 17.5 9m0 0 2.5 2.5M17.5 9v8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M20 6H9.5M3 6h2.25"
      />
    </svg>
  );
};
export default SvgListArrowUpMinimalistic;
