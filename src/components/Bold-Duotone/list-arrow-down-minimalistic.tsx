import * as React from "react";
import type { SVGProps } from "react";
const SvgListArrowDownMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6Zm0 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.97 17.53a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V9a.75.75 0 0 0-1.5 0v6.19l-1.22-1.22a.75.75 0 1 0-1.06 1.06l2.5 2.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgListArrowDownMinimalistic;
