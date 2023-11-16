import * as React from "react";
import type { SVGProps } from "react";
const SvgWheelAngle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21 12c0 5.523-2.015 10-4.5 10m0-20c1.845 0 3.431 2.468 4.126 6M3 12C3 6.477 5.015 2 7.5 2S12 6.477 12 12 9.985 22 7.5 22c-1.845 0-3.431-2.468-4.126-6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.5 22c2.485 0 4.5-4.477 4.5-10S9.985 2 7.5 2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9 12c0 3.314-.672 6-1.5 6S6 15.314 6 12s.672-6 1.5-6S9 8.686 9 12ZM7.5 2h9M7.5 22h9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9 12H8"
      />
    </svg>
  );
};
export default SvgWheelAngle;
