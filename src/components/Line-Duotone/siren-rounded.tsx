import * as React from "react";
import type { SVGProps } from "react";
const SvgSirenRounded = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M20 22v-6a8 8 0 1 0-16 0v6"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14.29 11.5a4.014 4.014 0 0 1 2.21 2.21M2 22h20M12 2v3M21 6l-1.5 1.5M3 6l1.5 1.5"
      />
      <path
        stroke="currentColor"
        
        d="M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 19v3"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgSirenRounded;
