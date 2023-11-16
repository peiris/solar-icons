import * as React from "react";
import type { SVGProps } from "react";
const SvgSortHorizontal = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
      width={24}
      height={24}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 8 4.125-4M6 8l4.125 4M6 8h7m5 0h-2M18 16l-4.125-4M18 16l-4.125 4M18 16h-7m-5 0h2"
      />
    </svg>
  );
};
export default SvgSortHorizontal;
