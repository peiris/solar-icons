import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundGraph = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.97 9.97 0 0 1 3-7.141"
        opacity={0.4}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M5 12a7 7 0 1 0 7-7"
        opacity={0.7}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 16a4 4 0 0 0 0-8"
      />
    </svg>
  );
};
export default SvgRoundGraph;
