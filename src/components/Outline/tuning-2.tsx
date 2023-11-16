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
        fillRule="evenodd"
        d="M18.25 7a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM14.5 9.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM5.75 17a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0Zm3.75 2.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.25 16.959a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75ZM9 6.209a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h7ZM1.25 16.959a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75ZM22 6.209a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h2Z"
      />
    </svg>
  );
};
export default SvgTuning2;
