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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18 8v5a6 6 0 0 1-12 0V8a6 6 0 0 1 10.472-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10 6.5s.473-.5 2-.5c1.527 0 2 .5 2 .5M10 9.5s.473-.5 2-.5c1.527 0 2 .5 2 .5M21 11v2a9 9 0 0 1-5 8.064M3 11v2a9 9 0 0 0 9 9"
      />
    </svg>
  );
};
export default SvgMicrophoneLarge;
