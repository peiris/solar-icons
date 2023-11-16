import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnet = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M21 18.5v2a1.5 1.5 0 0 1-1.5 1.5H13C7.477 22 3 17.523 3 12S7.477 2 13 2h6.5A1.5 1.5 0 0 1 21 3.5v2A1.5 1.5 0 0 1 19.5 7H13a5 5 0 0 0 0 10h6.5a1.5 1.5 0 0 1 1.5 1.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 2v5m0 10v5"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgMagnet;
