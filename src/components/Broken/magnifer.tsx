import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnifer = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M18.5 18.5 22 22M6.75 3.27a9.5 9.5 0 1 1-3.48 3.48"
      />
    </svg>
  );
};
export default SvgMagnifer;
