import * as React from "react";
import type { SVGProps } from "react";
const SvgRadialBlur = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15.5 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM15.5 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM11 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM11 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
      />
      <path
        fill="currentColor"
        d="M15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
      <path
        fill="currentColor"
        d="M15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM15 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.5 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.25 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM5.75 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM18.25 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM5.75 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
    </svg>
  );
};
export default SvgRadialBlur;
