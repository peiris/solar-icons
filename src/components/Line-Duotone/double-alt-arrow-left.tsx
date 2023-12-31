import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleAltArrowLeft = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m13 19-6-7 6-7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m17 19-6-7 6-7"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgDoubleAltArrowLeft;
