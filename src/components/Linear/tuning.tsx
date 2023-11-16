import * as React from "react";
import type { SVGProps } from "react";
const SvgTuning = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M14 14.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM4 9.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M16.959 9V2M6.959 15v7M16.959 22v-2M6.959 2v2"
      />
    </svg>
  );
};
export default SvgTuning;
