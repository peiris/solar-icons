import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrophoneLarge = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M6 8a6 6 0 1 1 12 0v5a6 6 0 0 1-12 0V8Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M10 6.5s.473-.5 2-.5c1.527 0 2 .5 2 .5M10 9.5s.473-.5 2-.5c1.527 0 2 .5 2 .5M21 11v2a9 9 0 1 1-18 0v-2"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgMicrophoneLarge;
