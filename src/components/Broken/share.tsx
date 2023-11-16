import * as React from "react";
import type { SVGProps } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M4 12a2.5 2.5 0 1 0 2.5-2.5M14 6.5 9 10M14 17.5 9 14M16.5 21a2.5 2.5 0 1 0-2.5-2.5M18.665 6.75a2.5 2.5 0 1 1-.915-3.415"
      />
    </svg>
  );
};
export default SvgShare;
