import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaylistMinimalistic2 = (props: SVGProps<SVGSVGElement>) => {
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
      <g
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        opacity={0.3}
      >
        <path d="M15.75 6a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75ZM13.75 10a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75ZM9.75 14a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75ZM8.75 18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75Z" />
      </g>
      <path
        fill="currentColor"
        d="M17 7.25a.75.75 0 0 1 .75.75A3.25 3.25 0 0 0 21 11.25a.75.75 0 0 1 0 1.5c-1.257 0-2.4-.488-3.25-1.286V16.5a3.25 3.25 0 1 1-1.5-2.74V8a.75.75 0 0 1 .75-.75Z"
      />
    </svg>
  );
};
export default SvgPlaylistMinimalistic2;
