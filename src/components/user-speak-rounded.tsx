import * as React from "react";
import type { SVGProps } from "react";
const SvgUserSpeakRounded = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <circle cx={10} cy={6} r={4} />
      <ellipse cx={10} cy={17} rx={7} ry={4} />
      <path d="M19 2s2 1.2 2 4-2 4-2 4M17 4s1 .6 1 2-1 2-1 2" />
    </svg>
  );
};
export default SvgUserSpeakRounded;
