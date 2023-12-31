import * as React from "react";
import type { SVGProps } from "react";
const SvgUserCross = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={6} r={4} stroke="currentColor"  />
      <path
        stroke="currentColor"
        
        d="M15 13.327A13.57 13.57 0 0 0 12 13c-4.418 0-8 2.015-8 4.5S4 22 12 22c5.687 0 7.331-1.018 7.807-2.5"
        opacity={0.5}
      />
      <circle cx={18} cy={16} r={4} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="m16.667 14.667 2.666 2.666m0-2.666-2.666 2.666"
      />
    </svg>
  );
};
export default SvgUserCross;
