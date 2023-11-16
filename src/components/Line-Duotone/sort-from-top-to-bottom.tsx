import * as React from "react";
import type { SVGProps } from "react";
const SvgSortFromTopToBottom = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M4 16h9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M6 11h7"
        opacity={0.7}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M8 6h5"
        opacity={0.3}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M17 4v16l3-4"
      />
    </svg>
  );
};
export default SvgSortFromTopToBottom;
