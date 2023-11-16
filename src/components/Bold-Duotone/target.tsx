import * as React from "react";
import type { SVGProps } from "react";
const SvgTarget = (props: SVGProps<SVGSVGElement>) => {
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
        fill="currentColor"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M9.25 12a.75.75 0 0 1 .75-.75h1.25V10a.75.75 0 0 1 1.5 0v1.25H14a.75.75 0 0 1 0 1.5h-1.25V14a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1-.75-.75ZM2.028 12.75a10.14 10.14 0 0 1 0-1.5H5a.75.75 0 0 1 0 1.5H2.028ZM12.75 21.972a10.119 10.119 0 0 1-1.5 0V19a.75.75 0 0 1 1.5 0v2.972ZM21.972 11.25a10.119 10.119 0 0 1 0 1.5H19a.75.75 0 0 1 0-1.5h2.972ZM12.75 2.028V5a.75.75 0 0 1-1.5 0V2.028a10.14 10.14 0 0 1 1.5 0Z"
      />
    </svg>
  );
};
export default SvgTarget;
