import * as React from "react";
import type { SVGProps } from "react";
const SvgMinimalisticMagniferZoomIn = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M9 11.5h2.5m0 0H14m-2.5 0V14m0-2.5V9M20 20l2 2"
      />
    </svg>
  );
};
export default SvgMinimalisticMagniferZoomIn;
