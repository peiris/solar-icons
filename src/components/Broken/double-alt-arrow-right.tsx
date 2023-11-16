import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleAltArrowRight = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m11 19 6-7-1.5-1.75M11 5l2 2.333M7 5l6 7-1.5 1.75M7 19l2-2.333"
      />
    </svg>
  );
};
export default SvgDoubleAltArrowRight;
