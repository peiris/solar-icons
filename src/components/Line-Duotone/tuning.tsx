import * as React from "react";
import type { SVGProps } from "react";
const SvgTuning = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M10 9.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM20 14.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m17 11 .041-9M7 2v4M7 13v9m10 0v-4"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgTuning;
