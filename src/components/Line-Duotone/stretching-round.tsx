import * as React from "react";
import type { SVGProps } from "react";
const SvgStretchingRound = (props: SVGProps<SVGSVGElement>) => {
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
        cx={14.5}
        cy={4.5}
        r={2.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m7.948 13.435-.025-.024c-1.042-1.007-.237-2.626.67-3.268.907-.643 4.752-1.643 4.752 3.291C13.345 18.13 9.695 22 5 22"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19 21.996V18.05c0-1.776-1.605-3.129-3.373-2.844"
      />
    </svg>
  );
};
export default SvgStretchingRound;
