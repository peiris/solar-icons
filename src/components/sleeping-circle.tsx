import * as React from "react";
import type { SVGProps } from "react";
const SvgSleepingCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2" />
      <path d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1M13.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17 4l3.464-2L19 7.464l3.464-2M14.048 5.5l1.732 1-2.732.732 1.732 1" />
    </svg>
  );
};
export default SvgSleepingCircle;
