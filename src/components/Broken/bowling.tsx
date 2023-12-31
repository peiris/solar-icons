import * as React from "react";
import type { SVGProps } from "react";
const SvgBowling = (props: SVGProps<SVGSVGElement>) => {
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
      <circle
        cx={12}
        cy={7}
        r={1.5}
        stroke="currentColor"
        
        transform="rotate(-90 12 7)"
      />
      <circle
        cx={12}
        cy={12}
        r={1.5}
        stroke="currentColor"
        
        transform="rotate(-90 12 12)"
      />
      <path
        stroke="currentColor"
        
        d="M8 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
    </svg>
  );
};
export default SvgBowling;
