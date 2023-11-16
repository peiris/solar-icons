import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M9 12h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M9 18H8A6 6 0 0 1 8 6h1M15 6h1a6 6 0 0 1 0 12h-1"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgLinkMinimalistic;
