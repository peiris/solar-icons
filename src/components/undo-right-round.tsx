import * as React from "react";
import type { SVGProps } from "react";
const SvgUndoRightRound = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M20 7H9a5 5 0 1 0 0 10h7m4-10-3-3m3 3-3 3" />
    </svg>
  );
};
export default SvgUndoRightRound;
