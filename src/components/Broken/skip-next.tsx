import * as React from "react";
import type { SVGProps } from "react";
const SvgSkipNext = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 11v7.967c0 2.31 2.134 3.769 3.87 2.648l10.79-6.968c1.787-1.154 1.787-4.14 0-5.294L5.87 2.385C4.135 1.264 2 2.724 2 5.033V7M22 5v7m0 4v3"
      />
    </svg>
  );
};
export default SvgSkipNext;
