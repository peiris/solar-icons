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
        
        d="M21.95 13c-.501 5.054-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.448 9-9.95"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M15 2.457a10.024 10.024 0 0 1 6.542 6.542M15 12V2.456"
      />
    </svg>
  );
};
export default SvgVinyl;
