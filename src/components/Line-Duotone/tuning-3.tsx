import * as React from "react";
import type { SVGProps } from "react";
const SvgTuning3 = (props: SVGProps<SVGSVGElement>) => {
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
      <circle
        cx={12}
        cy={12}
        r={2}
        stroke="currentColor"
        strokeWidth={1.5}
        transform="rotate(180 12 12)"
      />
      <circle
        cx={20}
        cy={14}
        r={2}
        stroke="currentColor"
        strokeWidth={1.5}
        transform="rotate(180 20 14)"
      />
      <circle
        cx={2}
        cy={2}
        r={2}
        stroke="currentColor"
        strokeWidth={1.5}
        transform="matrix(-1 0 0 1 6 8)"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20 12V5M4 12v7M12 19v-5M20 19v-3M12 10V5M4 5v2.667"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgTuning3;
