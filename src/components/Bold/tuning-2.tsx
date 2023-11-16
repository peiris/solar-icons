import * as React from "react";
import type { SVGProps } from "react";
const SvgTuning2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.25 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM14.25 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM8.75 6.209a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5h7ZM14.75 16.209a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM1 16.959a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM21.75 6.209a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h2Z"
      />
    </svg>
  );
};
export default SvgTuning2;
