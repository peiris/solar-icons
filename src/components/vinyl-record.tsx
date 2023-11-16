import * as React from "react";
import type { SVGProps } from "react";
const SvgVinylRecord = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <circle cx={12} cy={12} r={3} />
      <path d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142Z" />
      <path d="M7.404 16.597a6.5 6.5 0 0 1 0-9.193m9.192 0a6.5 6.5 0 0 1 0 9.193" />
    </svg>
  );
};
export default SvgVinylRecord;
