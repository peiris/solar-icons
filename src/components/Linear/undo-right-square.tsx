import * as React from "react";
import type { SVGProps } from "react";
const SvgUndoRightSquare = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 9.5H9.962c-1.368 0-2.052 0-2.548.32a2 2 0 0 0-.594.594c-.32.496-.32 1.18-.32 2.548s0 2.052.32 2.547a2 2 0 0 0 .594.594c.496.32 1.18.32 2.548.32H14.5m3-6.923-2.25-2.077M17.5 9.5l-2.25 2.077"
      />
    </svg>
  );
};
export default SvgUndoRightSquare;
