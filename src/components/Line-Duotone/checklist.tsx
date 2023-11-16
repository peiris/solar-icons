import * as React from "react";
import type { SVGProps } from "react";
const SvgChecklist = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 5.5 3.214 7 7.5 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M2 12.5 3.214 14 7.5 10"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M2 19.5 3.214 21 7.5 17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 19H12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 12H12"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 5H12"
      />
    </svg>
  );
};
export default SvgChecklist;
