import * as React from "react";
import type { SVGProps } from "react";
const SvgAltArrowDown = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m19 9-7 6-1.75-1.5M5 9l2.333 2"
      />
    </svg>
  );
};
export default SvgAltArrowDown;
