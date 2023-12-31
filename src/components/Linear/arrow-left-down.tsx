import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftDown = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M18 6 6 18m0 0V9m0 9h9"
      />
    </svg>
  );
};
export default SvgArrowLeftDown;
