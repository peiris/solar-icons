import * as React from "react";
import type { SVGProps } from "react";
const SvgMenuDotsCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M8 12h.009m3.996 0h.008m3.978 0H16" />
      <circle cx={12} cy={12} r={10} />
    </svg>
  );
};
export default SvgMenuDotsCircle;
