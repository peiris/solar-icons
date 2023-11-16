import * as React from "react";
import type { SVGProps } from "react";
const SvgVinyl = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={3} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M21.95 13c-.501 5.054-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-1.821.487-3.529 1.338-5M11 2.05a9.937 9.937 0 0 0-4 1.288"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M15 12V2.456a10.024 10.024 0 0 1 6.542 6.542"
      />
    </svg>
  );
};
export default SvgVinyl;
