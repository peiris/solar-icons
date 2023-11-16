import * as React from "react";
import type { SVGProps } from "react";
const SvgBombMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15.665 2.83a.75.75 0 0 1 1.006.335l.5 1a.75.75 0 1 1-1.342.67l-.5-1a.75.75 0 0 1 .336-1.006ZM18.83 7.165a.75.75 0 0 1 1.005-.336l1 .5a.75.75 0 1 1-.67 1.342l-1-.5a.75.75 0 0 1-.336-1.006ZM20.53 4.53a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06l1-1ZM17 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0ZM17.53 7.53 16.372 8.69a9.054 9.054 0 0 0-1.06-1.061L16.47 6.47a.75.75 0 1 1 1.06 1.06Z"
      />
    </svg>
  );
};
export default SvgBombMinimalistic;
