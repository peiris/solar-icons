import * as React from "react";
import type { SVGProps } from "react";
const SvgMinimize = (props: SVGProps<SVGSVGElement>) => {
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
        d="m2 22 7-7m0 0H3.143M9 15v5.857M22 2l-7 7m0 0h5.857M15 9V3.143"
      />
    </svg>
  );
};
export default SvgMinimize;
