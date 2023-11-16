import * as React from "react";
import type { SVGProps } from "react";
const SvgMinimalisticMagniferZoomOut = (props: SVGProps<SVGSVGElement>) => {
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
      <circle
        cx={11.5}
        cy={11.5}
        r={9.5}
        stroke="currentColor"
        
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M9 11.5h5M20 20l2 2"
      />
    </svg>
  );
};
export default SvgMinimalisticMagniferZoomOut;
