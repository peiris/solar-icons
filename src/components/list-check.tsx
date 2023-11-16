import * as React from "react";
import type { SVGProps } from "react";
const SvgListCheck = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m14 16 2.1 2.5 3.9-5M21 6H3M21 10H3M10 14H3M10 18H3" />
    </svg>
  );
};
export default SvgListCheck;
