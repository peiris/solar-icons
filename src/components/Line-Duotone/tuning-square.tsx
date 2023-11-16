import * as React from "react";
import type { SVGProps } from "react";
const SvgTuningSquare = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity={0.5}
      />
      <circle cx={8} cy={10} r={2} stroke="currentColor"  />
      <circle
        cx={2}
        cy={2}
        r={2}
        stroke="currentColor"
        
        transform="matrix(1 0 0 -1 14 16)"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M8 14v5M16 10V5M8 5v1M16 19v-1"
      />
    </svg>
  );
};
export default SvgTuningSquare;
