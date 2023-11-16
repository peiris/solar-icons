import * as React from "react";
import type { SVGProps } from "react";
const SvgSiderbar = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 11c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172C22 5.343 22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828C19.657 21 17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172C2 18.657 2 16.771 2 13v-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M5.5 10h6M6.5 14h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M15 21V3"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgSiderbar;
