import * as React from "react";
import type { SVGProps } from "react";
const SvgRewind5SecondsBack = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M11.324 1.675A.75.75 0 0 1 12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12c0-4.41 2.655-8.197 6.45-9.855a.75.75 0 1 1 .6 1.374 9.25 9.25 0 1 0 5.382-.617l.904 1.13a.75.75 0 0 1-1.172.937l-2-2.5a.75.75 0 0 1-.09-.794Zm-1.15 6.93a1.25 1.25 0 0 1 1.186-.855H14a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5H12a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645l.667-2Zm.757 2.474Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRewind5SecondsBack;
