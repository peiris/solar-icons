import * as React from "react";
import type { SVGProps } from "react";
const SvgListDownMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6Zm0 5a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.012 18.57c.28.24.695.24.976 0l3.5-3a.75.75 0 0 0-.976-1.14L17.5 17.013l-3.012-2.581a.75.75 0 1 0-.976 1.139l3.5 3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgListDownMinimalistic;
