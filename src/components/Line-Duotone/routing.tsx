import * as React from "react";
import type { SVGProps } from "react";
const SvgRouting = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8 4.25a.75.75 0 0 0 0 1.5v-1.5Zm12 14H7.5v1.5H20v-1.5Zm-12.5-5.5h9v-1.5h-9v1.5Zm9-8.5H8v1.5h8.5v-1.5Zm4.25 4.25a4.25 4.25 0 0 0-4.25-4.25v1.5a2.75 2.75 0 0 1 2.75 2.75h1.5Zm-4.25 4.25a4.25 4.25 0 0 0 4.25-4.25h-1.5a2.75 2.75 0 0 1-2.75 2.75v1.5ZM4.75 15.5a2.75 2.75 0 0 1 2.75-2.75v-1.5a4.25 4.25 0 0 0-4.25 4.25h1.5Zm2.75 2.75a2.75 2.75 0 0 1-2.75-2.75h-1.5a4.25 4.25 0 0 0 4.25 4.25v-1.5Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18 17 2 2-2 2"
      />
      <circle cx={6} cy={5} r={2} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default SvgRouting;
