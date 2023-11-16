import * as React from "react";
import type { SVGProps } from "react";
const SvgRewind5SecondsForward = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="M10 4.5 12 2C6.477 2 2 6.477 2 12c0 .685.069 1.354.2 2M16 2.832C19.532 4.375 22 7.9 22 12c0 5.523-4.477 10-10 10a9.984 9.984 0 0 1-8-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H12a2 2 0 1 1 0 4h-2"
      />
    </svg>
  );
};
export default SvgRewind5SecondsForward;
