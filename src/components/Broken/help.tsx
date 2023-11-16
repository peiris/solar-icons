import * as React from "react";
import type { SVGProps } from "react";
const SvgHelp = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={4} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15 9 4-4M5 19l4-4M9 9 5 5M19 19l-4-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9.412 2.339a9.954 9.954 0 0 1 5.176.002c5.335 1.43 8.5 6.913 7.071 12.247-1.43 5.335-6.912 8.5-12.247 7.071-5.335-1.43-8.5-6.912-7.071-12.247a9.954 9.954 0 0 1 2.586-4.484"
      />
    </svg>
  );
};
export default SvgHelp;
