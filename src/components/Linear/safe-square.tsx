import * as React from "react";
import type { SVGProps } from "react";
const SvgSafeSquare = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M6 7v10"
      />
      <path
        stroke="currentColor"
        
        d="M11 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M16.5 9.5 18 8M10 16l1.5-1.5M11.5 9.5 10 8M18 16l-1.5-1.5"
      />
    </svg>
  );
};
export default SvgSafeSquare;
