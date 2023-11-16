import * as React from "react";
import type { SVGProps } from "react";
const SvgBowling = (props: SVGProps<SVGSVGElement>) => {
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
      <circle
        cx={12}
        cy={7}
        r={1.5}
        stroke="currentColor"
        strokeWidth={1.5}
        transform="rotate(-90 12 7)"
      />
      <circle
        cx={12}
        cy={12}
        r={1.5}
        stroke="currentColor"
        strokeWidth={1.5}
        transform="rotate(-90 12 12)"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      />
    </svg>
  );
};
export default SvgBowling;
