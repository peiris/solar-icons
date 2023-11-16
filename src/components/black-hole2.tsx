import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackHole2 = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={2} />
      <path d="M10.142 10.363C13.688 6.817 21.914 15.61 16.524 21" />
      <path d="M13.858 13.637C10.312 17.183 2.086 8.39 7.476 3" />
      <path d="M10.363 13.858C6.817 10.312 15.61 2.086 21 7.476" />
      <path d="M13.637 10.142C17.183 13.688 8.39 21.914 3 16.524" />
    </svg>
  );
};
export default SvgBlackHole2;
