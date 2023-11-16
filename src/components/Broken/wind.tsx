import * as React from "react";
import type { SVGProps } from "react";
const SvgWind = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3 8h2m2-2.143V5.5A2.5 2.5 0 1 1 9.5 8H8M4 14h1m10 3v.5a3.5 3.5 0 1 0 3.5-3.5H9M2 11h6m7-3v-.5a3.5 3.5 0 1 1 3.5 3.5h-6.25"
      />
    </svg>
  );
};
export default SvgWind;
