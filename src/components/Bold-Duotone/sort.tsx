import * as React from "react";
import type { SVGProps } from "react";
const SvgSort = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M18.75 8a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75ZM16.75 12a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .75.75ZM14.75 16a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75Z"
      />
    </svg>
  );
};
export default SvgSort;
