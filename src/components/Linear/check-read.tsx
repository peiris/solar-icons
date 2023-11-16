import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckRead = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m4 12.9 3.143 3.6L15 7.5M20 7.563l-8.572 9L11 16"
      />
    </svg>
  );
};
export default SvgCheckRead;
