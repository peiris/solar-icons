import * as React from "react";
import type { SVGProps } from "react";
const SvgCup = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3 7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h6c1.886 0 2.828 0 3.414.586.182.181.307.397.393.664H18a4.75 4.75 0 1 1 0 9.5h-1v-1.5h1a3.25 3.25 0 0 0 0-6.5h-1.01c.01.364.01.777.01 1.25v5.25H3V7ZM3.011 13.75h13.978c-.036 1.705-.193 2.696-.868 3.371C15.243 18 13.828 18 11 18H9c-2.828 0-4.243 0-5.121-.879-.675-.675-.832-1.666-.868-3.371Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 21a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCup;
