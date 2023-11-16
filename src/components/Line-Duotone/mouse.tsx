import * as React from "react";
import type { SVGProps } from "react";
const SvgMouse = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0V9Z"
      />
      <path
        stroke="currentColor"
        
        d="M10.5 8.5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0v-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 2v5"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgMouse;
