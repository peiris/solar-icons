import * as React from "react";
import type { SVGProps } from "react";
const SvgTuningSquare = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={8} cy={10} r={2} stroke="currentColor" strokeWidth={1.5} />
      <circle
        cx={2}
        cy={2}
        r={2}
        stroke="currentColor"
        strokeWidth={1.5}
        transform="matrix(1 0 0 -1 14 16)"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 14v5M16 10V5M8 5v1M16 19v-1M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
      />
    </svg>
  );
};
export default SvgTuningSquare;
