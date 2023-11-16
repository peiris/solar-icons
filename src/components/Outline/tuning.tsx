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
        d="M16.959 9.75a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-.75.75Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 5.75a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5ZM9.25 9.5a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0ZM17 18.25a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Zm2.25-3.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.209 15a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-1.5 0v-7ZM16.959 22.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM6.209 2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0V2Z"
      />
    </svg>
  );
};
export default SvgTuning;
