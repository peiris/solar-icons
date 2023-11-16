import * as React from "react";
import type { SVGProps } from "react";
const SvgSmileCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"
      />
      <path
        fill="currentColor"
        d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5Z"
      />
      <ellipse cx={9} cy={10.5} fill="currentColor" rx={1} ry={1.5} />
    </svg>
  );
};
export default SvgSmileCircle;
