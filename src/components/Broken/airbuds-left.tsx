import * as React from "react";
import type { SVGProps } from "react";
const SvgAirbudsLeft = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 18.667v.833c0 .14 0 .209.003.268a2.35 2.35 0 0 0 2.23 2.229C4.29 22 4.36 22 4.5 22c.14 0 .209 0 .268-.003a2.35 2.35 0 0 0 2.229-2.23C7 19.71 7 19.64 7 19.5v-.833m-5 0h5m-5 0L2.003 13M7 18.667V12a1 1 0 0 1 1-1 3 3 0 0 0 3-3V5.335A3.353 3.353 0 0 0 7.664 2H7.56A5.588 5.588 0 0 0 2 7.56V9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.676}
        d="M8 5v3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M15.5 11a5.5 5.5 0 1 0 5.5 5.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M14 14v5h3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14 5.1A5.006 5.006 0 0 1 17.9 9"
      />
    </svg>
  );
};
export default SvgAirbudsLeft;
