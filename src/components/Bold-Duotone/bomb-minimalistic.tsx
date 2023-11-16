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
        d="M17 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M16.671 3.165a.75.75 0 0 0-1.342.67l.5 1a.75.75 0 0 0 1.342-.67l-.5-1ZM19.836 6.83a.75.75 0 0 0-.671 1.341l1 .5a.75.75 0 0 0 .67-1.342l-1-.5ZM20.53 4.53a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06l1-1ZM15.307 9.754 17.53 7.53a.75.75 0 1 0-1.06-1.06l-2.223 2.223a7.55 7.55 0 0 1 1.06 1.06Z"
      />
    </svg>
  );
};
export default SvgBombMinimalistic;
