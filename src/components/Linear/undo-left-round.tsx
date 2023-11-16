import * as React from "react";
import type { SVGProps } from "react";
const SvgUndoLeftRound = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="M4 7h11a5 5 0 0 1 0 10H8M4 7l3-3M4 7l3 3"
      />
    </svg>
  );
};
export default SvgUndoLeftRound;
