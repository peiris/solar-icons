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
        fill="currentColor"
        d="M16.959 9.75a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-.75.75ZM7 12.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM17 11.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM6.209 15a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-1.5 0v-7ZM16.959 22.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM6.209 2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0V2Z"
      />
    </svg>
  );
};
export default SvgTuning;
