import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkCircle = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M14 12a6 6 0 1 1-6-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M10 12a6 6 0 0 1 6-6m0 12a6 6 0 0 0 5-9.318"
      />
    </svg>
  );
};
export default SvgLinkCircle;
