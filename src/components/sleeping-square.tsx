import * as React from "react";
import type { SVGProps } from "react";
const SvgSleepingSquare = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1M13.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2M17 4l3.464-2L19 7.464l3.464-2" />
      <path d="m14.048 5.5 1.732 1-2.732.732 1.732 1" />
    </svg>
  );
};
export default SvgSleepingSquare;