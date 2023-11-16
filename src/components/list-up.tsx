import * as React from "react";
import type { SVGProps } from "react";
const SvgListUp = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m14 18 3.5-3 3.5 3M21 6H3M21 10H3M11 14H3M11 18H3" />
    </svg>
  );
};
export default SvgListUp;
