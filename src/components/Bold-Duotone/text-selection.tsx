import * as React from "react";
import type { SVGProps } from "react";
const SvgTextSelection = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0V9.75H9A.75.75 0 0 1 8.25 9Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <g fill="currentColor" opacity={0.3}>
        <path d="M4.75 5.855a1.994 1.994 0 0 1-1.5 0v12.29a1.993 1.993 0 0 1 1.5 0V5.855ZM5.855 4.75h12.29a1.993 1.993 0 0 1 0-1.5H5.855a1.994 1.994 0 0 1 0 1.5ZM19.25 5.855a1.994 1.994 0 0 0 1.5 0v12.29a1.994 1.994 0 0 0-1.5 0V5.855ZM18.145 19.25H5.855a1.994 1.994 0 0 1 0 1.5h12.29a1.994 1.994 0 0 1 0-1.5Z" />
      </g>
    </svg>
  );
};
export default SvgTextSelection;
