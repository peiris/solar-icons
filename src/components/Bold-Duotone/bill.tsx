import * as React from "react";
import type { SVGProps } from "react";
const SvgBill = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.625 20.592a1.754 1.754 0 0 1 2.25 0c.436.37 1.125.074 1.125-.483V3.891c0-.557-.69-.853-1.125-.483a1.754 1.754 0 0 1-2.25 0 1.754 1.754 0 0 0-2.25 0 1.754 1.754 0 0 1-2.25 0 1.754 1.754 0 0 0-2.25 0 1.754 1.754 0 0 1-2.25 0 1.754 1.754 0 0 0-2.25 0 1.754 1.754 0 0 1-2.25 0C3.689 3.038 3 3.334 3 3.891v16.218c0 .557.69.853 1.125.483a1.754 1.754 0 0 1 2.25 0 1.754 1.754 0 0 0 2.25 0 1.754 1.754 0 0 1 2.25 0 1.754 1.754 0 0 0 2.25 0 1.754 1.754 0 0 1 2.25 0 1.754 1.754 0 0 0 2.25 0Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M6.75 15.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75ZM6.75 12a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75ZM6.75 8.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Z"
      />
    </svg>
  );
};
export default SvgBill;
