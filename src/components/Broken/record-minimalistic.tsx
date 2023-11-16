import * as React from "react";
import type { SVGProps } from "react";
const SvgRecordMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M21 11.5A3.5 3.5 0 1 1 17.5 8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6.5 15h11"
      />
    </svg>
  );
};
export default SvgRecordMinimalistic;
