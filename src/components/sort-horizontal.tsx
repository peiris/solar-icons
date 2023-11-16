import * as React from "react";
import type { SVGProps } from "react";
const SvgSortHorizontal = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M18 8H6m0 0 4.125-4M6 8l4.125 4M6 16h12m0 0-4.125-4M18 16l-4.125 4" />
    </svg>
  );
};
export default SvgSortHorizontal;
