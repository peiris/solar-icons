import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaylistMinimalistic2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M15 6H3M13 10H3M9 14H3M8 18H3"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M17 16.5V8"
      />
      <circle
        cx={14.5}
        cy={16.5}
        r={2.5}
        stroke="currentColor"
        
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M21 12a4 4 0 0 1-4-4"
      />
    </svg>
  );
};
export default SvgPlaylistMinimalistic2;
