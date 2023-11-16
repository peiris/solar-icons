import * as React from "react";
import type { SVGProps } from "react";
const SvgTuning = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M14 14.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM4 9.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7 13v5m0 3v1M17 11V6m0-3V2M17 22v-4M7 2v4"
      />
    </svg>
  );
};
export default SvgTuning;
