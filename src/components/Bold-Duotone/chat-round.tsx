import * as React from "react";
import type { SVGProps } from "react";
const SvgChatRound = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.456 3.09A10 10 0 0 0 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.764.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.633 1.633 0 0 1 1.149.134A9.96 9.96 0 0 0 12 22c4.885 0 8.952-3.503 9.826-8.134A9 9 0 0 1 7.456 3.09Z"
      />
      <path
        fill="currentColor"
        d="M21.826 13.866C21.94 13.26 22 12.637 22 12c0-5.523-4.477-10-10-10a9.96 9.96 0 0 0-4.544 1.09 9 9 0 0 0 14.37 10.776Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgChatRound;
