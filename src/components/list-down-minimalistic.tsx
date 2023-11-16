import * as React from "react";
import type { SVGProps } from "react";
const SvgListDownMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M20 6H3M20 11H3M10 16H3M14 15l3.5 3 3.5-3" />
    </svg>
  );
};
export default SvgListDownMinimalistic;
