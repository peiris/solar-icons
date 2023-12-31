import * as React from "react";
import type { SVGProps } from "react";
const SvgServerPath = (props: SVGProps<SVGSVGElement>) => {
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
        d="M1.25 5A3.75 3.75 0 0 1 5 1.25h14A3.75 3.75 0 0 1 21.25 8 3.75 3.75 0 0 1 19 14.75h-6.25v1.604c.916.259 1.637.98 1.896 1.896H22a.75.75 0 0 1 0 1.5h-7.353a2.751 2.751 0 0 1-5.293 0H2a.75.75 0 0 1 0-1.5h7.354a2.756 2.756 0 0 1 1.896-1.896V14.75H5A3.75 3.75 0 0 1 2.75 8a3.744 3.744 0 0 1-1.5-3ZM5 7.25a2.25 2.25 0 0 1 0-4.5h14a2.25 2.25 0 0 1 0 4.5H5Zm14 1.5H5a2.25 2.25 0 0 0 0 4.5h14a2.25 2.25 0 0 0 0-4.5ZM12.25 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75ZM12 17.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  );
};
export default SvgServerPath;
