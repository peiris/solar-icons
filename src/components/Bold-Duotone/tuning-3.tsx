import * as React from "react";
import type { SVGProps } from "react";
const SvgTuning3 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM18 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      />
      <g fill="currentColor" opacity={0.5}>
        <path d="M12.75 10.145a1.994 1.994 0 0 0-1.5 0V5a.75.75 0 0 1 1.5 0v5.145ZM11.25 13.855a1.994 1.994 0 0 0 1.5 0V19a.75.75 0 0 1-1.5 0v-5.145ZM19.25 12.145a1.994 1.994 0 0 1 1.5 0V5a.75.75 0 0 0-1.5 0v7.145ZM19.25 15.855V19a.75.75 0 0 0 1.5 0v-3.145a1.994 1.994 0 0 1-1.5 0ZM4.75 8.145a1.994 1.994 0 0 0-1.5 0V5a.75.75 0 0 1 1.5 0v3.145ZM4.75 11.855a1.993 1.993 0 0 1-1.5 0V19a.75.75 0 0 0 1.5 0v-7.145Z" />
      </g>
    </svg>
  );
};
export default SvgTuning3;
