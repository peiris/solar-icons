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
        
        d="M2 18.667v.833a2.5 2.5 0 0 0 5 0v-.833m-5 0V7.559A5.588 5.588 0 0 1 7.56 2H7.664A3.353 3.353 0 0 1 11 5.336V8a3 3 0 0 1-3 3 1 1 0 0 0-1 1v6.667m-5 0h5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.676}
        d="M8 5v3"
        opacity={0.5}
      />
      <circle
        cx={5.5}
        cy={5.5}
        r={5.5}
        stroke="currentColor"
        
        opacity={0.5}
        transform="matrix(-1 0 0 1 21 11)"
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
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgAirbudsLeft;
