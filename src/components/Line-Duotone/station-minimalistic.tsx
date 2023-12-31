import * as React from "react";
import type { SVGProps } from "react";
const SvgStationMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M13.25 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M7.008 14A7.06 7.06 0 0 1 5 9.055C5 5.159 8.134 2 12 2s7 3.159 7 7.055a7.06 7.06 0 0 1-1.977 4.913"
        opacity={0.4}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M8.988 12.004A4.236 4.236 0 0 1 7.8 9.054c0-2.337 1.88-4.232 4.2-4.232 2.32 0 4.2 1.895 4.2 4.233 0 1.13-.44 2.158-1.157 2.917"
        opacity={0.7}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m16 22-4-12-4 12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14.5 17.5h-5"
      />
    </svg>
  );
};
export default SvgStationMinimalistic;
