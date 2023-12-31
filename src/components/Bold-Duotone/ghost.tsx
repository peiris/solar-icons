import * as React from "react";
import type { SVGProps } from "react";
const SvgGhost = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 19.206V12c0-5.523-4.477-10-10-10S2 6.477 2 12v7.206a1.727 1.727 0 0 0 2.5 1.544 2.891 2.891 0 0 1 2.896.18 2.892 2.892 0 0 0 3.208 0l.353-.234a1.881 1.881 0 0 1 2.086 0l.353.235a2.892 2.892 0 0 0 3.208 0 2.891 2.891 0 0 1 2.897-.18c1.148.573 2.499-.261 2.499-1.545Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M15 12c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5.448 1.5 1 1.5ZM10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5Z"
      />
    </svg>
  );
};
export default SvgGhost;
