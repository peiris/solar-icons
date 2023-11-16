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
        d="M9.25 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM14.25 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
      />
      <g fill="currentColor" opacity={0.5}>
        <path d="M17.166 7.709a3.008 3.008 0 0 0-.021-1.5h4.605a.75.75 0 0 1 0 1.5h-4.584ZM11.356 6.209a3.003 3.003 0 0 0-.022 1.5H1.75a.75.75 0 0 1 0-1.5h9.606ZM6.356 16.209H1.75a.75.75 0 0 0 0 1.5h4.584a3.007 3.007 0 0 1 .022-1.5ZM12.166 17.709h9.584a.75.75 0 0 0 0-1.5h-9.605a3.003 3.003 0 0 1 .02 1.5Z" />
      </g>
    </svg>
  );
};
export default SvgTuning2;
