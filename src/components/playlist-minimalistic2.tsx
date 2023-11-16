import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaylistMinimalistic2 = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M15 6H3M13 10H3M9 14H3M8 18H3M17 16.5V8" />
      <circle cx={14.5} cy={16.5} r={2.5} />
      <path d="M21 12a4 4 0 0 1-4-4" />
    </svg>
  );
};
export default SvgPlaylistMinimalistic2;
