import * as React from "react";
import type { SVGProps } from "react";
const SvgTextUnderlineCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12ZM8 17h8" />
      <path d="M8 7v3a4 4 0 0 0 8 0V7" />
    </svg>
  );
};
export default SvgTextUnderlineCircle;
