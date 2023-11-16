import * as React from "react";
import type { SVGProps } from "react";
const SvgTurntable = (props: SVGProps<SVGSVGElement>) => {
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
        d="m15 17 .894-.447A2 2 0 0 0 17 14.763V10.5"
      />
      <rect
        width={8}
        height={8}
        x={6}
        y={8}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={4}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.5 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
      />
    </svg>
  );
};
export default SvgTurntable;
