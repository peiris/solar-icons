import * as React from "react";
import type { SVGProps } from "react";
const SvgMagniferZoomOut = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={11.5} cy={11.5} r={9.5} stroke="#8E93A6"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M18.5 18.5 22 22M9 11.5h5"
      />
    </svg>
  );
};
export default SvgMagniferZoomOut;
