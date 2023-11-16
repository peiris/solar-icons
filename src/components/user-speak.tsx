import * as React from "react";
import type { SVGProps } from "react";
const SvgUserSpeak = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M18 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S5.582 13 10 13s8 2.015 8 4.5ZM19 2s2 1.2 2 4-2 4-2 4M17 4s1 .6 1 2-1 2-1 2" />
    </svg>
  );
};
export default SvgUserSpeak;
