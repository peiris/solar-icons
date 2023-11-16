import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPointWave = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M5 8.515C5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.277 3.277 0 0 1-2.56 0C7.234 16.25 5 12.084 5 8.515Z"
      />
      <path
        stroke="currentColor"
        
        d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M20.96 15.5c.666.602 1.04 1.282 1.04 2 0 2.485-4.477 4.5-10 4.5S2 19.985 2 17.5c0-.718.374-1.398 1.04-2"
      />
    </svg>
  );
};
export default SvgMapPointWave;
