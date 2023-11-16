import * as React from "react";
import type { SVGProps } from "react";
const SvgVinylRecord = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7.404 16.597a6.5 6.5 0 0 1 0-9.193m9.192 0a6.5 6.5 0 0 1 0 9.193"
      />
    </svg>
  );
};
export default SvgVinylRecord;
