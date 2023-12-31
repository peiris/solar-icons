import * as React from "react";
import type { SVGProps } from "react";
const SvgFridge = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M4 10v3c0 3.771 0 5.657 1.172 6.828C6.343 21 8.229 21 12 21c3.771 0 5.657 0 6.828-1.172C20 18.657 20 16.771 20 13v-3c0-3.771 0-5.657-1.172-6.828C17.657 2 15.771 2 12 2 8.229 2 6.343 2 5.172 3.172 4.518 3.825 4.229 4.7 4.102 6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        
        d="M17 21v1h-1v-1m-8 0v1H7v-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M20 11.5h-5m-11 0h7M17 7v2M17 14v2"
      />
    </svg>
  );
};
export default SvgFridge;
