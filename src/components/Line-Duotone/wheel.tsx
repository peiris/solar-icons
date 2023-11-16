import * as React from "react";
import type { SVGProps } from "react";
const SvgWheel = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={12} cy={12} r={6} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={12} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6 12h4M14 12h4M9 17.196l2-3.464M13 10.268l2-3.464M15 17.196l-2-3.464M11 10.268 9 6.804"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgWheel;
