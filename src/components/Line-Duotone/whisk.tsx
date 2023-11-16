import * as React from "react";
import type { SVGProps } from "react";
const SvgWhisk = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M19.816 12.236c2.557-2.557 2.956-6.561.733-8.784-2.224-2.224-6.228-1.825-8.785.732-2.558 2.557-3.907 7.512-1.683 9.735 2.223 2.223 7.178.874 9.735-1.683Z"
      />
      <path
        stroke="currentColor"
        
        d="m12.9 15.127-6.04 6.039a2.847 2.847 0 0 1-4.026-4.026l6.039-6.039"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        
        d="M20.549 3.451c1.208 1.209-1.45 4.672-3.221 6.442-1.77 1.77-6.04 5.234-7.247 4.026-1.209-1.208 2.255-5.476 4.026-7.247 1.77-1.77 5.233-4.429 6.442-3.22Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgWhisk;
