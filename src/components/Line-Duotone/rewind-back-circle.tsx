import * as React from "react";
import type { SVGProps } from "react";
const SvgRewindBackCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m11 8.071-3.222 2.302a2 2 0 0 0 0 3.254L11 15.93m5.5-.872V8.943a1 1 0 0 0-1.581-.814l-4.28 3.057a1 1 0 0 0 0 1.628l4.28 3.057a1 1 0 0 0 1.581-.814Z"
      />
    </svg>
  );
};
export default SvgRewindBackCircle;
