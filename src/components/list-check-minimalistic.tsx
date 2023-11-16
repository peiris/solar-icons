import * as React from "react";
import type { SVGProps } from "react";
const SvgListCheckMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M20 6H3M10 11H3M10 16H3M14 13.5l2.1 2.5 3.9-5" />
    </svg>
  );
};
export default SvgListCheckMinimalistic;
