import * as React from "react";
import type { SVGProps } from "react";
const SvgIncognito = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M21 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M2 11h20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m4 11 .614-2.455c.545-2.183.818-3.274 1.632-3.91C7.06 4 8.185 4 10.435 4h3.13c2.25 0 3.375 0 4.189.635.814.636 1.086 1.727 1.632 3.91L20 11"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        
        d="M10 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m10 17.5.658-.33a3 3 0 0 1 2.684 0l.658.33"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgIncognito;
