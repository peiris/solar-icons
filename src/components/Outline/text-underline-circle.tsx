import * as React from "react";
import type { SVGProps } from "react";
const SvgTextUnderlineCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.25 17a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM8.75 7a.75.75 0 0 0-1.5 0v3a4.75 4.75 0 1 0 9.5 0V7a.75.75 0 0 0-1.5 0v3a3.25 3.25 0 0 1-6.5 0V7Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12ZM12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTextUnderlineCircle;
