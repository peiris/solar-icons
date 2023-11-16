import * as React from "react";
import type { SVGProps } from "react";
const SvgTransferHorizontal = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 4 4 10h10m6 0h-2.5M14.5 20l5.5-6H10m-6 0h2.5"
      />
    </svg>
  );
};
export default SvgTransferHorizontal;
