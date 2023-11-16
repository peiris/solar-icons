import * as React from "react";
import type { SVGProps } from "react";
const SvgList = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17 3.25a.75.75 0 0 1 .6.3l3 4a.75.75 0 1 1-1.2.9l-1.65-2.2v11.5l1.65-2.2a.75.75 0 1 1 1.2.9l-3 4a.75.75 0 0 1-1.2 0l-3-4a.75.75 0 1 1 1.2-.9l1.65 2.2V6.25l-1.65 2.2a.75.75 0 1 1-1.2-.9l3-4a.75.75 0 0 1 .6-.3ZM3.25 7A.75.75 0 0 1 4 6.25h7a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7Zm0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgList;
