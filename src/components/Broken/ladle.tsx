import * as React from "react";
import type { SVGProps } from "react";
const SvgLadle = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M2 5.684a3.684 3.684 0 0 1 7.368 0M22 14.5v1.184a6.316 6.316 0 0 1-12.632 0V9.158"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M16 12c-3.054 0-6.5 1.12-6.5 2.5S12.946 17 16 17s6-1.12 6-2.5c0-.72-.8-1.369-2-1.825"
      />
    </svg>
  );
};
export default SvgLadle;
