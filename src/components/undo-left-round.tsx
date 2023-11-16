import * as React from "react";
import type { SVGProps } from "react";
const SvgUndoLeftRound = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M4 7h11a5 5 0 0 1 0 10H8M4 7l3-3M4 7l3 3" />
    </svg>
  );
};
export default SvgUndoLeftRound;
