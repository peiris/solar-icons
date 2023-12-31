import * as React from "react";
import type { SVGProps } from "react";
const SvgStretching = (props: SVGProps<SVGSVGElement>) => {
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
        cx={14.5}
        cy={4.5}
        r={2.5}
        stroke="currentColor"
        
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m5 22 3.849-1.373a2 2 0 0 0 1.073-.907M19 22v-5.232a2 2 0 0 0-2.32-1.974l-1.013.165M8.5 14l-.614-.598a1.5 1.5 0 0 1 .456-2.453l2.456-1.053a1.5 1.5 0 0 1 2.09 1.38v2.62a2 2 0 0 1-.254.976l-.678 1.212"
      />
    </svg>
  );
};
export default SvgStretching;
