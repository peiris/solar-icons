import * as React from "react";
import type { SVGProps } from "react";
const SvgUserSpeakRounded = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={10} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} />
      <ellipse
        cx={10}
        cy={17}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={7}
        ry={4}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19 2s2 1.2 2 4-2 4-2 4M17 4s1 .6 1 2-1 2-1 2"
      />
    </svg>
  );
};
export default SvgUserSpeakRounded;
