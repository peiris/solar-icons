import * as React from "react";
import type { SVGProps } from "react";
const SvgUserBlockRounded = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m19.95 16.05-3.9 3.9"
      />
      <circle cx={18} cy={18} r={3} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13 20.96c-.327.026-.66.04-1 .04-3.866 0-7-1.79-7-4 0-.345.077-.68.22-1m9.28-2.737c-.776-.17-1.62-.263-2.5-.263-1.074 0-2.09.138-3 .385"
      />
    </svg>
  );
};
export default SvgUserBlockRounded;
