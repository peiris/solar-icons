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
        
        d="M12 2c5.523 0 10 4.477 10 10 0 1.821-.487 3.53-1.338 5M5 4.859A9.97 9.97 0 0 0 2 12c0 5.523 4.477 10 10 10 1.821 0 3.53-.487 5-1.338"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M5 12c0 1.487.464 2.866 1.255 4M12 5a7 7 0 1 1-3 13.326"
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
